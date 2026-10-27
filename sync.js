(function () {
  "use strict";

  const APP = "writing";
  const META_KEY = "lumloom-writing-sync-v1";
  const RECORD_KEY = "state:main";
  const SUPABASE_URL = "https://mwobudsdhvaelcnyuynx.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_chd-ATIEFSslpduX5pyswg_cC4jxN5E";
  const client = window.supabase?.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
  });

  const ui = {
    trigger: document.querySelector("#accountTrigger"),
    triggerLabel: document.querySelector("#accountTriggerLabel"),
    statusDot: document.querySelector(".account-status-dot"),
    backdrop: document.querySelector("#accountBackdrop"),
    close: document.querySelector("#accountClose"),
    loginForm: document.querySelector("#accountLoginForm"),
    emailInput: document.querySelector("#accountEmail"),
    passwordInput: document.querySelector("#accountPassword"),
    loginButton: document.querySelector("#accountLoginButton"),
    passwordForm: document.querySelector("#accountPasswordForm"),
    newPasswordInput: document.querySelector("#accountNewPassword"),
    session: document.querySelector("#accountSession"),
    emailText: document.querySelector("#accountEmailText"),
    logout: document.querySelector("#accountLogout"),
    localCount: document.querySelector("#accountLocalCount"),
    cloudCount: document.querySelector("#accountCloudCount"),
    conflictCount: document.querySelector("#accountConflictCount"),
    syncNow: document.querySelector("#accountSyncNow"),
    uploadExisting: document.querySelector("#accountUploadExisting"),
    conflict: document.querySelector("#accountConflict"),
    useLocal: document.querySelector("#accountUseLocal"),
    useCloud: document.querySelector("#accountUseCloud"),
    message: document.querySelector("#accountMessage")
  };

  let user = null;
  let busy = false;
  let cloudCount = 0;
  let message = "";
  let isError = false;
  let syncTimer = 0;

  function loadMeta() {
    try {
      const parsed = JSON.parse(localStorage.getItem(META_KEY) || "");
      if (parsed && parsed.record) return parsed;
    } catch { /* 새 동기화 인덱스를 사용한다. */ }
    return { userId: null, record: { remoteVersion: null, dirty: false }, conflict: null };
  }

  let meta = loadMeta();
  const saveMeta = () => localStorage.setItem(META_KEY, JSON.stringify(meta));
  const localState = () => window.HaruWritingSync.getState();
  const samePayload = (a, b) => JSON.stringify(a ?? null) === JSON.stringify(b ?? null);
  const hasContent = (payload) => Boolean(payload?.entries?.length || payload?.savedPrompts?.length || payload?.savedSentences?.length);
  const entryCount = (payload) => payload?.entries?.length || 0;

  function setMessage(next, error = false) {
    message = next;
    isError = error;
    render();
  }

  function syncErrorText(error) {
    const detail = error?.message || error?.details || error?.error_description;
    const code = error?.code ? ` (${error.code})` : "";
    return detail ? `${detail}${code}` : "잠시 후 다시 시도해주세요.";
  }

  function render() {
    const local = localState();
    const pending = hasContent(local) && (!meta.record.remoteVersion || meta.record.dirty);
    ui.triggerLabel.textContent = user?.email || "로그인하지 않음";
    ui.statusDot.classList.toggle("online", Boolean(user));
    ui.loginForm.classList.toggle("hidden", Boolean(user));
    ui.session.classList.toggle("hidden", !user);
    ui.loginButton.disabled = busy;
    ui.loginButton.textContent = busy && !user ? "로그인 중…" : "로그인";
    ui.emailText.textContent = user?.email || "";
    ui.localCount.textContent = String(entryCount(local));
    ui.cloudCount.textContent = String(cloudCount);
    ui.conflictCount.textContent = meta.conflict ? "1" : "0";
    ui.syncNow.disabled = busy;
    ui.uploadExisting.disabled = busy || !pending;
    ui.uploadExisting.textContent = !hasContent(local) ? "올릴 기록 없음" : pending ? "기존 기록 올리기" : "모두 업로드됨";
    ui.conflict.classList.toggle("hidden", !meta.conflict);
    ui.message.textContent = message;
    ui.message.classList.toggle("error", isError);
  }

  function openModal() {
    ui.backdrop.classList.remove("hidden");
    document.body.classList.add("account-open");
    if (!user) ui.emailInput.focus();
  }

  function closeModal() {
    ui.backdrop.classList.add("hidden");
    document.body.classList.remove("account-open");
    ui.trigger.focus();
  }

  async function fetchRemote() {
    const { data, error } = await client.from("lumloom_records").select("*")
      .eq("app", APP).eq("entity_type", "state").eq("entity_id", "main").maybeSingle();
    if (error) throw error;
    cloudCount = data?.status === "active" ? entryCount(data.payload) : 0;
    return data;
  }

  function trackRemote(remote) {
    meta.record = { remoteVersion: remote.version, dirty: false };
    meta.conflict = null;
    saveMeta();
  }

  function applyRemote(remote) {
    if (remote.status === "active") window.HaruWritingSync.applyState(remote.payload);
    trackRemote(remote);
  }

  async function pushLocal() {
    const local = localState();
    const values = {
      user_id: user.id,
      app: APP,
      entity_type: "state",
      entity_id: "main",
      payload: local,
      status: "active",
      client_updated_at: new Date().toISOString(),
      version: (meta.record.remoteVersion || 0) + 1
    };

    if (meta.record.remoteVersion === null) {
      const { data, error } = await client.from("lumloom_records").insert(values).select().single();
      if (error) {
        if (error.code === "23505") return false;
        throw error;
      }
      trackRemote(data);
      return true;
    }

    const { data, error } = await client.from("lumloom_records").update(values)
      .eq("app", APP).eq("entity_type", "state").eq("entity_id", "main")
      .eq("version", meta.record.remoteVersion).select();
    if (error) throw error;
    if (!data.length) return false;
    trackRemote(data[0]);
    return true;
  }

  async function runSync(includeUntracked = false) {
    if (!user || busy) return;
    if (!navigator.onLine) {
      setMessage("오프라인입니다. 연결되면 다시 동기화합니다.");
      return;
    }
    busy = true;
    setMessage("기록을 확인하고 있습니다…");
    try {
      let remote = await fetchRemote();
      const local = localState();
      const localHasContent = hasContent(local);

      if (remote) {
        if (!localHasContent && remote.status === "active") {
          applyRemote(remote);
        } else if (!meta.record.remoteVersion) {
          if (remote.status === "active" && samePayload(local, remote.payload)) trackRemote(remote);
          else if (includeUntracked) meta.conflict = remote;
        } else if (meta.record.dirty) {
          if (meta.record.remoteVersion !== remote.version && !(remote.status === "active" && samePayload(local, remote.payload))) {
            meta.conflict = remote;
          }
        } else if (meta.record.remoteVersion !== remote.version) {
          applyRemote(remote);
        }
      } else if (includeUntracked && localHasContent && !meta.record.remoteVersion) {
        meta.record = { remoteVersion: null, dirty: true };
      }

      if (meta.record.dirty && !meta.conflict) {
        const pushed = await pushLocal();
        if (!pushed) {
          remote = await fetchRemote();
          if (remote) meta.conflict = remote;
        }
      }

      saveMeta();
      setMessage(meta.conflict
        ? "이 기기와 클라우드의 기록이 달라 사용할 내용을 확인해주세요."
        : `동기화 완료 · ${new Intl.DateTimeFormat("ko-KR", { hour: "numeric", minute: "2-digit" }).format(new Date())}`);
    } catch (error) {
      console.error("Writing sync failed", error);
      setMessage(`동기화하지 못했습니다. ${syncErrorText(error)}`, true);
    } finally {
      busy = false;
      render();
    }
  }

  async function requestLogin(email, password) {
    busy = true;
    render();
    const { error } = await client.auth.signInWithPassword({ email, password });
    busy = false;
    if (error) {
      const text = error.message.toLowerCase();
      setMessage(text.includes("email not confirmed")
        ? "이메일 인증을 먼저 완료해주세요."
        : text.includes("invalid login")
          ? "이메일 또는 비밀번호를 확인해주세요."
          : `로그인하지 못했습니다. ${syncErrorText(error)}`, true);
      return;
    }
    ui.passwordInput.value = "";
    setMessage("로그인했습니다. 기록을 확인하고 있습니다…");
  }

  async function updatePassword(password) {
    busy = true;
    render();
    const { error } = await client.auth.updateUser({ password });
    busy = false;
    if (error) {
      setMessage(`비밀번호를 저장하지 못했습니다. ${syncErrorText(error)}`, true);
      return;
    }
    ui.newPasswordInput.value = "";
    setMessage("Lumloom 공용 비밀번호를 저장했습니다.");
  }

  async function setUser(next) {
    user = next;
    if (user && meta.userId !== user.id) {
      meta = { userId: user.id, record: { remoteVersion: null, dirty: false }, conflict: null };
      saveMeta();
    }
    render();
    if (user) await runSync(false);
  }

  async function resolveConflict(resolution) {
    if (!meta.conflict || busy) return;
    if (resolution === "remote") {
      applyRemote(meta.conflict);
      setMessage("클라우드 기록을 이 기기에 적용했습니다.");
      render();
      return;
    }
    meta.record = { remoteVersion: meta.conflict.version, dirty: true };
    meta.conflict = null;
    saveMeta();
    await runSync(false);
  }

  function bindEvents() {
    ui.trigger.addEventListener("click", openModal);
    ui.close.addEventListener("click", closeModal);
    ui.backdrop.addEventListener("mousedown", (event) => { if (event.target === ui.backdrop) closeModal(); });
    document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !ui.backdrop.classList.contains("hidden")) closeModal(); });
    ui.loginForm.addEventListener("submit", (event) => { event.preventDefault(); void requestLogin(ui.emailInput.value.trim(), ui.passwordInput.value); });
    ui.passwordForm.addEventListener("submit", (event) => { event.preventDefault(); void updatePassword(ui.newPasswordInput.value); });
    ui.logout.addEventListener("click", () => { void client.auth.signOut({ scope: "local" }); });
    ui.syncNow.addEventListener("click", () => { void runSync(false); });
    ui.uploadExisting.addEventListener("click", () => { void runSync(true); });
    ui.useLocal.addEventListener("click", () => { void resolveConflict("local"); });
    ui.useCloud.addEventListener("click", () => { void resolveConflict("remote"); });
    window.addEventListener("online", () => { void runSync(false); });
    window.addEventListener("lumloom:writing-state-changed", () => {
      if (!user && !meta.userId) return;
      meta.record = { ...meta.record, dirty: true };
      saveMeta();
      render();
      window.clearTimeout(syncTimer);
      syncTimer = window.setTimeout(() => { void runSync(false); }, 900);
    });
  }

  if (!client || !window.HaruWritingSync) {
    ui.trigger.hidden = true;
    console.error("Lumloom account sync could not start.");
    return;
  }

  bindEvents();
  render();
  client.auth.onAuthStateChange((_event, session) => {
    window.setTimeout(() => { void setUser(session?.user || null); }, 0);
  });
  void client.auth.getSession().then(({ data }) => setUser(data.session?.user || null));
})();
