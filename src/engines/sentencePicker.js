(function () {
  window.HaruMemory = window.HaruMemory || {};

  function splitSentences(text) {
    return text
      .replace(/\n+/g, ". ")
      .split(/(?<=[.!?。！？])\s+|(?<=[요다죠네음함됨])\s+/)
      .map((sentence) => sentence.trim())
      .filter(Boolean);
  }

  function pickBestSentence(body) {
    const dictionary = window.HaruMemory.keywordDictionary || {};
    const emotionalWords = dictionary["감정"] || [];
    const candidates = splitSentences(body)
      .map((sentence) => sentence.trim())
      .filter((sentence) => sentence.length >= 12 && sentence.length <= 140);

    if (!candidates.length) return "";

    return candidates
      .map((sentence) => ({
        sentence,
        score:
          sentence.length +
          emotionalWords.filter((word) => sentence.includes(word)).length * 25 +
          Object.values(dictionary).flat().filter((word) => sentence.includes(word)).length * 8
      }))
      .sort((a, b) => b.score - a.score)[0].sentence;
  }

  window.HaruMemory.sentencePicker = {
    splitSentences,
    pickBestSentence
  };
})();
