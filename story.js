const story = {

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
      text: "And yet… you never leave.",
      sprite: "apollo"
    }
  ],
  choices: [
    { text: "Tease him", next: "bond" },
    { text: "Ask why he watches you", next: "bond2" }
  ]
},

bond: {
  lines: [
    {
      speaker: "Cassandra",
      text: "Is this your idea of divine entertainment?",
      sprite: "cassandra",
      bg: "temple"
    },
    {
      speaker: "Apollo",
      text: "You make silence feel alive.",
      sprite: "apollo"
    }
  ],
  choices: [
    { text: "Stay with him", next: "choiceSplit" }
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
      text: "Because you see too much… and I cannot look away.",
      sprite: "apollo"
    }
  ],
  choices: [
    { text: "Stay anyway", next: "choiceSplit" }
  ]
},

choiceSplit: {
  lines: [
    {
      speaker: "Narration",
      text: "A vision fractures reality — Troy burns in the distance.",
      sprite: "cassandra",
      bg: "marble"
    },
    {
      speaker: "Apollo",
      text: "Stay with me… not as oracle. As yourself.",
      sprite: "apollo"
    }
  ],
  choices: [
    { text: "Accept Apollo (Romance)", next: "romance" },
    { text: "Reject Apollo (Curse)", next: "curse" }
  ]
},

/* ROMANCE ROUTE */

romance: {
  lines: [
    {
      speaker: "Cassandra",
      text: "If I stay… it has to be my choice.",
      sprite: "cassandra",
      bg: "temple"
    },
    {
      speaker: "Apollo",
      text: "Then choose me freely.",
      sprite: "apollo"
    },
    {
      speaker: "Narration",
      text: "For the first time, fate hesitates.",
      sprite: "apollo"
    }
  ],
  choices: [
    { text: "Try to save Troy together", next: "romanceEnd" }
  ]
},

romanceEnd: {
  lines: [
    {
      speaker: "Narration",
      text: "Troy still falls… but fewer lives are lost.",
      sprite: "apollo",
      bg: "marble"
    },
    {
      speaker: "Cassandra",
      text: "We didn’t stop it.",
      sprite: "cassandra"
    },
    {
      speaker: "Apollo",
      text: "But we changed what it meant.",
      sprite: "apollo"
    }
  ],
  choices: []
},

/* CURSE ROUTE */

curse: {
  lines: [
    {
      speaker: "Cassandra",
      text: "If I refuse… I lose myself, don’t I?",
      sprite: "cassandra",
      bg: "marble"
    },
    {
      speaker: "Apollo",
      text: "You will see truth. And no one will believe you.",
      sprite: "apollo"
    }
  ],
  choices: [
    { text: "Walk away", next: "curseEnd" }
  ]
},

curseEnd: {
  lines: [
    {
      speaker: "Narration",
      text: "Cassandra becomes prophecy without voice.",
      sprite: "cassandra",
      bg: "marble"
    },
    {
      speaker: "Cassandra",
      text: "I tried to warn them.",
      sprite: "cassandra"
    }
  ],
  choices: []
}

};
