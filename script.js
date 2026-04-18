/* LOADING */

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
    startStory();
  }, 1000);
});

/* ELEMENTS */

const apolloSprite = document.getElementById("apolloSprite");
const cassandraSprite = document.getElementById("cassandraSprite");
const speakerName = document.getElementById("speakerName");
const dialogueText = document.getElementById("dialogueText");
const choicesContainer = document.getElementById("choices");
const background = document.getElementById("background");
const nextSun = document.getElementById("nextSun");

/* TYPEWRITER */

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

/* STORY DATA */

let story = {
  /* ACT I — SUMMONING */

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
        speaker: "Cassandra",
        text: "Cool. Does the sun also watch me trip on the stairs, or is this a special occasion?",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "You joke in a god’s presence.",
        sprite: "apollo",
        mood: "soft"
      },
      {
        speaker: "Cassandra",
        text: "Yeah, it’s that or scream. I’m going with jokes for now.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Stay flippant.", next: "flippant1" },
      { text: "Ask why you’re here.", next: "ask1" }
    ]
  },

  flippant1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "So, is this a ‘chosen one’ thing or a ‘you’re about to die’ thing?",
        sprite: "cassandra",
        bg: "temple"
      },
      {
        speaker: "Apollo",
        text: "You stand before a god and still reach for humor.",
        sprite: "apollo",
        mood: "soft"
      },
      {
        speaker: "Cassandra",
        text: "If I stop talking, I might notice how terrifying this is. So no thanks.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Ask why you’re here.", next: "ask1" }
    ]
  },

  ask1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "Why did you summon me? I was in the middle of pretending my life was normal.",
        sprite: "cassandra",
        bg: "temple"
      },
      {
        speaker: "Apollo",
        text: "Because you see more than the others. You notice what they refuse to look at.",
        sprite: "apollo",
        mood: "soft"
      },
      {
        speaker: "Cassandra",
        text: "Yeah, it’s a blast. Ten out of ten, would recommend intrusive insight.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Ask what he wants.", next: "want1" },
      { text: "Tell him you don’t trust this.", next: "distrust1" }
    ]
  },

  distrust1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "I don’t trust this. You. Any of it.",
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
        speaker: "Cassandra",
        text: "Yeah, see, that sentence is exactly why I don’t trust you.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Ask what he wants.", next: "want1" }
    ]
  },

  /* ACT II — THE OFFER */

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
        speaker: "Cassandra",
        text: "That sounds suspiciously like a curse with extra steps.",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "You already see more than most. I would refine what is already there.",
        sprite: "apollo",
        mood: "soft"
      },
      {
        speaker: "Cassandra",
        text: "Refine, like polishing a knife or like scraping rust off a wound?",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Ask the cost.", next: "cost1" },
      { text: "Ask why you.", next: "whyme1" },
      { text: "Reject the offer.", next: "reject1" }
    ]
  },

  whyme1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "Why me? There are plenty of people who’d love to be your golden mouthpiece.",
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
        speaker: "Cassandra",
        text: "Yeah, I’ve noticed. Nobody likes when you point at them, by the way.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Ask what he gains.", next: "gain1" },
      { text: "Ask the cost.", next: "cost1" }
    ]
  },

  gain1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "What do you get out of this? Besides a front row seat to my mental breakdown.",
        sprite: "cassandra",
        bg: "temple"
      },
      {
        speaker: "Apollo",
        text: "I gain a mortal who does not bore me.",
        sprite: "apollo",
        mood: "soft"
      },
      {
        speaker: "Cassandra",
        text: "Wow. I feel so honored to be your entertainment.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Tell him you still don’t trust him.", next: "distrust2" },
      { text: "Ask the cost.", next: "cost1" }
    ]
  },

  distrust2: {
    lines: [
      {
        speaker: "Cassandra",
        text: "You keep saying ‘gift’ like I’m supposed to clap.",
        sprite: "cassandra",
        bg: "temple"
      },
      {
        speaker: "Apollo",
        text: "You speak as if you have a choice.",
        sprite: "apollo",
        mood: "irritated"
      },
      {
        speaker: "Cassandra",
        text: "I speak like someone who’s been cornered before.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Ask the cost.", next: "cost1" }
    ]
  },

  cost1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "Fine. What’s the cost? There’s always a cost.",
        sprite: "cassandra",
        bg: "temple"
      },
      {
        speaker: "Apollo",
        text: "You will speak truth for me. You will be my voice among mortals.",
        sprite: "apollo",
        mood: "soft"
      },
      {
        speaker: "Cassandra",
        text: "So I talk, they listen, you glow. That’s the plan?",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "They will listen because you will be undeniable.",
        sprite: "apollo",
        mood: "soft"
      }
    ],
    choices: [
      { text: "Ask what happens if you refuse.", next: "refuse2" },
      { text: "Call it what it is: control.", next: "control1" }
    ]
  },

  control1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "This isn’t a gift. It’s control with better branding.",
        sprite: "cassandra",
        bg: "temple"
      },
      {
        speaker: "Apollo",
        text: "You mistake guidance for control.",
        sprite: "apollo",
        mood: "irritated"
      },
      {
        speaker: "Cassandra",
        text: "No, I don’t. I’ve met men like you. You’re just taller.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Refuse him.", next: "reject1" },
      { text: "Ask what happens if you refuse.", next: "refuse2" }
    ]
  },

  refuse2: {
    lines: [
      {
        speaker: "Cassandra",
        text: "And if I say no?",
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
        speaker: "Cassandra",
        text: "You keep saying ‘god’ like it’s supposed to scare me more than everything else already does.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Refuse him anyway.", next: "reject1" }
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
        speaker: "Cassandra",
        text: "You don’t get to call it greatness just because you’re the one holding the leash.",
        sprite: "cassandra"
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
        text: "It’s my life. That means it’s my choice.",
        sprite: "cassandra",
        bg: "temple"
      },
      {
        speaker: "Apollo",
        text: "Mortals cling to choice like a raft in a storm.",
        sprite: "apollo",
        mood: "irritated"
      },
      {
        speaker: "Apollo",
        text: "Very well. If you reject my gift… you will accept my truth.",
        sprite: "apollo",
        mood: "snap",
        bg: "marble"
      },
      {
        speaker: "Cassandra",
        text: "That sounds ominous and I hate it.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Face him.", next: "snap1" }
    ]
  },

  /* ACT III — CURSE */

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
        speaker: "Cassandra",
        text: "That’s not funny.",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "You will scream warnings into deaf ears.",
        sprite: "apollo",
        mood: "snap"
      },
      {
        speaker: "Cassandra",
        text: "Stop.",
        sprite: "cassandra"
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
        speaker: "Cassandra",
        text: "So I get to be right and alone. Great. That’s new.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Refuse to break.", next: "refusebreak1" },
      { text: "Let the fear show.", next: "fall1" }
    ]
  },

  fall1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "I didn’t ask for any of this.",
        sprite: "cassandra",
        bg: "marble"
      },
      {
        speaker: "Apollo",
        text: "You rejected what I offered. This is what remains.",
        sprite: "apollo",
        mood: "snap"
      },
      {
        speaker: "Cassandra",
        text: "If you’re going to ruin my life, at least admit you enjoyed it.",
        sprite: "cassandra"
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
        text: "You don’t get to break me and call it a lesson.",
        sprite: "cassandra",
        bg: "marble"
      },
      {
        speaker: "Apollo",
        text: "We will see.",
        sprite: "apollo",
        mood: "snap"
      },
      {
        speaker: "Cassandra",
        text: "You’re not the first person who thought they owned me.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Stand your ground.", next: "branchpoint" }
    ]
  },

  /* ACT IV — BRANCH */

  branchpoint: {
    lines: [
      {
        speaker: "Narration",
        text: "The curse settles like ice in your veins. But something inside you still burns.",
        sprite: "cassandra",
        bg: "marble"
      },
      {
        speaker: "Cassandra",
        text: "If I’m going to be cursed, I’m at least going to be loud about it.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Fight the curse.", next: "fight1" },
      { text: "Accept your fate.", next: "accept1" }
    ]
  },

  /* GOOD ENDING */

  fight1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "You don’t get the last word on me.",
        sprite: "cassandra",
        bg: "marble"
      },
      {
        speaker: "Narration",
        text: "A spark ignites. A crack forms in the curse’s shell.",
        sprite: "cassandra"
      },
      {
        speaker: "Cassandra",
        text: "If nobody believes me, I’ll make them listen.",
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
      },
      {
        speaker: "Cassandra",
        text: "You don’t get to be the only one who shines.",
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
      },
      {
        speaker: "Cassandra",
        text: "I’m still cursed. But I’m mine.",
        sprite: "cassandra"
      }
    ],
    choices: []
  },

  /* BAD ENDING */

  accept1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "…Fine. I’ll live with it.",
        sprite: "cassandra",
        bg: "marble"
      },
      {
        speaker: "Apollo",
        text: "Good. You finally understand your place.",
        sprite: "apollo",
        mood: "soft"
      },
      {
        speaker: "Cassandra",
        text: "I understand that you like the sound of your own voice.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Say nothing else.", next: "accept2" }
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
      },
      {
        speaker: "Cassandra",
        text: "If I’m yours, it’s only because you broke me first.",
        sprite: "cassandra"
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

/* ENGINE */

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

  speakerName.textContent = line.speaker || "";

  if (line.bg === "temple") {
    background.style.backgroundImage = 'url("assets/temple-bg.jpg")';
  } else if (line.bg === "marble") {
    background.style.backgroundImage = 'url("assets/marble-bg.jpg")';
  }

  updateSprites(line.sprite, line.mood);
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

/* SUN CLICK */

nextSun.addEventListener("click", () => {
  const node = story[currentNode];

  if (isTyping) {
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

/* SPRITES */

function updateSprites(active, mood) {
  apolloSprite.className = "sprite left";
  cassandraSprite.className = "sprite right";

  if (active === "apollo") {
    apolloSprite.classList.add("active");
    cassandraSprite.classList.add("inactive");

    if (mood === "soft") apolloSprite.classList.add("soft");
    if (mood === "irritated") apolloSprite.classList.add("irritated");
    if (mood === "snap") apolloSprite.classList.add("snap");
  } else if (active === "cassandra") {
    cassandraSprite.classList.add("active");
    apolloSprite.classList.add("inactive");
  } else {
    apolloSprite.classList.add("inactive");
    cassandraSprite.classList.add("inactive");
  }
}

