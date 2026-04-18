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
   SUN BUTTON (NEXT)
=========================== */

const nextSun = document.createElement("img");
nextSun.id = "nextSun";
nextSun.src = "assets/sunsprite.png";
nextSun.alt = "Next";
nextSun.style.display = "none";
nextSun.style.cursor = "pointer";
nextSun.style.width = "48px";
nextSun.style.height = "48px";
nextSun.style.margin = "10px auto 0";
nextSun.style.display = "block";
uiContainer.appendChild(nextSun);

/* ===========================
   TYPEWRITER EFFECT
=========================== */

let isTyping = false;
let typewriterTimeout = null;

function typeWriter(text, element, speed = 30, onComplete = () => {}) {
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    element.textContent = "";
    let i = 0;
    isTyping = true;

    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            typewriterTimeout = setTimeout(typing, speed);
        } else {
            isTyping = false;
            onComplete();
        }
    }

    typing();
}

/* ===========================
   STORY DATA
   Each node:
   {
     lines: [
       { speaker, text, sprite, bg, mood }
     ],
     choices: [{ text, next }]
   }
=========================== */

let story = {

    // =========================
    // ACT I — THE SUMMONING
    // =========================

    start: {
        lines: [
            {
                speaker: "Apollo",
                text: "Welcome, Cassandra. Even the sun pauses to watch you enter my temple.",
                sprite: "apollo",
                bg: "temple",
                mood: "soft"
            },
            {
                speaker: "Apollo",
                text: "You feel it, don’t you? The light pressing against your skin.",
                sprite: "apollo",
                mood: "soft"
            }
        ],
        choices: [
            { text: "Remain silent.", next: "silent1" },
            { text: "Ask why you were summoned.", next: "ask1" }
        ]
    },

    silent1: {
        lines: [
            {
                speaker: "Cassandra",
                text: "…",
                sprite: "cassandra",
                bg: "temple"
            },
            {
                speaker: "Apollo",
                text: "Stillness suits you. But silence is rarely honest.",
                sprite: "apollo",
                mood: "soft"
            },
            {
                speaker: "Apollo",
                text: "Are you quiet because you are wise… or because you are afraid?",
                sprite: "apollo",
                mood: "soft"
            }
        ],
        choices: [
            { text: "Tell him you are not afraid.", next: "defy1" },
            { text: "Stay silent again.", next: "silent2" }
        ]
    },

    silent2: {
        lines: [
            {
                speaker: "Cassandra",
                text: "…",
                sprite: "cassandra"
            },
            {
                speaker: "Apollo",
                text: "Twice silent. A mortal trying to control the conversation… fascinating.",
                sprite: "apollo",
                mood: "soft"
            },
            {
                speaker: "Apollo",
                text: "Very well. I will speak for both of us.",
                sprite: "apollo",
                mood: "soft"
            }
        ],
        choices: [
            { text: "Ask what he wants.", next: "ask1" },
            { text: "Tell him you want to leave.", next: "leave1" }
        ]
    },

    ask1: {
        lines: [
            {
                speaker: "Cassandra",
                text: "Why did you summon me?",
                sprite: "cassandra",
                bg: "temple"
            },
            {
                speaker: "Apollo",
                text: "Because you see truth more sharply than others. I admire that.",
                sprite: "apollo",
                mood: "soft"
            },
            {
                speaker: "Apollo",
                text: "Most mortals squint at the world. You stare it down.",
                sprite: "apollo",
                mood: "soft"
            }
        ],
        choices: [
            { text: "Ask what he wants from you.", next: "want1" },
            { text: "Tell him you want to leave.", next: "leave1" }
        ]
    },

    defy1: {
        lines: [
            {
                speaker: "Cassandra",
                text: "I am not afraid of you.",
                sprite: "cassandra",
                bg: "temple"
            },
            {
                speaker: "Apollo",
                text: "Good. Fear is tedious. Strength is far more interesting.",
                sprite: "apollo",
                mood: "soft"
            },
            {
                speaker: "Apollo",
                text: "Do not disappoint me by trembling later.",
                sprite: "apollo",
                mood: "soft"
            }
        ],
        choices: [
            { text: "Ask what he wants.", next: "want1" }
        ]
    },

    leave1: {
        lines: [
            {
                speaker: "Cassandra",
                text: "I want to leave.",
                sprite: "cassandra",
                bg: "temple"
            },
            {
                speaker: "Apollo",
                text: "Leave? You misunderstand. I summoned you because you are needed.",
                sprite: "apollo",
                mood: "soft"
            },
            {
                speaker: "Apollo",
                text: "The sun does not invite. It commands.",
                sprite: "apollo",
                mood: "soft"
            }
        ],
        choices: [
            { text: "Ask what he means.", next: "want1" },
            { text: "Tell him you refuse.", next: "refuse1" }
        ]
    },

    refuse1: {
        lines: [
            {
                speaker: "Cassandra",
                text: "I don’t care what you are. I refuse.",
                sprite: "cassandra",
                bg: "temple"
            },
            {
                speaker: "Apollo",
                text: "Refusal is a mortal luxury. You stand in a god’s presence.",
                sprite: "apollo",
                mood: "soft"
            },
            {
                speaker: "Apollo",
                text: "You will find my patience generous… but not endless.",
                sprite: "apollo",
                mood: "soft"
            }
        ],
        choices: [
            { text: "Demand an explanation.", next: "want1" }
        ]
    },

    // =========================
    // ACT II — THE OFFER
    // =========================

    want1: {
        lines: [
            {
                speaker: "Apollo",
                text: "I want to give you a gift. Sight beyond sight. Truth unclouded.",
                sprite: "apollo",
                bg: "temple",
                mood: "soft"
            },
            {
                speaker: "Apollo",
                text: "You already see more than most. I would simply… refine you.",
                sprite: "apollo",
                mood: "soft"
            }
        ],
        choices: [
            { text: "Ask why you.", next: "whyme1" },
            { text: "Ask what the cost is.", next: "cost1" },
            { text: "Reject the offer.", next: "reject1" }
        ]
    },

    whyme1: {
        lines: [
            {
                speaker: "Cassandra",
                text: "Why me?",
                sprite: "cassandra",
                bg: "temple"
            },
            {
                speaker: "Apollo",
                text: "Because you already see the cracks in the world.",
                sprite: "apollo",
                mood: "soft"
            },
            {
                speaker: "Apollo",
                text: "I am only offering you the light to see them clearly.",
                sprite: "apollo",
                mood: "soft"
            }
        ],
        choices: [
            { text: "Ask what he gains.", next: "gain1" },
            { text: "Ask the cost again.", next: "cost1" }
        ]
    },

    gain1: {
        lines: [
            {
                speaker: "Cassandra",
                text: "What do you gain from this?",
                sprite: "cassandra",
                bg: "temple"
            },
            {
                speaker: "Apollo",
                text: "What does the sun gain from rising?",
                sprite: "apollo",
                mood: "soft"
            },
            {
                speaker: "Apollo",
                text: "I gain a voice that speaks truth. A mortal who does not bore me.",
                sprite: "apollo",
                mood: "soft"
            }
        ],
        choices: [
            { text: "Tell him you don’t trust him.", next: "distrust1" },
            { text: "Ask the cost.", next: "cost1" }
        ]
    },

    distrust1: {
        lines: [
            {
                speaker: "Cassandra",
                text: "I don’t trust you.",
                sprite: "cassandra",
                bg: "temple"
            },
            {
                speaker: "Apollo",
                text: "Trust is not required. Only acceptance.",
                sprite: "apollo",
                mood: "irritated"
            },
            {
                speaker: "Apollo",
                text: "You will see that I am right, eventually.",
                sprite: "apollo",
                mood: "irritated"
            }
        ],
        choices: [
            { text: "Reject him.", next: "reject1" },
            { text: "Ask the cost.", next: "cost1" }
        ]
    },

    cost1: {
        lines: [
            {
                speaker: "Cassandra",
                text: "What is the cost?",
                sprite: "cassandra",
                bg: "temple"
            },
            {
                speaker: "Apollo",
                text: "Every gift has a cost. But yours is simple: speak truth for me.",
                sprite: "apollo",
                mood: "soft"
            },
            {
                speaker: "Apollo",
                text: "You will be my voice among mortals.",
                sprite: "apollo",
                mood: "soft"
            }
        ],
        choices: [
            { text: "Ask what happens if you refuse.", next: "refuse2" },
            { text: "Ask what kind of truth.", next: "truth1" }
        ]
    },

    truth1: {
        lines: [
            {
                speaker: "Apollo",
                text: "Prophecy. Clear, sharp, undeniable. You will see what others cannot.",
                sprite: "apollo",
                bg: "temple",
                mood: "soft"
            },
            {
                speaker: "Apollo",
                text: "You will warn them of storms before the first cloud forms.",
                sprite: "apollo",
                mood: "soft"
            }
        ],
        choices: [
            { text: "Ask what happens if you refuse.", next: "refuse2" },
            { text: "Reject him.", next: "reject1" }
        ]
    },

    refuse2: {
        lines: [
            {
                speaker: "Cassandra",
                text: "And if I refuse?",
                sprite: "cassandra",
                bg: "temple"
            },
            {
                speaker: "Apollo",
                text: "Then you refuse a god’s generosity.",
                sprite: "apollo",
                mood: "irritated"
            },
            {
                speaker: "Apollo",
                text: "And gods do not enjoy being refused.",
                sprite: "apollo",
                mood: "irritated"
            }
        ],
        choices: [
            { text: "Reject him anyway.", next: "reject1" },
            { text: "Try to leave.", next: "leave2" }
        ]
    },

    leave2: {
        lines: [
            {
                speaker: "Cassandra",
                text: "I’m leaving.",
                sprite: "cassandra",
                bg: "temple"
            },
            {
                speaker: "Apollo",
                text: "You cannot leave until I release you.",
                sprite: "apollo",
                mood: "irritated"
            }
        ],
        choices: [
            { text: "Reject him.", next: "reject1" }
        ]
    },

    reject1: {
        lines: [
            {
                speaker: "Cassandra",
                text: "I don’t want your gift.",
                sprite: "cassandra",
                bg: "temple"
            },
            {
                speaker: "Apollo",
                text: "You wound me. I offer you greatness, and you spit it back.",
                sprite: "apollo",
                mood: "irritated"
            },
            {
                speaker: "Apollo",
                text: "Mortals never recognize the hand that lifts them.",
                sprite: "apollo",
                mood: "irritated"
            }
        ],
        choices: [
            { text: "Tell him it’s your choice.", next: "choice1" }
        ]
    },

    choice1: {
        lines: [
            {
                speaker: "Cassandra",
                text: "It’s my choice.",
                sprite: "cassandra",
                bg: "temple"
            },
            {
                speaker: "Apollo",
                text: "Choice… yes. Mortals cling to it like a raft in a storm.",
                sprite: "apollo",
                mood: "irritated"
            },
            {
                speaker: "Apollo",
                text: "Very well. If you reject my gift… you will accept my truth.",
                sprite: "apollo",
                mood: "snap",
                bg: "marble"
            }
        ],
        choices: [
            { text: "Face him.", next: "snap1" }
        ]
    },

    // =========================
    // ACT III — THE SNAP
    // =========================

    snap1: {
        lines: [
            {
                speaker: "Apollo",
                text: "You see the future, Cassandra. But no one will ever believe you.",
                sprite: "apollo",
                bg: "marble",
                mood: "snap"
            },
            {
                speaker: "Apollo",
                text: "You will scream warnings into deaf ears.",
                sprite: "apollo",
                mood: "snap"
            }
        ],
        choices: [
            { text: "Feel the curse settle.", next: "curse1" }
        ]
    },

    curse1: {
        lines: [
            {
                speaker: "Cassandra",
                text: "What did you do to me?",
                sprite: "cassandra",
                bg: "marble"
            },
            {
                speaker: "Apollo",
                text: "I have given you prophecy. And taken belief.",
                sprite: "apollo",
                mood: "snap"
            },
            {
                speaker: "Apollo",
                text: "You will speak truth, and they will laugh.",
                sprite: "apollo",
                mood: "snap"
            }
        ],
        choices: [
            { text: "Refuse to break.", next: "refusebreak1" },
            { text: "Fall to your knees.", next: "fall1" }
        ]
    },

    fall1: {
        lines: [
            {
                speaker: "Cassandra",
                text: "Why…?",
                sprite: "cassandra",
                bg: "marble"
            },
            {
                speaker: "Apollo",
                text: "Because you rejected me. And gods do not tolerate rejection.",
                sprite: "apollo",
                mood: "snap"
            }
        ],
        choices: [
            { text: "Close your eyes.", next: "branchpoint" }
        ]
    },

    refusebreak1: {
        lines: [
            {
                speaker: "Cassandra",
                text: "You cannot break me.",
                sprite: "cassandra",
                bg: "marble"
            },
            {
                speaker: "Apollo",
                text: "We will see.",
                sprite: "apollo",
                mood: "snap"
            }
        ],
        choices: [
            { text: "Stand your ground.", next: "branchpoint" }
        ]
    },

    // =========================
    // ACT IV — BRANCH POINT
    // =========================

    branchpoint: {
        lines: [
            {
                speaker: "Narration",
                text: "The curse settles like ice in your veins. But something inside you still burns.",
                sprite: "cassandra",
                bg: "marble"
            }
        ],
        choices: [
            { text: "Fight the curse.", next: "fight1" },
            { text: "Accept your fate.", next: "accept1" }
        ]
    },

    // =========================
    // ROUTE A — FIGHT (GOOD ENDING)
    // =========================

    fight1: {
        lines: [
            {
                speaker: "Cassandra",
                text: "You will not own me.",
                sprite: "cassandra",
                bg: "marble"
            },
            {
                speaker: "Narration",
                text: "A spark ignites. A crack forms in the curse’s shell.",
                sprite: "cassandra"
            }
        ],
        choices: [
            { text: "Push back.", next: "fight2" }
        ]
    },

    fight2: {
        lines: [
            {
                speaker: "Apollo",
                text: "What are you doing…?",
                sprite: "apollo",
                bg: "marble",
                mood: "irritated"
            },
            {
                speaker: "Narration",
                text: "Light erupts from your chest — not his light, but yours.",
                sprite: "cassandra"
            }
        ],
        choices: [
            { text: "Break free.", next: "goodEnding" }
        ]
    },

    goodEnding: {
        lines: [
            {
                speaker: "Narration",
                text: "You leave the temple. The sun does not follow. You are free.",
                sprite: "cassandra",
                bg: "temple"
            }
        ],
        choices: []
    },

    // =========================
    // ROUTE B — ACCEPT (VERY BAD ENDING)
    // =========================

    accept1: {
        lines: [
            {
                speaker: "Cassandra",
                text: "…I accept it.",
                sprite: "cassandra",
                bg: "marble"
            },
            {
                speaker: "Apollo",
                text: "Good. You finally understand your place.",
                sprite: "apollo",
                mood: "soft"
            }
        ],
        choices: [
            { text: "Say nothing.", next: "accept2" }
        ]
    },

    accept2: {
        lines: [
            {
                speaker: "Narration",
                text: "The curse tightens. Your visions sharpen. Your voice becomes a weapon no one hears.",
                sprite: "cassandra",
                bg: "marble"
            },
            {
                speaker: "Apollo",
                text: "You are my oracle now.",
                sprite: "apollo",
                mood: "soft"
            }
        ],
        choices: [
            { text: "Let the darkness take you.", next: "badEnding" }
        ]
    },

    badEnding: {
        lines: [
            {
                speaker: "Narration",
                text: "Apollo’s shadow falls over you. Forever unheard. Forever his.",
                sprite: "apollo",
                bg: "marble"
            }
        ],
        choices: []
    }
};

/* ===========================
   STORY ENGINE
=========================== */

let currentNodeKey = "start";
let currentLineIndex = 0;

function startStory() {
    loadNode("start");
}

function loadNode(nodeKey) {
    currentNodeKey = nodeKey;
    currentLineIndex = 0;
    choicesContainer.innerHTML = "";
    nextSun.style.display = "block";
    showCurrentLine();
}

function showCurrentLine() {
    const node = story[currentNodeKey];
    if (!node) return;

    const line = node.lines[currentLineIndex];
    if (!line) {
        showChoices();
        return;
    }

    // Speaker
    speakerName.textContent = line.speaker || "";

    // Background
    if (line.bg === "temple") {
        background.style.backgroundImage = 'url("assets/temple-background.jpg")';
    } else if (line.bg === "marble") {
        background.style.backgroundImage = 'url("assets/marble-bg.jpg")';
    }

    // Sprites
    updateSprites(line.sprite, line.mood);

    // Text with typewriter
    typeWriter(line.text || "", dialogueText);
}

function showChoices() {
    const node = story[currentNodeKey];
    choicesContainer.innerHTML = "";
    nextSun.style.display = node.choices && node.choices.length ? "none" : "none";

    if (node.choices && node.choices.length > 0) {
        node.choices.forEach(choice => {
            const btn = document.createElement("button");
            btn.classList.add("choice-btn");
            btn.textContent = choice.text;
            btn.onclick = () => {
                loadNode(choice.next);
            };
            choicesContainer.appendChild(btn);
        });
    }
}

/* ===========================
   SUN CLICK HANDLER
=========================== */

nextSun.addEventListener("click", () => {
    const node = story[currentNodeKey];
    if (!node) return;

    if (isTyping) {
        // Finish current line instantly
        if (typewriterTimeout) clearTimeout(typewriterTimeout);
        isTyping = false;
        const line = node.lines[currentLineIndex];
        dialogueText.textContent = line.text || "";
        return;
    }

    currentLineIndex++;

    if (currentLineIndex >= node.lines.length) {
        showChoices();
    } else {
        showCurrentLine();
    }
});

/* ===========================
   SPRITE LOGIC + MOOD
=========================== */

function updateSprites(active, mood) {
    // Reset base classes
    apolloSprite.classList.remove("active", "inactive", "hidden", "soft", "irritated", "snap");
    cassandraSprite.classList.remove("active", "inactive", "hidden");

    if (active === "apollo") {
        apolloSprite.classList.remove("hidden");
        cassandraSprite.classList.remove("hidden");

        apolloSprite.classList.add("active");
        cassandraSprite.classList.add("inactive");

        if (mood === "soft") {
            apolloSprite.classList.add("soft");
        } else if (mood === "irritated") {
            apolloSprite.classList.add("irritated");
        } else if (mood === "snap") {
            apolloSprite.classList.add("snap");
        }
    } else if (active === "cassandra") {
        apolloSprite.classList.remove("hidden");
        cassandraSprite.classList.remove("hidden");

        cassandraSprite.classList.add("active");
        apolloSprite.classList.add("inactive");
    } else {
        // Narration or none
        apolloSprite.classList.add("inactive");
        cassandraSprite.classList.add("inactive");
    }
}

