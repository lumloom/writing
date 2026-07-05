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
    const starters = window.HaruMemory.starterTemplates || [];

    return seeds.map((seed, index) => {
      const questionTemplate = questions[index % questions.length];
      const starterTemplate = starters[index % starters.length];
      return {
        id: seed.id,
        seed,
        mode: "기억",
        category: seed.category,
        keyword: seed.keyword,
        difficulty: seed.difficulty,
        tags: seed.tags,
        text: fillTemplate(questionTemplate, seed),
        hint: `${seed.keyword}와 연결된 사람, 장소, 냄새, 소리 중 하나만 골라 적어도 좋아요.`,
        starter: fillTemplate(starterTemplate, seed)
      };
    });
  }

  function promptForDateSeed(prompts, dateKey) {
    const seed = Number(dateKey.replaceAll("-", ""));
    return prompts[seed % prompts.length];
  }

  function randomPrompt(prompts, exceptKey) {
    const candidates = prompts.filter((prompt) => prompt.id !== exceptKey && prompt.text !== exceptKey);
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  window.HaruMemory.promptGenerator = {
    generatePrompts,
    promptForDateSeed,
    randomPrompt
  };
})();
