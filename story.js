export const story = {
  start: {
    lines: [
      {
        speaker: "DEBUG",
        text: "If you see this, NEW story.js is working.",
        sprite: "apollo",
        bg: "temple"
      },
      {
        speaker: "DEBUG",
        text: "Old story is gone.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Test A", next: "a" },
      { text: "Test B", next: "b" }
    ]
  },

  a: {
    lines: [
      {
        speaker: "A",
        text: "Branch A works.",
        sprite: "apollo",
        bg: "marble"
      }
    ],
    choices: [
      { text: "Back", next: "start" }
    ]
  },

  b: {
    lines: [
      {
        speaker: "B",
        text: "Branch B works.",
        sprite: "cassandra",
        bg: "marble"
      }
    ],
    choices: [
      { text: "Back", next: "start" }
    ]
  }
};
