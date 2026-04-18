/* ===========================
   LOADING SCREEN
=========================== */

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("app").classList.remove("hidden");
        startStory();
    }, 1500);
});

/* ===========================
   SPRITE ELEMENTS
=========================== */

const apolloSprite = document.getElementById("apolloSprite");
const cassandraSprite = document.getElementById("cassandraSprite");

/* ===========================
   UI ELEMENTS
=========================== */

const speakerName = document.getElementById("speakerName");
const dialogueText = document.getElementById("dialogueText");
const choicesContainer = document.getElementById("choices");
const background = document.getElementById("background");

/* ===========================
   STORY DATA STRUCTURE
=========================== */

let story = {
    start: {
        speaker: "Apollo",
        text: "Welcome, Cassandra. The sun itself bends to witness your arrival.",
        sprite: "apollo",
        bg: "temple",
        choices: [
            { text: "Remain silent.", next: "silent1" },
            { text: "Ask why you were summoned.", next: "ask1" }
        ]
    },

    silent1: {
        speaker: "Apollo",
        text: "Silent? Or afraid? Mortals often confuse the two.",
        sprite: "apollo",
        choices: [
            { text: "Tell him you are not afraid.", next: "defy1" },
            { text: "Stay silent again.", next: "silent2" }
        ]
    },

    ask1: {
        speaker: "Apollo",
        text: "Why? Because you see truth more clearly than others. I admire that.",
        sprite: "apollo",
        choices: [
            { text: "Ask what he wants from you.", next: "want1" },
            { text: "Tell him you want to leave.", next: "leave1" }
        ]
    },

    /* More scenes will be added here — Act I through Act V */
};

/* ===========================
   STORY ENGINE
=========================== */

let currentNode = "start";

function startStory() {
    showNode(currentNode);
}

function showNode(nodeKey) {
    const node = story[nodeKey];
    currentNode = nodeKey;

    // Update speaker name
    speakerName.textContent = node.speaker || "";

    // Update dialogue text
    dialogueText.textContent = node.text || "";

    // Update background
    if (node.bg === "temple") {
        background.style.backgroundImage = 'url("assets/temple-bg.jpg")';
    } else if (node.bg === "marble") {
        background.style.backgroundImage = 'url("assets/marble-bg.jpg")';
    }

    // Update sprites
    updateSprites(node.sprite);

    // Update choices
    choicesContainer.innerHTML = "";
    if (node.choices) {
        node.choices.forEach(choice => {
            const btn = document.createElement("button");
            btn.classList.add("choice-btn");
            btn.textContent = choice.text;
            btn.onclick = () => showNode(choice.next);
            choicesContainer.appendChild(btn);
        });
    }
}

/* ===========================
   SPRITE LOGIC
=========================== */

function updateSprites(active) {
    if (active === "apollo") {
        apolloSprite.classList.add("active");
        apolloSprite.classList.remove("inactive", "hidden");

        cassandraSprite.classList.add("inactive");
        cassandraSprite.classList.remove("active", "hidden");
    }

    if (active === "cassandra") {
        cassandraSprite.classList.add("active");
        cassandraSprite.classList.remove("inactive", "hidden");

        apolloSprite.classList.add("inactive");
        apolloSprite.classList.remove("active", "hidden");
    }
}

