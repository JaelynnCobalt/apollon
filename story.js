export const story = {
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
        text: "Cool. Does the sun also watch me trip on the stairs?",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Stay flippant", next: "flippant1" },
      { text: "Ask why you're here", next: "ask1" }
    ]
  },

  flippant1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "So, chosen one or about to die?",
        sprite: "cassandra"
      }
    ],
    choices: []
  },

  ask1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "Why did you summon me?",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "Because you see what others refuse to look at.",
        sprite: "apollo"
      }
    ],
    choices: []
  }
};
