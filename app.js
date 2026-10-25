const legacyPrompts = [
  {
    mode: "기억",
    category: "오늘",
    text: "오늘 가장 오래 본 물건은?",
    hint: "책상 위, 손에 든 것, 화면 속 물건처럼 오늘 오래 머문 대상을 떠올려보세요.",
  },
  {
    mode: "기억",
    category: "어린 시절",
    text: "어릴 때 가장 좋아했던 과자는?",
    hint: "맛보다 먼저 떠오르는 포장지, 사 먹던 장소, 같이 먹던 사람을 적어보세요.",
  },
  {
    mode: "기억",
    category: "물건",
    text: "집에서 가장 오래된 물건은?",
    hint: "언제부터 있었는지 몰라도 계속 자리를 지키고 있는 물건을 찾아보세요.",
  },
  {
    mode: "감각",
    category: "냄새",
    text: "오늘 가장 기억나는 냄새는?",
    hint: "음식, 비누, 길거리, 방 안 공기처럼 오늘 코끝에 남은 냄새를 골라보세요.",
  },
  {
    mode: "기억",
    category: "학교",
    text: "초등학교 운동장에서 가장 먼저 떠오르는 장면은?",
    hint: "운동장의 색, 소리, 쉬는 시간, 줄 서 있던 장면 중 하나만 잡아보세요.",
  },
  {
    mode: "기억",
    category: "집",
    text: "냉장고를 열면 가장 먼저 보이는 것은?",
    hint: "지금 냉장고 안을 떠올리고, 그 물건이 왜 거기 있는지 이어 써보세요.",
  },
  {
    mode: "기억",
    category: "말",
    text: "어릴 때 가장 많이 들었던 말은?",
    hint: "칭찬이어도, 잔소리여도 괜찮아요. 그 말을 듣던 장면부터 적어보세요.",
  },
  {
    mode: "기억",
    category: "오늘",
    text: "오늘 웃었던 이유는?",
    hint: "크게 웃지 않았어도 괜찮아요. 입꼬리가 살짝 올라간 순간을 떠올려보세요.",
  },
  {
    mode: "기억",
    category: "음식",
    text: "최근에 먹은 것 중 다시 생각나는 음식은?",
    hint: "맛, 그릇, 같이 있던 사람, 먹던 장소 중 하나에서 시작해보세요.",
  },
  {
    mode: "기억",
    category: "방",
    text: "내 방에서 가장 자주 손이 가는 물건은?",
    hint: "매일 만지는 물건 하나를 고르고, 언제부터 익숙해졌는지 적어보세요.",
  },
  {
    mode: "감각",
    category: "소리",
    text: "오늘 가장 오래 들은 소리는?",
    hint: "키보드 소리, 차 소리, 사람 목소리처럼 하루 곁에 있던 소리를 떠올려보세요.",
  },
  {
    mode: "기억",
    category: "가족",
    text: "가족 중 한 사람의 말투를 떠올리면?",
    hint: "자주 쓰는 말, 부르는 방식, 목소리의 높낮이를 그대로 적어보세요.",
  },
  {
    mode: "기억",
    category: "가게",
    text: "어릴 때 자주 가던 가게는?",
    hint: "문을 열 때의 느낌, 진열대, 계산대, 사장님 얼굴 중 하나를 적어보세요.",
  },
  {
    mode: "기억",
    category: "오늘",
    text: "오늘 가장 많이 만진 물건은?",
    hint: "휴대폰 말고도 컵, 문고리, 펜, 가방처럼 손에 남은 물건을 찾아보세요.",
  },
  {
    mode: "기억",
    category: "옷",
    text: "오래 입어서 몸에 익은 옷은?",
    hint: "그 옷을 입고 갔던 장소나, 자꾸 손이 가는 이유를 적어보세요.",
  },
  {
    mode: "기억",
    category: "사진",
    text: "휴대폰 사진첩에서 최근에 다시 본 사진은?",
    hint: "사진 속 장면보다 그 사진을 왜 다시 봤는지부터 적어도 좋아요.",
  },
  {
    mode: "기억",
    category: "길",
    text: "오늘 지나간 길에서 눈에 띈 것은?",
    hint: "간판, 나무, 사람, 바닥의 무늬처럼 아주 작은 것 하나만 골라보세요.",
  },
  {
    mode: "기억",
    category: "계절",
    text: "여름이면 꼭 생각나는 장면은?",
    hint: "더위, 선풍기, 아이스크림, 젖은 머리처럼 여름의 한 장면을 적어보세요.",
  },
  {
    mode: "기억",
    category: "계절",
    text: "겨울 아침 하면 떠오르는 것은?",
    hint: "이불 밖 공기, 입김, 따뜻한 음료, 어두운 창밖 중 하나를 골라보세요.",
  },
  {
    mode: "기억",
    category: "하루",
    text: "오늘 집에 들어와서 가장 먼저 한 일은?",
    hint: "신발을 벗는 순간, 불을 켜는 손, 가방을 내려놓는 자리부터 적어보세요.",
  },
  {
    mode: "기억",
    category: "물건",
    text: "버리려다 계속 남겨둔 물건은?",
    hint: "왜 버리지 못했는지 설명하기보다, 그 물건을 마지막으로 만진 순간을 떠올려보세요.",
  },
  {
    mode: "기억",
    category: "친구",
    text: "친구와 함께 먹었던 음식 중 떠오르는 것은?",
    hint: "음식 이름보다 그때 앉아 있던 자리와 대화의 분위기를 적어보세요.",
  },
  {
    mode: "기억",
    category: "시간",
    text: "하루 중 가장 조용했던 순간은?",
    hint: "아무 일도 없던 몇 분을 골라 그때의 빛, 소리, 자세를 적어보세요.",
  },
  {
    mode: "기억",
    category: "말",
    text: "최근에 들은 말 중 오래 남은 말은?",
    hint: "멋진 말이 아니어도 괜찮아요. 계속 머릿속에 남은 한마디를 적어보세요.",
  },
  {
    mode: "기억",
    category: "장소",
    text: "한동안 가지 않았지만 선명한 장소는?",
    hint: "그 장소의 입구, 바닥, 소리처럼 몸이 기억하는 부분부터 적어보세요.",
  },
  {
    mode: "기억",
    category: "오늘",
    text: "오늘 가장 오래 머문 자리는?",
    hint: "의자, 책상 앞, 차 안, 침대 위처럼 몸이 머문 곳을 떠올려보세요.",
  }
];

const storageKey = "haru-writing-app";
const todayKey = formatDate(new Date());
const memory = window.HaruMemory;
const prompts = memory.promptGenerator.generatePrompts();
const state = loadState();
let currentPrompt = normalizePrompt(state.todayPrompt) || promptForToday();
let selectedCategory = state.preferredCategory || "all";
let lastSelectedSentence = "";
let editingEntryId = null;
let selectedDateFilter = null;

const views = {
  write: document.querySelector("#writeView"),
  records: document.querySelector("#recordsView"),
  vault: document.querySelector("#vaultView"),
  stats: document.querySelector("#statsView")
};

const els = {
  todayLabel: document.querySelector("#todayLabel"),
  promptCategory: document.querySelector("#promptCategory"),
  currentPrompt: document.querySelector("#currentPrompt"),
  promptHint: document.querySelector("#promptHint"),
  categorySelect: document.querySelector("#categorySelect"),
  themeToggleBtn: document.querySelector("#themeToggleBtn"),
  themeToggleLabel: document.querySelector("#themeToggleLabel"),
  newDraftBtn: document.querySelector("#newDraftBtn"),
  newPromptBtn: document.querySelector("#newPromptBtn"),
  freeWriteBtn: document.querySelector("#freeWriteBtn"),
  cancelEditBtn: document.querySelector("#cancelEditBtn"),
  savePromptBtn: document.querySelector("#savePromptBtn"),
  saveSentenceBtn: document.querySelector("#saveSentenceBtn"),
  entrySubmitBtn: document.querySelector("#entrySubmitBtn"),
  exportMarkdownBtn: document.querySelector("#exportMarkdownBtn"),
  clearDateFilterBtn: document.querySelector("#clearDateFilterBtn"),
  exportState: document.querySelector("#exportState"),
  entryForm: document.querySelector("#entryForm"),
  entryTitle: document.querySelector("#entryTitle"),
  entryBody: document.querySelector("#entryBody"),
  wordCount: document.querySelector("#wordCount"),
  saveState: document.querySelector("#saveState"),
  recordSearch: document.querySelector("#recordSearch"),
  recordFilterState: document.querySelector("#recordFilterState"),
  recordList: document.querySelector("#recordList"),
  calendarGrid: document.querySelector("#calendarGrid"),
  promptLibrary: document.querySelector("#promptLibrary"),
  sentenceLibrary: document.querySelector("#sentenceLibrary"),
  streakCount: document.querySelector("#streakCount"),
  routineMessage: document.querySelector("#routineMessage"),
  totalEntries: document.querySelector("#totalEntries"),
  todayEntries: document.querySelector("#todayEntries"),
  monthEntries: document.querySelector("#monthEntries"),
  totalChars: document.querySelector("#totalChars"),
  favoriteCategory: document.querySelector("#favoriteCategory"),
  savedSentences: document.querySelector("#savedSentences"),
  memoryDexList: document.querySelector("#memoryDexList")
};

initialize();

function initialize() {
  els.todayLabel.textContent = new Intl.DateTimeFormat("ko-KR", {
    month: "long",
    day: "numeric",
    weekday: "long"
  }).format(new Date());

  initializeCategorySelect();
  applyTheme(state.theme || "quiet");
  const currentPromptIsInCatalog = prompts.some((prompt) => prompt.id === currentPrompt.id);
  if (!currentPromptIsInCatalog && currentPrompt.id !== "free-writing") {
    currentPrompt = selectedCategory === "all" ? promptForToday() : randomPrompt(currentPrompt.id || currentPrompt.text);
  } else if (selectedCategory !== "all" && currentPrompt.category !== selectedCategory) {
    currentPrompt = randomPrompt(currentPrompt.id || currentPrompt.text);
  }
  persist({ todayPrompt: currentPrompt, preferredCategory: selectedCategory, theme: state.theme || "quiet" });
  bindEvents();
  renderAll();
}

function initializeCategorySelect() {
  const categories = [...new Set(prompts.map((prompt) => prompt.category))];
  els.categorySelect.innerHTML = [
    `<option value="all">모든 주제</option>`,
    ...categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`)
  ].join("");

  if (!categories.includes(selectedCategory)) selectedCategory = "all";
  els.categorySelect.value = selectedCategory;
}

function applyTheme(theme) {
  const isFresh = theme === "fresh";
  document.body.dataset.theme = isFresh ? "fresh" : "quiet";
  els.themeToggleBtn.setAttribute("aria-pressed", String(isFresh));
  els.themeToggleLabel.textContent = isFresh ? "서재 모드" : "상큼 모드";
  document.querySelector('meta[name="theme-color"]').content = isFresh ? "#fff7e8" : "#f3f5ef";
}

function bindEvents() {
  document.querySelectorAll(".nav-tab").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  els.categorySelect.addEventListener("change", () => {
    selectedCategory = els.categorySelect.value;
    currentPrompt = randomPrompt(currentPrompt.id || currentPrompt.text);
    persist({ todayPrompt: currentPrompt, preferredCategory: selectedCategory });
    renderPrompt();
    els.saveState.textContent = selectedCategory === "all" ? "모든 주제에서 골랐어요" : `${selectedCategory} 주제를 골랐어요`;
  });

  els.themeToggleBtn.addEventListener("click", () => {
    const nextTheme = (state.theme || "quiet") === "quiet" ? "fresh" : "quiet";
    persist({ theme: nextTheme });
    applyTheme(nextTheme);
  });

  els.newDraftBtn.addEventListener("click", () => {
    exitEditMode();
    clearEditor();
    currentPrompt = randomPrompt(currentPrompt.id || currentPrompt.text);
    persist({ todayPrompt: currentPrompt });
    renderPrompt();
    els.saveState.textContent = "새 글쓰기를 시작해요";
  });

  els.newPromptBtn.addEventListener("click", () => {
    currentPrompt = randomPrompt(currentPrompt.id || currentPrompt.text);
    persist({ todayPrompt: currentPrompt });
    renderPrompt();
    els.saveState.textContent = "다른 기억을 꺼냈어요";
  });

  els.freeWriteBtn.addEventListener("click", () => {
    exitEditMode();
    clearEditor();
    currentPrompt = freeWritingPrompt();
    persist({ todayPrompt: currentPrompt });
    renderPrompt();
    els.saveState.textContent = "자유 글쓰기를 시작해요";
  });

  els.savePromptBtn.addEventListener("click", () => {
    const exists = state.savedPrompts.some((item) => item.text === currentPrompt.text);
    if (!exists) {
      state.savedPrompts.unshift({ ...currentPrompt, savedAt: new Date().toISOString() });
      saveState();
    }
    renderPromptLibrary();
    els.saveState.textContent = "글감 씨앗을 보관했어요";
  });

  document.addEventListener("selectionchange", rememberAnySelectedSentence);

  els.saveSentenceBtn.addEventListener("mousedown", (event) => {
    event.preventDefault();
    rememberAnySelectedSentence();
  });
  els.saveSentenceBtn.addEventListener("touchstart", rememberAnySelectedSentence, { passive: true });
  els.saveSentenceBtn.addEventListener("click", saveSelectedSentence);
  els.exportMarkdownBtn.addEventListener("click", exportMarkdown);
  els.cancelEditBtn.addEventListener("click", () => {
    exitEditMode();
    clearEditor();
    currentPrompt = randomPrompt(currentPrompt.id || currentPrompt.text);
    persist({ todayPrompt: currentPrompt });
    renderPrompt();
    els.saveState.textContent = "수정을 취소했어요";
  });
  els.clearDateFilterBtn.addEventListener("click", () => {
    selectedDateFilter = null;
    renderRecords();
    renderCalendar();
  });

  els.entryBody.addEventListener("input", () => {
    lastSelectedSentence = "";
    renderWordCount();
    els.saveState.textContent = "기록 작성 중";
  });

  els.entryBody.addEventListener("select", rememberSelectedSentence);
  els.entryBody.addEventListener("keyup", rememberSelectedSentence);
  els.entryBody.addEventListener("mouseup", rememberSelectedSentence);
  els.entryBody.addEventListener("touchend", rememberSelectedSentence);

  els.entryTitle.addEventListener("input", () => {
    els.saveState.textContent = "기록 작성 중";
  });

  els.entryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveEntry();
  });

  els.recordSearch.addEventListener("input", renderRecords);
  els.recordList.addEventListener("click", handleRecordAction);
  els.recordList.addEventListener("mouseup", rememberSelectedRecordSentence);
  els.recordList.addEventListener("keyup", rememberSelectedRecordSentence);
  els.recordList.addEventListener("touchend", rememberSelectedRecordSentence);
  els.calendarGrid.addEventListener("click", handleCalendarClick);
  els.promptLibrary.addEventListener("click", handleVaultDelete);
  els.sentenceLibrary.addEventListener("click", handleVaultDelete);
}

function switchView(viewName) {
  Object.entries(views).forEach(([name, element]) => {
    element.classList.toggle("active", name === viewName);
  });
  document.querySelectorAll(".nav-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });
}

function saveEntry() {
  const title = els.entryTitle.value.trim() || "제목 없는 기록";
  const body = els.entryBody.value.trim();

  if (!body) {
    els.entryBody.focus();
    els.saveState.textContent = "본문을 먼저 적어주세요";
    return;
  }

  if (editingEntryId) {
    const existingIndex = state.entries.findIndex((entry) => entry.id === editingEntryId);
    if (existingIndex >= 0) {
      state.entries[existingIndex] = {
        ...state.entries[existingIndex],
        title,
        body,
        prompt: currentPrompt,
        charCount: body.length,
        analysis: analyzeMemory(body, title, currentPrompt),
        updatedAt: new Date().toISOString()
      };
      saveState();
      exitEditMode();
      clearEditor();
      els.saveState.textContent = "기록을 수정했어요";
      renderAll();
      switchView("records");
      return;
    }
  }

  const entry = {
    id: `entry-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    date: todayKey,
    title,
    body,
    prompt: currentPrompt,
    charCount: body.length,
    analysis: analyzeMemory(body, title, currentPrompt),
    createdAt: new Date().toISOString()
  };

  state.entries.unshift(entry);
  saveState();
  clearEditor();
  currentPrompt = randomPrompt(currentPrompt.id || currentPrompt.text);
  persist({ todayPrompt: currentPrompt });
  els.saveState.textContent = "오늘의 기억을 남겼어요. 다음 글도 가볍게 이어갈 수 있어요.";
  renderAll();
}

function saveSelectedSentence() {
  rememberAnySelectedSentence();
  const selected = getCurrentSelectedSentence();

  if (!selected) {
    els.saveState.textContent = "작성 중인 글이나 저장된 글에서 문장 씨앗으로 남길 문장을 선택해 주세요";
    return;
  }

  const exists = state.savedSentences.some((item) => item.text === selected);
  if (!exists) {
    state.savedSentences.unshift({
      id: `sentence-${Date.now()}`,
      text: selected,
      prompt: currentPrompt,
      savedAt: new Date().toISOString()
    });
    saveState();
  }

  els.saveState.textContent = "문장 씨앗을 보관했어요";
  renderSentenceLibrary();
  renderStats();
}

function rememberSelectedSentence() {
  if (document.activeElement !== els.entryBody && !isTextAreaSelectionAvailable()) return;
  const selected = els.entryBody.value
    .slice(els.entryBody.selectionStart, els.entryBody.selectionEnd)
    .trim();

  if (selected) {
    lastSelectedSentence = selected;
  }
}

function rememberSelectedRecordSentence() {
  const selection = window.getSelection?.().toString().trim();

  if (selection) {
    lastSelectedSentence = selection;
  }
}

function rememberAnySelectedSentence() {
  const selected = getCurrentSelectedSentence();
  if (selected) {
    lastSelectedSentence = selected;
  }
}

function getCurrentSelectedSentence() {
  const textareaSelection = getTextareaSelection();
  if (textareaSelection) return textareaSelection;

  const pageSelection = window.getSelection?.().toString().trim();
  if (pageSelection) return pageSelection;

  return lastSelectedSentence;
}

function getTextareaSelection() {
  if (!isTextAreaSelectionAvailable()) return "";
  return els.entryBody.value
    .slice(els.entryBody.selectionStart, els.entryBody.selectionEnd)
    .trim();
}

function isTextAreaSelectionAvailable() {
  return (
    typeof els.entryBody.selectionStart === "number" &&
    typeof els.entryBody.selectionEnd === "number" &&
    els.entryBody.selectionEnd > els.entryBody.selectionStart
  );
}

function handleRecordAction(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const item = button.closest(".record-item");
  const entryId = item?.dataset.entryId;
  const entry = state.entries.map(normalizeEntry).find((record) => record.id === entryId);
  if (!entry) return;

  if (button.dataset.action === "toggle-read") {
    item.classList.toggle("expanded");
    button.textContent = item.classList.contains("expanded") ? "접기" : "전체 읽기";
    return;
  }

  if (button.dataset.action === "save-record-sentence") {
    rememberSelectedRecordSentence();
    saveSentenceFromSelection(entry);
    return;
  }

  if (button.dataset.action === "edit-entry") {
    startEditEntry(entry);
    return;
  }

  if (button.dataset.action === "delete-entry") {
    deleteEntry(entry);
  }
}

function deleteEntry(entry) {
  const ok = window.confirm("이 기록을 삭제할까요? 삭제한 기록은 되돌릴 수 없어요.");
  if (!ok) return;

  state.entries = state.entries.filter((item) => item.id !== entry.id);
  if (editingEntryId === entry.id) {
    exitEditMode();
    clearEditor();
  }
  saveState();
  renderAll();
  els.exportState.textContent = "기록을 삭제했어요";
}

function startEditEntry(entry) {
  editingEntryId = entry.id;
  currentPrompt = entry.prompt;
  els.entryTitle.value = entry.title;
  els.entryBody.value = entry.body;
  els.entrySubmitBtn.textContent = "수정 저장";
  els.cancelEditBtn.classList.remove("hidden");
  els.newDraftBtn.classList.add("hidden");
  els.saveState.textContent = "저장된 기록을 수정 중이에요";
  renderPrompt();
  renderWordCount();
  switchView("write");
  els.entryTitle.focus();
}

function exitEditMode() {
  editingEntryId = null;
  els.entrySubmitBtn.textContent = "오늘 기록하기";
  els.cancelEditBtn.classList.add("hidden");
  els.newDraftBtn.classList.remove("hidden");
}

function saveSentenceFromSelection(entry) {
  rememberAnySelectedSentence();
  const selected = getCurrentSelectedSentence();

  if (!selected) {
    els.exportState.textContent = "글 본문에서 보관할 문장을 드래그해 선택해 주세요";
    return;
  }

  const exists = state.savedSentences.some((item) => item.text === selected);
  if (!exists) {
    state.savedSentences.unshift({
      id: `sentence-${Date.now()}`,
      text: selected,
      prompt: entry.prompt,
      sourceTitle: entry.title,
      savedAt: new Date().toISOString()
    });
    saveState();
  }

  els.exportState.textContent = "문장 씨앗을 보관했어요";
  renderSentenceLibrary();
  renderStats();
}

function exportMarkdown() {
  const entries = state.entries.map(normalizeEntry);

  if (!entries.length) {
    switchView("records");
    els.recordList.innerHTML = `<div class="empty-state">저장할 기록이 아직 없어요.</div>`;
    els.exportState.textContent = "저장할 기록이 없어요";
    return;
  }

  try {
    const files = buildMarkdownFiles(entries);
    const blob = window.HaruZip.createArchive(files);
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `haru-writing-backup-${todayKey}.zip`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    els.exportState.textContent = `기록 ${entries.length}편을 ZIP 파일로 만들었어요`;
  } catch (error) {
    console.error("기록 내보내기에 실패했습니다.", error);
    els.exportState.textContent = "ZIP 파일을 만들지 못했어요. 잠시 후 다시 시도해 주세요";
  }
}

function buildMarkdownFiles(entries) {
  const sorted = [...entries].sort((a, b) =>
    (a.createdAt || a.updatedAt || a.date).localeCompare(b.createdAt || b.updatedAt || b.date)
  );
  const usedNames = new Set();
  const files = sorted.map((entry) => {
    const baseName = `${entry.date || todayKey}_${sanitizeFileName(entry.title)}`;
    let duplicateIndex = 1;
    let fileName = `${baseName}.md`;

    while (usedNames.has(fileName.toLocaleLowerCase("ko-KR"))) {
      duplicateIndex += 1;
      fileName = `${baseName}_${duplicateIndex}.md`;
    }
    usedNames.add(fileName.toLocaleLowerCase("ko-KR"));

    return {
      name: fileName,
      content: buildEntryMarkdown(entry),
      modifiedAt: entry.updatedAt || entry.createdAt || `${entry.date}T00:00:00`
    };
  });

  if (state.savedSentences.length) {
    files.push({
      name: "문장-보관함.md",
      content: buildSavedSentencesMarkdown(),
      modifiedAt: new Date().toISOString()
    });
  }

  return files;
}

function buildEntryMarkdown(entry) {
  const lines = [
    "---",
    "source: 하루문장",
    `date: ${entry.date}`,
    `title: ${JSON.stringify(entry.title)}`,
    `created_at: ${JSON.stringify(entry.createdAt || `${entry.date}T00:00:00`)}`,
    `updated_at: ${JSON.stringify(entry.updatedAt || entry.createdAt || `${entry.date}T00:00:00`)}`,
    `prompt: ${JSON.stringify(entry.prompt.text)}`,
    `category: ${JSON.stringify(entry.prompt.category)}`,
    `type: ${JSON.stringify(entry.prompt.mode)}`,
    `tags: ${JSON.stringify(entry.analysis.tags)}`,
    `keywords: ${JSON.stringify(entry.analysis.keywords)}`,
    "---",
    "",
    `# ${escapeMarkdownHeading(entry.title)}`,
    "",
    `- 날짜: ${entry.date}`,
    `- 글감 씨앗: ${entry.prompt.text}`,
    `- 글자 수: ${entry.charCount.toLocaleString("ko-KR")}자`
  ];

  if (entry.analysis.bestSentence) {
    lines.push("");
    lines.push(`> ${entry.analysis.bestSentence}`);
  }

  lines.push("");
  lines.push(entry.body.trim());
  lines.push("");

  return lines.join("\n");
}

function buildSavedSentencesMarkdown() {
  const lines = [
    "---",
    "source: 하루문장",
    `exported: ${todayKey}`,
    `title: ${JSON.stringify("문장 보관함")}`,
    "---",
    "",
    "# 문장 보관함",
    ""
  ];

  state.savedSentences.forEach((sentence) => {
    lines.push(`> ${sentence.text}`);
    lines.push("");
    lines.push(`- 출처: ${sentence.sourceTitle || "제목 없는 기록"}`);
    lines.push(`- 글감: ${sentence.prompt?.text || "알 수 없음"}`);
    lines.push("");
  });

  return lines.join("\n");
}

function sanitizeFileName(value) {
  const cleaned = (value || "제목 없는 기록")
    .replace(/[\\/:*?"<>|\u0000-\u001f]/g, " ")
    .replace(/\s+/g, " ")
    .replace(/[. ]+$/g, "")
    .trim()
    .slice(0, 60);
  return cleaned || "제목 없는 기록";
}

function clearEditor() {
  els.entryTitle.value = "";
  els.entryBody.value = "";
  lastSelectedSentence = "";
  renderWordCount();
}

function renderAll() {
  renderPrompt();
  renderWordCount();
  renderRecords();
  renderCalendar();
  renderPromptLibrary();
  renderSentenceLibrary();
  renderStats();
}

function renderPrompt() {
  els.promptCategory.textContent = [currentPrompt.category, currentPrompt.subcategory].filter(Boolean).join(" · ");
  els.currentPrompt.textContent = currentPrompt.text;
  els.promptHint.textContent = currentPrompt.hint;
}

function renderWordCount() {
  const length = els.entryBody.value.length;
  els.wordCount.textContent = `${length.toLocaleString("ko-KR")}자`;
}

function renderRecords() {
  const keyword = els.recordSearch.value.trim().toLowerCase();
  const filtered = state.entries
    .map(normalizeEntry)
    .filter((entry) => !selectedDateFilter || entry.date === selectedDateFilter)
    .filter((entry) => {
      const text = `${entry.title} ${entry.body} ${entry.prompt.text} ${entry.prompt.category} ${entry.prompt.mode} ${entry.analysis.tags.join(" ")} ${entry.analysis.keywords.join(" ")}`.toLowerCase();
      return text.includes(keyword);
    })
    .sort((a, b) => (b.createdAt || b.updatedAt || b.date).localeCompare(a.createdAt || a.updatedAt || a.date));

  if (!filtered.length) {
    els.recordFilterState.textContent = selectedDateFilter
      ? `${formatDisplayDate(selectedDateFilter)}에 남긴 기록`
      : "";
    els.clearDateFilterBtn.classList.toggle("hidden", !selectedDateFilter);
    els.recordList.innerHTML = `<div class="empty-state">아직 기록이 없습니다.<br>오늘의 기억 하나를 남겨보세요.</div>`;
    return;
  }

  els.recordFilterState.textContent = selectedDateFilter
    ? `${formatDisplayDate(selectedDateFilter)}에 남긴 기록 ${filtered.length}편`
    : "";
  els.clearDateFilterBtn.classList.toggle("hidden", !selectedDateFilter);

  els.recordList.innerHTML = filtered
    .map((entry) => {
      const preview = entry.body.length > 120 ? `${entry.body.slice(0, 120)}...` : entry.body;
      const tags = entry.analysis.tags
        .map((tag) => `<span>${escapeHtml(tag)}</span>`)
        .join("");
      const keywords = entry.analysis.keywords
        .map((keyword) => `<span>${escapeHtml(keyword)}</span>`)
        .join("");
      const bestSentence = entry.analysis.bestSentence
        ? `<p class="today-sentence"><strong>오늘의 문장</strong>${escapeHtml(entry.analysis.bestSentence)}</p>`
        : "";
      return `
        <article class="record-item" data-entry-id="${escapeHtml(entry.id)}">
          <h3>${escapeHtml(entry.title)}</h3>
          <div class="record-meta">
            <span>${formatDisplayDate(entry.date)}</span>
            <span>${escapeHtml(entry.prompt.mode)} · ${escapeHtml(entry.prompt.category)}</span>
            <span>${entry.charCount.toLocaleString("ko-KR")}자</span>
          </div>
          <p class="record-prompt">${escapeHtml(entry.prompt.text)}</p>
          ${tags ? `<div class="memory-summary"><strong>오늘의 기억 키워드</strong><div class="memory-tags" aria-label="오늘의 기억 키워드">${tags}</div></div>` : ""}
          ${keywords ? `<div class="memory-summary"><strong>함께 나온 단어</strong><div class="memory-keywords" aria-label="함께 나온 단어">${keywords}</div></div>` : ""}
          ${bestSentence}
          <p class="record-preview">${escapeHtml(preview)}</p>
          <div class="record-full">${escapeHtml(entry.body)}</div>
          <div class="record-actions">
            <button class="small-button" type="button" data-action="toggle-read">전체 읽기</button>
            <button class="small-button" type="button" data-action="save-record-sentence">문장 씨앗</button>
            <button class="small-button" type="button" data-action="edit-entry">수정</button>
            <button class="small-button danger-button" type="button" data-action="delete-entry">삭제</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCalendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const dateCounts = state.entries.reduce((acc, entry) => {
    acc[entry.date] = (acc[entry.date] || 0) + 1;
    return acc;
  }, {});
  const cells = [];

  for (let index = 0; index < firstDay; index += 1) {
    cells.push(`<div class="day-cell" aria-hidden="true"></div>`);
  }

  for (let day = 1; day <= lastDate; day += 1) {
    const date = formatDate(new Date(year, month, day));
    const count = dateCounts[date] || 0;
    const countClass = count >= 3 ? "count-many" : count === 2 ? "count-2" : count === 1 ? "count-1" : "";
    const label = count ? `<span class="entry-count">${count}</span>` : "";
    const selectedClass = date === selectedDateFilter ? "selected" : "";
    cells.push(`<button class="day-cell ${countClass} ${selectedClass}" type="button" data-date="${date}" title="${count}편 작성"><span>${day}</span>${label}</button>`);
  }

  els.calendarGrid.innerHTML = cells.join("");
}

function handleCalendarClick(event) {
  const button = event.target.closest("[data-date]");
  if (!button) return;

  selectedDateFilter = button.dataset.date;
  switchView("records");
  renderRecords();
  renderCalendar();
}

function renderPromptLibrary() {
  if (!state.savedPrompts.length) {
    els.promptLibrary.innerHTML = `<div class="empty-state">아직 보관한 기억이 없습니다.<br>좋았던 글감은 보관해두었다가 언제든 다시 꺼내볼 수 있습니다.</div>`;
    return;
  }

  els.promptLibrary.innerHTML = state.savedPrompts
    .map(normalizePrompt)
    .map(
      (prompt) => `
        <article class="prompt-item" data-vault-type="prompt" data-vault-id="${escapeHtml(prompt.text)}">
          <strong>${escapeHtml(prompt.mode)} · ${escapeHtml(prompt.category)}</strong>
          <p>${escapeHtml(prompt.text)}</p>
          <small>${escapeHtml(prompt.hint)}</small>
          <button class="text-button danger" type="button" data-action="delete-vault-item">삭제</button>
        </article>
      `
    )
    .join("");
}

function renderSentenceLibrary() {
  if (!state.savedSentences.length) {
    els.sentenceLibrary.innerHTML = `<div class="empty-state">아직 보관한 문장이 없습니다.<br>좋았던 문장은 씨앗처럼 모아두었다가 다시 꺼내볼 수 있습니다.</div>`;
    return;
  }

  els.sentenceLibrary.innerHTML = state.savedSentences
    .map(
      (sentence) => `
        <article class="sentence-item" data-vault-type="sentence" data-vault-id="${escapeHtml(sentence.id)}">
          <p>${escapeHtml(sentence.text)}</p>
          <span>${escapeHtml(sentence.sourceTitle || sentence.prompt?.category || "기억")} · ${formatDisplayDate(sentence.savedAt.slice(0, 10))}</span>
          <button class="text-button danger" type="button" data-action="delete-vault-item">삭제</button>
        </article>
      `
    )
    .join("");
}

function handleVaultDelete(event) {
  const button = event.target.closest("[data-action='delete-vault-item']");
  if (!button) return;

  const item = button.closest("[data-vault-type]");
  const type = item?.dataset.vaultType;
  const id = item?.dataset.vaultId;

  if (type === "prompt") {
    state.savedPrompts = state.savedPrompts.filter((prompt) => prompt.text !== id);
    saveState();
    renderPromptLibrary();
    return;
  }

  if (type === "sentence") {
    state.savedSentences = state.savedSentences.filter((sentence) => sentence.id !== id);
    saveState();
    renderSentenceLibrary();
    renderStats();
  }
}

function renderStats() {
  const entries = state.entries.map(normalizeEntry);
  const currentMonth = todayKey.slice(0, 7);
  const todayEntries = entries.filter((entry) => entry.date === todayKey);
  const monthEntries = entries.filter((entry) => entry.date.startsWith(currentMonth));
  const totalChars = entries.reduce((sum, entry) => sum + (entry.charCount || entry.body?.length || 0), 0);
  const streak = calculateStreak(entries);

  els.streakCount.textContent = `${streak}일`;
  els.routineMessage.textContent = streakMessage(streak, todayEntries.length);
  els.totalEntries.textContent = `${entries.length}편`;
  els.todayEntries.textContent = `${todayEntries.length}편`;
  els.monthEntries.textContent = `${monthEntries.length}편`;
  els.totalChars.textContent = `${totalChars.toLocaleString("ko-KR")}자`;
  els.favoriteCategory.textContent = favoriteCategory(entries) || "아직 없음";
  els.savedSentences.textContent = `${state.savedSentences.length}개`;
  renderMemoryDex(entries);
}

function renderMemoryDex(entries) {
  const dex = memory.memoryDex.buildMemoryDex(entries);
  const items = Object.entries(dex).sort((a, b) => b[1] - a[1]);

  if (!items.length) {
    els.memoryDexList.innerHTML = `<div class="empty-state">아직 도감에 쌓인 기억이 없습니다.<br>오늘의 기억 하나를 남기면 이곳에 작은 흔적이 생깁니다.</div>`;
    return;
  }

  const max = Math.max(...items.map(([, count]) => count));
  els.memoryDexList.innerHTML = items
    .map(([tag, count]) => {
      const percent = Math.max(8, Math.round((count / max) * 100));
      return `
        <article class="dex-item">
          <div>
            <strong>${escapeHtml(tag)}</strong>
            <span>${count}회</span>
          </div>
          <div class="dex-bar" aria-hidden="true"><i style="width: ${percent}%"></i></div>
        </article>
      `;
    })
    .join("");
}

function analyzeMemory(body, title, prompt) {
  return memory.tagEngine.analyzeMemory(body, title, prompt);
}

function favoriteCategory(entries) {
  const counts = entries.reduce((acc, entry) => {
    acc[entry.prompt.category] = (acc[entry.prompt.category] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0];
}

function streakMessage(streak, todayCount) {
  if (streak >= 100) return "100개의 하루가 쌓였습니다.";
  if (streak >= 30) return "이제 글쓰기가 생활이 되고 있습니다.";
  if (streak >= 7) return "벌써 일주일째 기록 중입니다.";
  if (streak >= 3) return "좋아요. 쓰는 습관이 만들어지고 있어요.";
  if (streak > 0 && todayCount > 1) return `오늘 ${todayCount}개의 기억을 남겼어요.`;
  if (streak > 0) return "오늘의 기억을 남겼어요. 내일도 가볍게 이어가요.";
  return "오늘 첫 씨앗을 심어보세요.";
}

function calculateStreak(entries) {
  const entryDates = new Set(entries.map((entry) => entry.date));
  let streak = 0;
  const cursor = new Date();

  while (entryDates.has(formatDate(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

function promptForToday() {
  return memory.promptGenerator.promptForDateSeed(prompts, todayKey);
}

function randomPrompt(exceptKey) {
  return memory.promptGenerator.randomPrompt(prompts, exceptKey, selectedCategory);
}

function freeWritingPrompt() {
  return {
    id: "free-writing",
    mode: "자유",
    category: "자유 글쓰기",
    subcategory: "내 이야기",
    keyword: "자유 글쓰기",
    difficulty: 1,
    tags: [],
    text: "오늘은 자유롭게 기록해보세요.",
    hint: "앱이 준 글감이 아니어도 괜찮아요. 지금 머릿속에 남아 있는 것부터 한 줄만 적어보세요."
  };
}

function normalizeEntry(entry) {
  const prompt = normalizePrompt(entry.prompt);
  return {
    ...entry,
    prompt,
    charCount: entry.charCount || entry.body?.length || 0,
    createdAt: entry.createdAt || entry.updatedAt || `${entry.date}T00:00:00`,
    analysis: normalizeAnalysis(entry.analysis, entry.body || "", entry.title || "", prompt)
  };
}

function normalizePrompt(prompt) {
  if (prompt?.id === "free-writing") return freeWritingPrompt();
  const matched = prompts.find((item) => item.id === prompt?.id || item.text === prompt?.text);
  if (matched) return matched;
  const legacy = legacyPrompts.find((item) => item.text === prompt?.text);
  if (legacy) return { ...legacy, id: prompt?.id || legacy.text, keyword: prompt?.keyword || legacy.category, tags: [legacy.category] };
  return {
    id: prompt?.id || "fallback-today",
    mode: prompt?.mode || "글감",
    category: prompt?.category || "오늘과 일상",
    subcategory: prompt?.subcategory || "작은 행동",
    keyword: prompt?.keyword || prompt?.category || "오늘",
    tags: prompt?.tags || [prompt?.category || "오늘과 일상"],
    text: prompt?.text || "오늘 가장 오래 본 물건은?",
    hint: prompt?.hint || "떠오르는 장면 하나만 구체적으로 적어보세요."
  };
}

function normalizeAnalysis(analysis, body, title, prompt) {
  const fresh = analyzeMemory(body, title, prompt);
  if (analysis?.tags && analysis?.keywords) {
    return {
      tags: analysis.tags,
      keywords: fresh.keywords,
      bestSentence: analysis.bestSentence || fresh.bestSentence
    };
  }

  return fresh;
}

function loadState() {
  const fallback = {
    entries: [],
    savedPrompts: [],
    savedSentences: [],
    todayPrompt: null,
    preferredCategory: "all",
    theme: "quiet"
  };
  try {
    const loaded = JSON.parse(localStorage.getItem(storageKey));
    const merged = { ...fallback, ...loaded };
    merged.entries = merged.entries.map(normalizeEntry);
    merged.savedPrompts = merged.savedPrompts.map(normalizePrompt);
    merged.savedSentences = (merged.savedSentences || []).map((sentence) => ({
      ...sentence,
      prompt: normalizePrompt(sentence.prompt),
      savedAt: sentence.savedAt || new Date().toISOString()
    }));
    return merged;
  } catch {
    return fallback;
  }
}

function persist(partial) {
  Object.assign(state, partial);
  saveState();
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDisplayDate(dateString) {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short"
  }).format(new Date(`${dateString}T00:00:00`));
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeMarkdownHeading(value) {
  return value.replaceAll("#", "\\#").trim() || "제목 없는 기록";
}
