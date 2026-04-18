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

/* ========= STORY ========= */

const story = {
  start: {
    lines: [
      {
        speaker: "Apollo",
        text: "Welcome, Cassandra. Even the sun pauses to watch you enter my temple.",
        sprite: "apollo",
        bg: "temple"
      },
      {
        speaker: "Cassandra",
        text: "So, is this a ‘chosen one’ thing or a ‘you’re about to die’ thing?",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Continue", next: "end" }
    ]
  },

  end: {
    lines: [
      {
        speaker: "Narration",
        text: "End of demo."
      }
    ],
    choices: []
  }
};

/* ========= STATE ========= */

let currentNode = "start";
let currentLine = 0;
let typing = false;
let fullText = "";
let typingTimeout = null;

/* ========= FUNCTIONS ========= */

function setBackground(key) {
  if (!key || !backgrounds[key]) return;
  bg.style.backgroundImage = `url("${backgrounds[key]}")`;
}

function setSprites(active) {
  // ALWAYS ensure src is set
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
      typingTimeout = setTimeout(tick, 25);
    } else {
      typing = false;
    }
  }

  tick();
}

function showLine() {
  const node = story[currentNode];
  const line = node.lines[currentLine];

  if (!line) {
    showChoices();
    return;
  }

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
    clearTimeout(typingTimeout);
    textEl.textContent = fullText;
    typing = false;
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

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "Enter") {
    e.preventDefault();
    nextLine();
  }
});

/* ========= START ========= */

window.addEventListener("load", () => {
  // preload images so nothing is blank
  cassandra.src = sprites.cassandra;
  apollo.src = sprites.apollo;

  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("app").classList.remove("hidden");

    showLine(); // 🔥 guarantees first render
  }, 500);
});
