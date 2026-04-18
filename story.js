console.log("🔥🔥🔥 STORY.JS NEW VERSION LOADED SUCCESSFULLY 🔥🔥🔥");

export const story = {
  start: {
    lines: [
      {
        speaker: "DEBUG SYSTEM",
        text: "If you are seeing THIS text, the new story file is working correctly.",
        sprite: "apollo",
        bg: "temple"
      },
      {
        speaker: "DEBUG SYSTEM",
        text: "Old story is NOT being used right now.",
        sprite: "cassandra"
      },
      {
        speaker: "SYSTEM",
        text: "This is a hard override test node.",
        sprite: "apollo"
      }
    ],
    choices: [
      { text: "Test branch A", next: "test_a" },
      { text: "Test branch B", next: "test_b" }
    ]
  },

  test_a: {
    lines: [
      {
        speaker: "TEST A",
        text: "Branch A is active. Story routing works.",
        sprite: "apollo",
        bg: "marble"
      },
      {
        speaker: "TEST A",
        text: "If you still see Apollo/Cassandra old dialogue, caching is still happening.",
        sprite: "apollo"
      }
    ],
    choices: [
      { text: "Back to start", next: "start" }
    ]
  },

  test_b: {
    lines: [
      {
        speaker: "TEST B",
        text: "Branch B is active. This confirms branching works.",
        sprite: "cassandra",
        bg: "marble"
      },
      {
        speaker: "TEST B",
        text: "If this does NOT appear, your import is broken or cached.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Back to start", next: "start" }
    ]
  }
};
