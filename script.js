import { story } from "./story.js";

/* ================= ELEMENTS ================= */

const bg = document.getElementById("background");
const cassandra = document.getElementById("cassandraSprite");
const apollo = document.getElementById("apolloSprite");

const nameEl = document.getElementById("speakerName");
const textEl = document.getElementById("dialogueText");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("nextSun");

/* ================= ASSETS ================= */

const backgrounds = {
  temple: "assets/temple-bg.jpg",
  marble: "assets/marble-bg.jpg"
};

const sprites = {
  apollo: "assets/apollo.png",
  cassandra: "assets/cassandra.png"
};

/* ================= STATE ================= */

const state = {
  node: "start",
  line: 0,
  typing: false,
  skip: false
};

/* ================= UI RESET ================= */

function resetUI() {
  choicesEl.innerHTML = "";
  choicesEl.style.display = "none";
  nextBtn.style.display = "block";
}

/* ================= RENDER ================= */

function render() {
  const node = story[state.node];

  if (!node) {
    console.error("Missing node:", state.node);
    return;
  }

  const line = node.lines[state.line];

  resetUI();

  if (!line) return renderChoices();

  nameEl.textContent = line.speaker || "";
  setBackground(line.bg);
  setSprites(line.sprite);
  type(line.text);
}

/* ================= TYPE ================= */

function type(text) {
  state.typing = true;
  textEl.textContent = "";

  let i = 0;

  function tick() {
    if (state.skip) {
      textEl.textContent = text;
      state.typing = false;
      state.skip = false;
      return;
    }

    if (i < text.length) {
      textEl.textContent += text[i++];
      setTimeout(tick, 15);
    } else {
      state.typing = false;
    }
  }

  tick();
}

/* ================= SPRITES ================= */

function setSprites(active) {
  cassandra.src = sprites.cassandra;
  apollo.src = sprites.apollo;

  cassandra.className = "sprite";
  apollo.className = "sprite";

  if (active === "cassandra") {
    cassandra.classList.add("active");
    apollo.classList.add("inactive");
  } else if (active === "apollo") {
    apollo.classList.add("active");
    cassandra.classList.add("inactive");
  } else {
    cassandra.classList.add("inactive");
    apollo.classList.add("inactive");
  }
}

/* ================= BACKGROUND ================= */

function setBackground(key) {
  if (!key) return;
  bg.style.backgroundImage = backgrounds[key]
    ? `url("${backgrounds[key]}")`
    : "";
}

/* ================= NEXT ================= */

function next() {
  if (state.typing) {
    state.skip = true;
    return;
  }

  state.line++;

  const node = story[state.node];

  if (state.line >= node.lines.length) {
    renderChoices();
  } else {
    render();
  }
}

/* ================= CHOICES ================= */

function renderChoices() {
  const node = story[state.node];

  choicesEl.innerHTML = "";
  choicesEl.style.display = "flex";
  nextBtn.style.display = "none";

  node.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.text;

    btn.onclick = () => {
      state.node = choice.next;
      state.line = 0;
      state.skip = false;
      render();
    };

    choicesEl.appendChild(btn);
  });
}

/* ================= INPUT ================= */

nextBtn.addEventListener("click", next);

document.addEventListener("keydown", e => {
  if (e.code === "Space" || e.code === "Enter") {
    e.preventDefault();
    next();
  }
});

/* ================= START ================= */

window.addEventListener("load", () => {
  cassandra.src = sprites.cassandra;
  apollo.src = sprites.apollo;

  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
    resetUI();
    render();
  }, 300);
});
