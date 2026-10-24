(function () {
  window.HaruMemory = window.HaruMemory || {};

  function fillTemplate(template, seed) {
    return applyParticles(template.replaceAll("{keyword}", seed.keyword), seed.keyword);
  }

  function hasBatchim(value) {
    const last = value[value.length - 1];
    const code = last?.charCodeAt(0);
    if (!code || code < 0xac00 || code > 0xd7a3) return false;
    return (code - 0xac00) % 28 !== 0;
  }

  function applyParticles(text, keyword) {
    const batchim = hasBatchim(keyword);
    return text
      .replaceAll(`${keyword}를`, `${keyword}${batchim ? "을" : "를"}`)
      .replaceAll(`${keyword}와`, `${keyword}${batchim ? "과" : "와"}`)
      .replaceAll(`${keyword}가`, `${keyword}${batchim ? "이" : "가"}`)
      .replaceAll(`${keyword}는`, `${keyword}${batchim ? "은" : "는"}`);
  }

  function generatePrompts() {
    const seeds = window.HaruMemory.memorySeeds || [];
    const questions = window.HaruMemory.questionTemplates || [];
    const hints = window.HaruMemory.hintTemplates || [];

    return seeds.map((seed, index) => {
      const questionTemplate = questions[index % questions.length];
      return {
        id: seed.id,
        seed,
        mode: "글감",
        category: seed.category,
        subcategory: seed.subcategory,
        keyword: seed.keyword,
        difficulty: seed.difficulty,
        tags: seed.tags,
        text: fillTemplate(questionTemplate, seed),
        hint: hints[index % hints.length]
      };
    });
  }

  function promptForDateSeed(prompts, dateKey) {
    const seed = Number(dateKey.replaceAll("-", ""));
    return prompts[seed % prompts.length];
  }

  function randomPrompt(prompts, exceptKey, category = "all") {
    const pool = category === "all" ? prompts : prompts.filter((prompt) => prompt.category === category);
    const candidates = pool.filter((prompt) => prompt.id !== exceptKey && prompt.text !== exceptKey);
    if (!candidates.length) return pool[0] || prompts[0];
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  window.HaruMemory.promptGenerator = {
    generatePrompts,
    promptForDateSeed,
    randomPrompt
  };
})();
