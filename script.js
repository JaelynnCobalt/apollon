const bg = document.getElementById("background");
const cassandra = document.getElementById("cassandraSprite");
const apollo = document.getElementById("apolloSprite");

const nameEl = document.getElementById("speakerName");
const textEl = document.getElementById("dialogueText");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("nextBtn");

const backgrounds = {
  temple: "assets/temple-bg.jpg",
  marble: "assets/marble-bg.jpg"
};

const sprites = {
  apollo: "assets/apollo.png",
  cassandra: "assets/cassandra.png"
};

let node = "start";
let line = 0;
let typing = false;
let skip = false;

function render() {
  const scene = story[node];
  const data = scene.lines[line];

  if (!data) return showChoices();

  resetUI();

  nameEl.textContent = data.speaker || "";
  setBG(data.bg);
  setSprites(data.sprite);
  typeText(data.text);
}

function resetUI() {
  choicesEl.innerHTML = "";
  choicesEl.style.display = "none";
  nextBtn.style.display = "block";
}

function setBG(key) {
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
  }
}

function typeText(text) {
  typing = true;
  textEl.textContent = "";
  let i = 0;

  function tick() {
    if (skip) {
      textEl.textContent = text;
      typing = false;
      skip = false;
      return;
    }

    if (i < text.length) {
      textEl.textContent += text[i++];
      setTimeout(tick, 15);
    } else {
      typing = false;
    }
  }

  tick();
}

function next() {
  if (typing) return skip = true;

  line++;
  if (line >= story[node].lines.length) {
    showChoices();
  } else {
    render();
  }
}

function showChoices() {
  const scene = story[node];

  choicesEl.style.display = "flex";
  nextBtn.style.display = "none";

  scene.choices.forEach(c => {
    const b = document.createElement("button");
    b.className = "choice-btn";
    b.textContent = c.text;

    b.onclick = () => {
      node = c.next;
      line = 0;
      render();
    };

    choicesEl.appendChild(b);
  });
}

nextBtn.onclick = next;
document.addEventListener("keydown", e => {
  if (e.code === "Space" || e.code === "Enter") next();
});

window.onload = () => {
  document.getElementById("loading-screen").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
  render();
};
