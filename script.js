/* ===========================
   LOADING SCREEN
=========================== */

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("app").classList.remove("hidden");
        startStory();
    }, 1000);
});

/* ===========================
   ELEMENTS
=========================== */

const apolloSprite = document.getElementById("apolloSprite");
const cassandraSprite = document.getElementById("cassandraSprite");

const speakerName = document.getElementById("speakerName");
const dialogueText = document.getElementById("dialogueText");
const choicesContainer = document.getElementById("choices");
const background = document.getElementById("background");
const uiContainer = document.getElementById("ui");

/* ===========================
   SUN BUTTON
=========================== */

const nextSun = document.createElement("img");
nextSun.id = "nextSun";
nextSun.src = "assets/sunsprite.png";
nextSun.alt = "Next";
nextSun.style.width = "48px";
nextSun.style.height = "48px";
nextSun.style.cursor = "pointer";
nextSun.style.display = "none";
nextSun.style.margin = "10px auto 0 auto";
nextSun.style.position = "relative";
nextSun.style.zIndex = "9999";
nextSun.style.filter = "drop-shadow(0 0 6px gold)";
uiContainer.appendChild(nextSun);

/* ===========================
   TYPEWRITER EFFECT
=========================== */

let isTyping = false;
let typeTimeout = null;

function typeWriter(text, element, speed = 28, done = () => {}) {
    if (typeTimeout) clearTimeout(typeTimeout);
    element.textContent = "";
    let i = 0;
    isTyping = true;

    function tick() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            typeTimeout = setTimeout(tick, speed);
        } else {
            isTyping = false;
            done();
        }
    }

    tick();
}

/* ===========================
   STORY DATA (TEMPORARY)
   — replaced in next message
=========================== */

let story = {
    start: {
        lines: [
            { speaker: "Apollo", text: "TEMPORARY ENGINE TEST LINE.", sprite: "apollo", bg: "temple", mood: "soft" },
            { speaker: "Cassandra", text: "If you see this, the engine works.", sprite: "cassandra" }
        ],
        choices: [
            { text: "Continue", next: "end" }
        ]
    },

    end: {
        lines: [
            { speaker: "Narration", text: "Engine test complete.", sprite: "cassandra", bg: "temple" }
        ],
        choices: []
    }
};

/* ===========================
   STORY ENGINE
=========================== */

let currentNode = "start";
let currentLine = 0;

function startStory() {
    loadNode("start");
}

function loadNode(key) {
    currentNode = key;
    currentLine = 0;
    choicesContainer.innerHTML = "";
    nextSun.style.display = "block";
    showLine();
}

function showLine() {
    const node = story[currentNode];
    const line = node.lines[currentLine];

    if (!line) {
        showChoices();
        return;
    }

    // Speaker
    speakerName.textContent = line.speaker || "";

    // Background
    if (line.bg) {
        if (line.bg === "temple") {
            background.style.backgroundImage = 'url("assets/temple-bg.jpg")';
        } else if (line.bg === "marble") {
            background.style.backgroundImage = 'url("assets/marble-bg.jpg")';
        }
    }

    // Sprites
    updateSprites(line.sprite, line.mood);

    // Typewriter
    typeWriter(line.text, dialogueText);
}

function showChoices() {
    const node = story[currentNode];
    choicesContainer.innerHTML = "";
    nextSun.style.display = "none";

    if (node.choices && node.choices.length > 0) {
        node.choices.forEach(choice => {
            const btn = document.createElement("button");
            btn.classList.add("choice-btn");
            btn.textContent = choice.text;
            btn.onclick = () => loadNode(choice.next);
            choicesContainer.appendChild(btn);
        });
    }
}

/* ===========================
   SUN CLICK ADVANCE
=========================== */

nextSun.addEventListener("click", () => {
    const node = story[currentNode];

    if (isTyping) {
        // Instantly finish the line
        if (typeTimeout) clearTimeout(typeTimeout);
        isTyping = false;
        dialogueText.textContent = node.lines[currentLine].text;
        return;
    }

    currentLine++;

    if (currentLine >= node.lines.length) {
        showChoices();
    } else {
        showLine();
    }
});

/* ===========================
   SPRITE LOGIC
=========================== */

function updateSprites(active, mood) {
    apolloSprite.className = "sprite left";
    cassandraSprite.className = "sprite right";

    if (active === "apollo") {
        apolloSprite.classList.add("active");
        cassandraSprite.classList.add("inactive");

        if (mood === "soft") apolloSprite.classList.add("soft");
        if (mood === "irritated") apolloSprite.classList.add("irritated");
        if (mood === "snap") apolloSprite.classList.add("snap");
    }

    else if (active === "cassandra") {
        cassandraSprite.classList.add("active");
        apolloSprite.classList.add("inactive");
    }

    else {
        apolloSprite.classList.add("inactive");
        cassandraSprite.classList.add("inactive");
    }
}

