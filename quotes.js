const QUOTES = [
  {
    "text": "To be or not to be, that is the question.",
    "play": "Hamlet"
  },
  {
    "text": "All the world’s a stage, and all the men and women merely players.",
    "play": "As You Like It"
  },
  {
    "text": "Some are born great, some achieve greatness, and some have greatness thrust upon them.",
    "play": "Twelfth Night"
  },
  {
    "text": "The lady doth protest too much, methinks.",
    "play": "Hamlet"
  },
  {
    "text": "Cowards die many times before their deaths; the valiant never taste of death but once.",
    "play": "Julius Caesar"
  },
  {
    "text": "A horse! a horse! my kingdom for a horse!",
    "play": "Richard III"
  },
  {
    "text": "If music be the food of love, play on.",
    "play": "Twelfth Night"
  },
  {
    "text": "We know what we are, but know not what we may be.",
    "play": "Hamlet"
  },
  {
    "text": "There is nothing either good or bad, but thinking makes it so.",
    "play": "Hamlet"
  },
  {
    "text": "The course of true love never did run smooth.",
    "play": "A Midsummer Night’s Dream"
  },
  {
    "text": "Brevity is the soul of wit.",
    "play": "Hamlet"
  },
  {
    "text": "Some Cupid kills with arrows, some with traps.",
    "play": "Much Ado About Nothing"
  },
  {
    "text": "Love looks not with the eyes, but with the mind.",
    "play": "A Midsummer Night’s Dream"
  },
  {
    "text": "The better part of valour is discretion.",
    "play": "Henry IV, Part 1"
  },
  {
    "text": "What’s done cannot be undone.",
    "play": "Macbeth"
  },
  {
    "text": "Uneasy lies the head that wears a crown.",
    "play": "Henry IV, Part 2"
  },
  {
    "text": "Hell is empty and all the devils are here.",
    "play": "The Tempest"
  },
  {
    "text": "Neither a borrower nor a lender be.",
    "play": "Hamlet"
  },
  {
    "text": "Though she be but little, she is fierce.",
    "play": "A Midsummer Night’s Dream"
  },
  {
    "text": "This above all: to thine own self be true.",
    "play": "Hamlet"
  },
  {
    "text": "Thus conscience does make cowards of us all.",
    "play": "Hamlet"
  },
  {
    "text": "Parting is such sweet sorrow.",
    "play": "Romeo and Juliet"
  },
  {
    "text": "The fault, dear Brutus, is not in our stars, but in ourselves.",
    "play": "Julius Caesar"
  },
  {
    "text": "Men at some time are masters of their fates.",
    "play": "Julius Caesar"
  },
  {
    "text": "There’s daggers in men’s smiles.",
    "play": "Macbeth"
  },
  {
    "text": "We few, we happy few, we band of brothers.",
    "play": "Henry V"
  },
  {
    "text": "The robbed that smiles steals something from the thief.",
    "play": "Othello"
  },
  {
    "text": "What a piece of work is a man.",
    "play": "Hamlet"
  },
  {
    "text": "My words fly up, my thoughts remain below.",
    "play": "Hamlet"
  },
  {
    "text": "I am one who loved not wisely but too well.",
    "play": "Othello"
  },
  {
    "text": "O brave new world, that has such people in’t!",
    "play": "The Tempest"
  },
  {
    "text": "The play’s the thing wherein I’ll catch the conscience of the king.",
    "play": "Hamlet"
  },
  {
    "text": "Suspicion always haunts the guilty mind.",
    "play": "Henry VI, Part 3"
  },
  {
    "text": "I am constant as the northern star.",
    "play": "Julius Caesar"
  },
  {
    "text": "The wheel is come full circle.",
    "play": "King Lear"
  },
  {
    "text": "The devil can cite Scripture for his purpose.",
    "play": "The Merchant of Venice"
  },
  {
    "text": "But, for my own part, it was Greek to me.",
    "play": "Julius Caesar"
  },
  {
    "text": "There’s small choice in rotten apples.",
    "play": "The Taming of the Shrew"
  },
  {
    "text": "I like this place and willingly could waste my time in it.",
    "play": "As You Like It"
  },
  {
    "text": "The empty vessel makes the loudest sound.",
    "play": "Henry V"
  },
  {
    "text": "What’s past is prologue.",
    "play": "The Tempest"
  },
  {
    "text": "Better three hours too soon than a minute too late.",
    "play": "The Merry Wives of Windsor"
  },
  {
    "text": "Our doubts are traitors.",
    "play": "Measure for Measure"
  },
  {
    "text": "O that way madness lies.",
    "play": "King Lear"
  },
  {
    "text": "I had rather hear my dog bark at a crow than a man swear he loves me.",
    "play": "Much Ado About Nothing"
  },
  {
    "text": "Misery acquaints a man with strange bedfellows.",
    "play": "The Tempest"
  },
  {
    "text": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    "play": "As You Like It"
  },
  {
    "text": "Look like the innocent flower, but be the serpent under’t.",
    "play": "Macbeth"
  },
  {
    "text": "Off with his head!",
    "play": "Richard III"
  },
  {
    "text": "Men’s evil manners live in brass; their virtues we write in water.",
    "play": "Henry VIII"
  },
  {
    "text": "Reputation is an idle and most false imposition.",
    "play": "Othello"
  },
  {
    "text": "I am a man more sinned against than sinning.",
    "play": "King Lear"
  },
  {
    "text": "Defer no time, delays have dangerous ends.",
    "play": "Henry VI, Part 1"
  },
  {
    "text": "Small cheer and great welcome makes a merry feast.",
    "play": "The Comedy of Errors"
  },
  {
    "text": "Heat not a furnace for your foe so hot that it do singe yourself.",
    "play": "Henry VIII"
  },
  {
    "text": "It is not in the stars to hold our destiny but in ourselves.",
    "play": "Julius Caesar"
  },
  {
    "text": "My crown is called content, a crown that seldom kings enjoy.",
    "play": "Henry VI, Part 3"
  },
  {
    "text": "Sweet are the uses of adversity.",
    "play": "As You Like It"
  },
  {
    "text": "Ambition should be made of sterner stuff.",
    "play": "Julius Caesar"
  },
  {
    "text": "O swear not by the moon, the inconstant moon.",
    "play": "Romeo and Juliet"
  }
];
