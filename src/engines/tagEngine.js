(function () {
  window.HaruMemory = window.HaruMemory || {};

  function detectTags(text, prompt) {
    const dictionary = window.HaruMemory.keywordDictionary || {};
    const fromText = Object.entries(dictionary)
      .filter(([, words]) => words.some((word) => text.includes(word)))
      .map(([tag]) => tag);
    const fromPrompt = prompt?.tags || [prompt?.category].filter(Boolean);

    return [...new Set([...fromPrompt, ...fromText])].slice(0, 6);
  }

  function extractKeywords(text) {
    const dictionary = window.HaruMemory.keywordDictionary || {};
    const stopWords = window.HaruMemory.stopWords || new Set();
    const tokens = text
      .replace(/[^\uAC00-\uD7A3a-zA-Z0-9\s]/g, " ")
      .split(/\s+/)
      .map((token) => token.trim())
      .filter((token) => token.length >= 2 && !stopWords.has(token))
      .map(normalizeToken)
      .filter((token) => token.length >= 2 && !stopWords.has(token));
    const counts = tokens.reduce((acc, token) => {
      acc[token] = (acc[token] || 0) + 1;
      return acc;
    }, {});

    Object.values(dictionary)
      .flat()
      .forEach((word) => {
        if (text.includes(word)) {
          counts[word] = (counts[word] || 0) + 3;
        }
      });

    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1] || b[0].length - a[0].length)
      .map(([word]) => word)
      .slice(0, 8);
  }

  function normalizeToken(token) {
    if (token === "떠오르") return "떠오르는";
    if (token.length <= 1) return token;
    return token.replace(/(으로|에서|에게|부터|까지|처럼|보다|마다|만큼|하고|이며|이고|을|를|은|는|이|가|와|과|에|의)$/u, "");
  }

  function analyzeMemory(body, title, prompt) {
    const writtenSource = `${title} ${body}`;
    const promptSource = `${prompt?.text || ""} ${prompt?.keyword || ""} ${prompt?.category || ""}`;
    return {
      tags: detectTags(`${writtenSource} ${promptSource}`, prompt),
      keywords: extractKeywords(writtenSource).slice(0, 6),
      bestSentence: window.HaruMemory.sentencePicker.pickBestSentence(body)
    };
  }

  window.HaruMemory.tagEngine = {
    detectTags,
    extractKeywords,
    analyzeMemory
  };
})();
