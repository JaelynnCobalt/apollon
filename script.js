import { story } from "./story.js";

/* ========= ELEMENTS ========= */

const bg = document.getElementById("background");
const cassandra = document.getElementById("cassandraSprite");
const apollo = document.getElementById("apolloSprite");

const nameEl = document.getElementById("speakerName");
const textEl = document.getElementById("dialogueText");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("nextSun");

/* ========= ASSETS ========= */

const backgrounds = {
  temple: "assets/temple-bg.jpg",
  marble: "assets/marble-bg.jpg"
};

const sprites = {
  apollo: "assets/apollo.png",
  cassandra: "assets/cassandra.png"
};

/* ========= STATE ========= */

let currentNode = "start";
let currentLine = 0;
let typing = false;
let fullText = "";
let typingTimeout = null;

/* ========= CORE FUNCTIONS ========= */

function setBackground(key) {
  if (!key) return;
  bg.style.backgroundImage = backgrounds[key]
    ? `url("${backgrounds[key]}")`
    : "";
}

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

function typeText(text) {
  clearTimeout(typingTimeout);
  typing = true;
  fullText = text;
  textEl.textContent = "";

  let i = 0;

  function tick() {
    if (i < text.length) {
      textEl.textContent += text[i++];
      typingTimeout = setTimeout(tick, 20);
    } else {
      typing = false;
    }
  }

  tick();
}

/* ========= STORY ENGINE ========= */

function showLine() {
  const node = story[currentNode];
  const line = node.lines[currentLine];

  if (!line) return showChoices();

  nameEl.textContent = line.speaker || "";

  setBackground(line.bg);
  setSprites(line.sprite);
  typeText(line.text);
}

function showChoices() {
  choicesEl.innerHTML = "";
  nextBtn.style.display = "none";

  const node = story[currentNode];
  if (!node.choices) return;

  node.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.text;

    btn.onclick = () => {
      currentNode = choice.next;
      currentLine = 0;
      nextBtn.style.display = "block";
      showLine();
    };

    choicesEl.appendChild(btn);
  });
}

function nextLine() {
  if (typing) {
    textEl.textContent = fullText;
    typing = false;
    clearTimeout(typingTimeout);
    return;
  }

  currentLine++;

  if (currentLine >= story[currentNode].lines.length) {
    showChoices();
  } else {
    showLine();
  }
}

/* ========= EVENTS ========= */

nextBtn.addEventListener("click", nextLine);

document.addEventListener("keydown", e => {
  if (e.code === "Space" || e.code === "Enter") {
    e.preventDefault();
    nextLine();
  }
});

/* ========= START ========= */

window.addEventListener("load", () => {
  cassandra.src = sprites.cassandra;
  apollo.src = sprites.apollo;

  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
    showLine();
  }, 500);
});
