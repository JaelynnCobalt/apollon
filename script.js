/* ========= ELEMENTS ========= */

const bg = document.getElementById("background");
const cassandra = document.getElementById("cassandraSprite");
const apollo = document.getElementById("apolloSprite");

const nameEl = document.getElementById("speakerName");
const textEl = document.getElementById("dialogueText");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("nextSun");

/* ========= STATE ========= */

let node = "start";
let lineIndex = 0;
let typing = false;
let fullText = "";

/* ========= ASSETS ========= */

const backgrounds = {
  temple: "assets/temple-bg.jpg",
  marble: "assets/marble-bg.jpg"
};

const sprites = {
  apollo: "assets/apollo.png",
  cassandra: "assets/cassandra.png"
};

/* ========= STORY (SHORT VERSION TO START) ========= */

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

/* ========= FUNCTIONS ========= */

function setBG(key) {
  if (!backgrounds[key]) return;
  bg.style.backgroundImage = `url(${backgrounds[key]})`;
}

function setSprite(char) {
  cassandra.src = sprites.cassandra;
  apollo.src = sprites.apollo;

  cassandra.classList.remove("active", "inactive");
  apollo.classList.remove("active", "inactive");

  if (char === "cassandra") {
    cassandra.classList.add("active");
    apollo.classList.add("inactive");
  } else if (char === "apollo") {
    apollo.classList.add("active");
    cassandra.classList.add("inactive");
  }
}

function type(text) {
  typing = true;
  fullText = text;
  textEl.textContent = "";

  let i = 0;
  function tick() {
    if (i < text.length) {
      textEl.textContent += text[i++];
      setTimeout(tick, 25);
    } else {
      typing = false;
    }
  }
  tick();
}

function showLine() {
  const line = story[node].lines[lineIndex];
  if (!line) return showChoices();

  nameEl.textContent = line.speaker || "";
  setBG(line.bg);
  setSprite(line.sprite);
  type(line.text);
}

function showChoices() {
  choicesEl.innerHTML = "";
  nextBtn.style.display = "none";

  story[node].choices.forEach(c => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = c.text;
    btn.onclick = () => {
      node = c.next;
      lineIndex = 0;
      nextBtn.style.display = "block";
      showLine();
    };
    choicesEl.appendChild(btn);
  });
}

function next() {
  if (typing) {
    textEl.textContent = fullText;
    typing = false;
    return;
  }

  lineIndex++;
  if (lineIndex >= story[node].lines.length) {
    showChoices();
  } else {
    showLine();
  }
}

/* ========= EVENTS ========= */

nextBtn.onclick = next;

document.addEventListener("keydown", e => {
  if (e.code === "Space" || e.code === "Enter") next();
});

/* ========= START ========= */

window.onload = () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
    showLine();
  }, 800);
};
