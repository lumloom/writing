(function () {
  window.HaruMemory = window.HaruMemory || {};

  const dictionary = (window.HaruMemory.memorySeeds || []).reduce((result, seed) => {
    result[seed.category] = result[seed.category] || [];
    result[seed.subcategory] = result[seed.subcategory] || [];
    result[seed.category].push(seed.keyword);
    result[seed.subcategory].push(seed.keyword);
    return result;
  }, {});

  window.HaruMemory.keywordDictionary = Object.fromEntries(
    Object.entries(dictionary).map(([category, keywords]) => [category, [...new Set(keywords)]])
  );

  window.HaruMemory.stopWords = new Set([
    "오늘", "가장", "나는", "내가", "그리고", "그래서", "하지만", "그때", "지금", "정말", "조금", "너무",
    "있다", "있었다", "것은", "것이", "것을", "그냥", "아직", "먼저", "생각", "기억", "떠오르는",
    "무엇인가요", "어떤", "관련해", "관한", "있나요", "해볼까요", "싶나요"
  ]);
})();
