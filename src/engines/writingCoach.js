(function () {
  window.HaruMemory = window.HaruMemory || {};

  function coachMessage(length) {
    if (length === 0) return "떠오르는 단어 하나만 적어도 괜찮아요.";
    if (length <= 50) return "좋아요. 이제 그 장면에 누가 있었는지만 하나 더 적어볼까요?";
    if (length <= 150) return "기억이 조금씩 살아나고 있어요. 그때의 냄새나 소리를 하나 더 떠올려보세요.";
    if (length <= 300) return "충분히 좋은 기록이에요. 지금 느끼는 마음을 한 문장 덧붙여도 좋아요.";
    return "오늘의 기억이 잘 남았습니다. 이 정도면 충분해요.";
  }

  function suggestTitle(body, prompt) {
    const keyword = window.HaruMemory.tagEngine.extractKeywords(`${body} ${prompt.text} ${prompt.keyword || ""}`)[0];
    if (keyword) return `${keyword}에 남은 기억`;
    return `${prompt.category}의 작은 기억`;
  }

  function suggestStarter(body, prompt) {
    if (!body) return prompt.starter;
    const keyword = window.HaruMemory.tagEngine.extractKeywords(body)[0] || prompt.keyword;
    return `${keyword}${hasBatchim(keyword) ? "을" : "를"} 떠올리면 아직도 먼저 생각나는 장면이 있다.`;
  }

  function hasBatchim(value) {
    const last = value[value.length - 1];
    const code = last?.charCodeAt(0);
    if (!code || code < 0xac00 || code > 0xd7a3) return false;
    return (code - 0xac00) % 28 !== 0;
  }

  function suggestFollowupQuestion(body, prompt) {
    const tags = window.HaruMemory.tagEngine.analyzeMemory(body, "", prompt).tags;
    const questions = window.HaruMemory.followupQuestions || [];

    if (tags.includes("감정")) return "지금 다시 생각하면 어떤 마음이 남나요?";
    if (tags.includes("가족")) return "그 사람의 표정이나 말투는 어땠나요?";
    if (tags.includes("어린 시절")) return "그때의 나는 무엇을 제일 좋아했나요?";
    if (tags.includes("음식")) return "그 음식을 먹던 자리에는 누가 있었나요?";
    if (tags.includes("학교")) return "그 장면에서 가장 선명한 소리는 무엇이었나요?";

    return questions[(body.length + prompt.text.length) % questions.length];
  }

  function suggestPolishNotes(body) {
    if (!body) return ["아직 살펴볼 문장이 없어요. 한 줄만 적고 다시 눌러보세요."];

    const notes = [];
    const sentences = window.HaruMemory.sentencePicker.splitSentences(body);
    const longSentence = sentences.find((sentence) => sentence.length > 90);

    if (longSentence) {
      notes.push("긴 문장이 하나 있어요. 중간에 쉼표나 마침표를 넣으면 읽기가 조금 편해집니다.");
    }

    if (!/[.?!요다죠네음함됨]$/.test(body.trim())) {
      notes.push("마지막 문장이 열려 있어요. 마침표를 찍거나 한 단어만 더 붙여도 기록이 단단해집니다.");
    }

    if (window.HaruMemory.tagEngine.extractKeywords(body).length < 2) {
      notes.push("물건, 장소, 사람 이름 중 하나를 더 적으면 나중에 이 기억을 찾기 쉬워져요.");
    }

    if (!notes.length) {
      notes.push("지금 문장은 충분히 자연스러워요. 억지로 다듬기보다 이 느낌 그대로 남겨도 좋습니다.");
    }

    return notes;
  }

  window.HaruMemory.writingCoach = {
    coachMessage,
    suggestTitle,
    suggestStarter,
    suggestFollowupQuestion,
    suggestPolishNotes
  };
})();
