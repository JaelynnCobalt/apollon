export const story = {
  start: {
    lines: [
      {
        speaker: "Apollo",
        text: "Welcome, Cassandra. The sun watches you enter.",
        sprite: "apollo",
        bg: "temple"
      },
      {
        speaker: "Cassandra",
        text: "Cool. Is that normal or alarming?",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Be sarcastic", next: "sarcastic" },
      { text: "Ask why you're here", next: "ask" }
    ]
  },

  sarcastic: {
    lines: [
      {
        speaker: "Cassandra",
        text: "So… divine kidnapping or social visit?",
        sprite: "cassandra"
      }
    ],
    choices: []
  },

  ask: {
    lines: [
      {
        speaker: "Cassandra",
        text: "Why me?",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "Because you see too much.",
        sprite: "apollo"
      }
    ],
    choices: []
  }
};
