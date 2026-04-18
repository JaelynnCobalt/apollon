export const story = {

  start: {
    lines: [
      {
        speaker: "Apollo",
        text: "Welcome, Cassandra. The sun itself slows to watch you enter my temple.",
        sprite: "apollo",
        bg: "temple"
      },
      {
        speaker: "Cassandra",
        text: "That’s either flattering or deeply unsettling. I can’t tell yet.",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "You will learn to tell the difference. Eventually.",
        sprite: "apollo"
      },
      {
        speaker: "Cassandra",
        text: "That sounded like a threat disguised as mentorship.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Make a joke", next: "joke_route_1" },
      { text: "Ask why you're here", next: "ask_route_1" },
      { text: "Stay silent", next: "silent_route_1" }
    ]
  },

  /* =========================
     SILENT PATH
  ========================= */

  silent_route_1: {
    lines: [
      {
        speaker: "Narration",
        text: "You don’t respond. The silence feels heavier than expected.",
        sprite: "cassandra",
        bg: "temple"
      },
      {
        speaker: "Apollo",
        text: "Most mortals fill silence with noise. You do not.",
        sprite: "apollo"
      },
      {
        speaker: "Cassandra",
        text: "I’m deciding if this is a trap or a conversation.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Ask what he wants", next: "ask_route_1" },
      { text: "Leave the temple (mentally)", next: "resist_1" }
    ]
  },

  /* =========================
     JOKE PATH
  ========================= */

  joke_route_1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "So what’s the vibe here? Divine interview? Am I getting graded?",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "You speak as if consequences are optional.",
        sprite: "apollo"
      },
      {
        speaker: "Cassandra",
        text: "I prefer to keep my existential dread with humor. Helps digestion.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Push further", next: "joke_route_2" },
      { text: "Switch tone", next: "ask_route_1" }
    ]
  },

  joke_route_2: {
    lines: [
      {
        speaker: "Apollo",
        text: "You mask fear with wit.",
        sprite: "apollo"
      },
      {
        speaker: "Cassandra",
        text: "And you mask control with poetry. We all cope differently.",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "Bold.",
        sprite: "apollo"
      }
    ],
    choices: [
      { text: "Ask why you're here", next: "ask_route_1" },
      { text: "Call him out", next: "control_callout_1" }
    ]
  },

  /* =========================
     ASK PATH (CORE ROUTE)
  ========================= */

  ask_route_1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "Why did you bring me here?",
        sprite: "cassandra",
        bg: "temple"
      },
      {
        speaker: "Apollo",
        text: "Because you already see what others refuse to acknowledge.",
        sprite: "apollo"
      },
      {
        speaker: "Cassandra",
        text: "That sounds like a job description I did not apply for.",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "You did not need to apply.",
        sprite: "apollo"
      }
    ],
    choices: [
      { text: "Ask what he wants from you", next: "apollo_intent_1" },
      { text: "Question his authority", next: "control_callout_1" },
      { text: "Refuse immediately", next: "resist_1" }
    ]
  },

  /* =========================
     APOSTLE INTENT
  ========================= */

  apollo_intent_1: {
    lines: [
      {
        speaker: "Apollo",
        text: "I want you to speak truth where others would lie.",
        sprite: "apollo",
        bg: "temple"
      },
      {
        speaker: "Cassandra",
        text: "That sounds noble until you realize nobody likes truth.",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "They will listen because it will be undeniable.",
        sprite: "apollo"
      },
      {
        speaker: "Cassandra",
        text: "Or because they won’t have a choice.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Ask what you gain", next: "apollo_gain_1" },
      { text: "Refuse the offer", next: "resist_1" }
    ]
  },

  apollo_gain_1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "What do you get out of this?",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "A voice that does not bend easily.",
        sprite: "apollo"
      },
      {
        speaker: "Cassandra",
        text: "So entertainment.",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "Understanding.",
        sprite: "apollo"
      }
    ],
    choices: [
      { text: "Call it manipulation", next: "control_callout_1" },
      { text: "Back away mentally", next: "resist_1" }
    ]
  },

  /* =========================
     CONTROL CONFRONTATION
  ========================= */

  control_callout_1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "This isn’t guidance. It’s control.",
        sprite: "cassandra",
        bg: "temple"
      },
      {
        speaker: "Apollo",
        text: "You mistake structure for control.",
        sprite: "apollo"
      },
      {
        speaker: "Cassandra",
        text: "No. I recognize control when it introduces itself politely.",
        sprite: "cassandra"
      }
    ],
    choices: [
      { text: "Refuse him", next: "resist_1" },
      { text: "Press further", next: "apollo_intent_1" }
    ]
  },

  /* =========================
     RESISTANCE PATH
  ========================= */

  resist_1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "No.",
        sprite: "cassandra",
        bg: "temple"
      },
      {
        speaker: "Apollo",
        text: "That is not a sufficient answer.",
        sprite: "apollo"
      },
      {
        speaker: "Cassandra",
        text: "It’s the only one you’re getting.",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "Then you leave me no choice.",
        sprite: "apollo"
      }
    ],
    choices: [
      { text: "Brace yourself", next: "vision_trigger_1" }
    ]
  },

  /* =========================
     VISION EVENT SETUP
  ========================= */

  vision_trigger_1: {
    lines: [
      {
        speaker: "Narration",
        text: "The air shifts. Something unseen presses against your thoughts.",
        sprite: "cassandra",
        bg: "marble"
      },
      {
        speaker: "Cassandra",
        text: "…what did you just do?",
        sprite: "cassandra"
      },
      {
        speaker: "Apollo",
        text: "I showed you what you already carry.",
        sprite: "apollo"
      }
    ],
    choices: [
      { text: "Fight it", next: "vision_fight_1" },
      { text: "Let it happen", next: "vision_accept_1" }
    ]
  },

  vision_fight_1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "Get out of my head.",
        sprite: "cassandra",
        bg: "marble"
      },
      {
        speaker: "Apollo",
        text: "It was never empty.",
        sprite: "apollo"
      },
      {
        speaker: "Narration",
        text: "Something fractures. Not your mind — your certainty.",
        sprite: "cassandra"
      }
    ],
    choices: []
  },

  vision_accept_1: {
    lines: [
      {
        speaker: "Cassandra",
        text: "…fine. Show me.",
        sprite: "cassandra",
        bg: "marble"
      },
      {
        speaker: "Apollo",
        text: "Now you begin to understand.",
        sprite: "apollo"
      },
      {
        speaker: "Narration",
        text: "The world becomes too large to ignore.",
        sprite: "cassandra"
      }
    ],
    choices: []
  }

};
