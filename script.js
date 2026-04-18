/* =========================
   APOLLO & CASSANDRA VN ENGINE
   ========================= */

/* ========= ELEMENT CACHE ========= */

const el = {
  loading: document.getElementById("loading-screen"),
  app: document.getElementById("app"),

  bg: document.getElementById("background"),

  apollo: document.getElementById("apolloSprite"),
  cassandra: document.getElementById("cassandraSprite"),

  name: document.getElementById("speakerName"),
  text: document.getElementById("dialogueText"),
  choices: document.getElementById("choices"),
  next: document.getElementById("nextSun")
};

/* ========= ENGINE STATE ========= */

const state = {
  node: null,
  lineIndex: 0,
  typing: false,
  typingTimeout: null,
  fullLine: ""
};

/* ========= UTIL ========= */

function clearChoices() {
  el.choices.innerHTML = "";
}

function setBackground(bg) {
  if (!bg) return;

  const map = {
    temple: "assets/temple-bg.jpg",
    marble: "assets/marble-bg.jpg"
  };

  el.bg.style.backgroundImage = `url("${map[bg]}")`;
}

function resetSprites() {
  el.apollo.className = "sprite left";
  el.cassandra.className = "sprite right";
}

function setSprite(active, mood) {
  resetSprites();

  if (active === "apollo") {
    el.apollo.classList.add("active");
    el.cassandra.classList.add("inactive");

    if (mood) el.apollo.classList.add(mood);
  } else if (active === "cassandra") {
    el.cassandra.classList.add("active");
    el.apollo.classList.add("inactive");
  } else {
    el.apollo.classList.add("inactive");
    el.cassandra.classList.add("inactive");
  }
}

/* ========= TYPEWRITER ========= */

function typeText(text, speed = 26) {
  clearTimeout(state.typingTimeout);

  state.typing = true;
  state.fullLine = text;
  el.text.textContent = "";

  let i = 0;

  function tick() {
    if (i < text.length) {
      el.text.textContent += text[i++];
      state.typingTimeout = setTimeout(tick, speed);
    } else {
      state.typing = false;
    }
  }

  tick();
}

function skipTyping() {
  if (!state.typing) return false;

  clearTimeout(state.typingTimeout);
  el.text.textContent = state.fullLine;
  state.typing = false;
  return true;
}

/* ========= RENDER ========= */

function renderLine() {
  const node = story[state.node];
  const line = node.lines[state.lineIndex];

  if (!line) {
    renderChoices();
    return;
  }

  el.name.textContent = line.speaker || "";

  setBackground(line.bg);
  setSprite(line.sprite, line.mood);

  typeText(line.text);
}

function renderChoices() {
  clearChoices();
  el.next.style.display = "none";

  const node = story[state.node];

  if (!node.choices || node.choices.length === 0) return;

  node.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.text;

    btn.onclick = () => {
      loadNode(choice.next);
    };

    el.choices.appendChild(btn);
  });
}

/* ========= FLOW ========= */

function nextLine() {
  const node = story[state.node];

  // If typing → finish instantly
  if (skipTyping()) return;

  state.lineIndex++;

  if (state.lineIndex >= node.lines.length) {
    renderChoices();
  } else {
    renderLine();
  }
}

function loadNode(key) {
  state.node = key;
  state.lineIndex = 0;

  clearChoices();
  el.next.style.display = "block";

  renderLine();
}

/* ========= INPUT ========= */

el.next.addEventListener("click", nextLine);

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "Enter") {
    e.preventDefault();
    nextLine();
  }
});

/* ========= LOADING ========= */

window.addEventListener("load", () => {
  setTimeout(() => {
    el.loading.style.display = "none";
    el.app.classList.remove("hidden");
    loadNode("start");
  }, 800);
});
