(function () {
  window.HaruMemory = window.HaruMemory || {};

  function buildMemoryDex(entries) {
    return entries
      .flatMap((entry) => entry.analysis?.keywords || [])
      .reduce((acc, keyword) => {
        acc[keyword] = (acc[keyword] || 0) + 1;
        return acc;
      }, {});
  }

  window.HaruMemory.memoryDex = {
    buildMemoryDex
  };
})();
