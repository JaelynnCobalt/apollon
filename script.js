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

let state = {
  node: "start",
  line: 0,
  typing: false,
  buffer: ""
};

/* ================= CORE RENDER ================= */

function render() {
  const node = story[state.node];
  const line = node.lines[state.line];

  // reset UI every render (THIS FIXES YOUR BUGS)
  choicesEl.innerHTML = "";
  choicesEl.style.display = "none";
  nextBtn.style.display = "block";

  if (!line) {
    renderChoices();
    return;
  }

  nameEl.textContent = line.speaker || "";

  setBackground(line.bg);
  setSprites(line.sprite);
  type(line.text);
}

/* ================= TYPEWRITER ================= */

function type(text) {
  state.typing = true;
  state.buffer = text;
  textEl.textContent = "";

  let i = 0;

  function tick() {
    if (i < text.length) {
      textEl.textContent += text[i++];
      setTimeout(tick, 18);
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
    textEl.textContent = state.buffer;
    state.typing = false;
    return;
  }

  state.line++;

  if (state.line >= story[state.node].lines.length) {
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
      render();
    };

    choicesEl.appendChild(btn);
  });
}

/* ================= EVENTS ================= */

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

    render();
  }, 500);
});
