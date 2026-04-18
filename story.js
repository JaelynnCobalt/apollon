export const story = {

  start: {
    lines: [
      {
        speaker: "Apollo",
        text: "You keep walking into my temple like you already belong here.",
        sprite: "apollo",
        bg: "temple"
      },
      {
        speaker: "Cassandra",
        text: "I don’t belong anywhere. I just get dragged into places with better lighting.",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "And yet you never leave.",
        sprite: "apollo"
      },
      {
        speaker: "Cassandra",
        text: "Neither do you.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Tease him back", next: "bond1" },
      { text: "Ask why he watches you", next: "bond2" }
    ]
  },

  bond1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "Is this your idea of divine entertainment? Staring at me while I try not to trip on marble?",
        sprite: "cassandra",
        bg: "temple"
      },
      {
        speaker: "Apollo",
        text: "You make even silence feel alive. That is… rare.",
        sprite: "apollo"
      },
      {
        speaker: "Cassandra",
        text: "Careful. That almost sounded like a compliment.",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "It was.",
        sprite: "apollo"
      }
    ],
    choices: [
      { text: "Let the moment linger", next: "bond3" }
    ]
  },

  bond2: {
    lines: [
      {
        speaker: "Cassandra",
        text: "Why do you watch me like that?",
        sprite: "cassandra",
        bg: "temple"
      },
      {
        speaker: "Apollo",
        text: "Because when I look away, the future becomes… louder.",
        sprite: "apollo"
      },
      {
        speaker: "Cassandra",
        text: "That sounds like your problem, not mine.",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "It is always your problem eventually.",
        sprite: "apollo"
      }
    ],
    choices: [
      { text: "Stay anyway", next: "bond3" }
    ]
  },

  bond3: {
    lines: [
      {
        speaker: "Narration",
        text: "Something unspoken settles between them — not trust, not love… but recognition.",
        sprite: "cassandra",
        bg: "temple"
      },
      {
        speaker: "Apollo",
        text: "You are not meant for quiet lives, Cassandra.",
        sprite: "apollo"
      },
      {
        speaker: "Cassandra",
        text: "Neither are you. You just pretend better.",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "Then stay. And we will pretend together.",
        sprite: "apollo"
      }
    ],
    choices: [
      { text: "Something changes here", next: "choice_split" }
    ]
  },

  choice_split: {
    lines: [
      {
        speaker: "Narration",
        text: "A vision fractures the moment — burning ships. Falling walls. Troy.",
        sprite: "cassandra",
        bg: "marble"
      },
      {
        speaker: "Cassandra",
        text: "I saw something… and I don’t think it was a dream.",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "You are beginning to see what I cannot hide from you anymore.",
        sprite: "apollo"
      },
      {
        speaker: "Apollo",
        text: "So I must ask you plainly now.",
        sprite: "apollo"
      },
      {
        speaker: "Apollo",
        text: "Stay with me — not as oracle… but as yourself.",
        sprite: "apollo"
      }
    ],
    choices: [
      { text: "Accept him", next: "route_romance" },
      { text: "Reject him", next: "route_curse" }
    ]
  },

  /* =========================
     ROMANCE ROUTE
  ========================= */

  route_romance: {
    lines: [
      {
        speaker: "Cassandra",
        text: "If I stay… I want it to be because I chose it.",
        sprite: "cassandra",
        bg: "temple"
      },
      {
        speaker: "Apollo",
        text: "Then choose. And I will not take it from you.",
        sprite: "apollo"
      },
      {
        speaker: "Narration",
        text: "For the first time, Apollo does not feel like inevitability.",
        sprite: "apollo"
      }
    ],
    choices: [
      { text: "Walk the shared fate", next: "troy_romance_1" }
    ]
  },

  troy_romance_1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "Troy is going to fall. I’ve seen it.",
        sprite: "cassandra",
        bg: "marble"
      },
      {
        speaker: "Apollo",
        text: "Then we change what can be changed.",
        sprite: "apollo"
      },
      {
        speaker: "Cassandra",
        text: "And what can’t be?",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "We endure it together.",
        sprite: "apollo"
      }
    ],
    choices: [
      { text: "Try to save Troy", next: "romance_end" }
    ]
  },

  romance_end: {
    lines: [
      {
        speaker: "Narration",
        text: "They do not stop the war. But they change who survives it.",
        sprite: "apollo",
        bg: "marble"
      },
      {
        speaker: "Cassandra",
        text: "So we didn’t win.",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "No. But we were not alone when it happened.",
        sprite: "apollo"
      }
    ],
    choices: []
  },

  /* =========================
     CURSE ROUTE
  ========================= */

  route_curse: {
    lines: [
      {
        speaker: "Cassandra",
        text: "If I stay… I won’t be myself anymore, will I?",
        sprite: "cassandra",
        bg: "marble"
      },
      {
        speaker: "Apollo",
        text: "You will still be you. But the world will not agree.",
        sprite: "apollo"
      },
      {
        speaker: "Narration",
        text: "Something in Apollo’s voice breaks — just slightly.",
        sprite: "apollo"
      }
    ],
    choices: [
      { text: "Step away", next: "troy_curse_1" }
    ]
  },

  troy_curse_1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "Then I can’t stay.",
        sprite: "cassandra",
        bg: "marble"
      },
      {
        speaker: "Apollo",
        text: "Then you will see what I cannot stop.",
        sprite: "apollo"
      },
      {
        speaker: "Narration",
        text: "The connection between them fractures — not violently, but irrevocably.",
        sprite: "apollo"
      }
    ],
    choices: [
      { text: "Face the vision alone", next: "curse_end" }
    ]
  },

  curse_end: {
    lines: [
      {
        speaker: "Cassandra",
        text: "I tried to warn them.",
        sprite: "cassandra",
        bg: "marble"
      },
      {
        speaker: "Narration",
        text: "No one listens to a voice they cannot see the source of.",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "I am sorry.",
        sprite: "apollo"
      }
    ],
    choices: []
  }
};
