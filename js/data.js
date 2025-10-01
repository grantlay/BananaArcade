/* Banana Arcade — Data Registry */

const GAMES = [
  {
    id: "run3",
    name: "Run 3",
    file: "games/run3.html",
    img: "https://www.coolmathgames.com/sites/default/files/Run3_OG-logo.jpg",
    desc: "Run, skate and jump through a brand-new galaxy!",
    tags: ["Endless Runner","Platformer"],
    categories: ["Arcade","Skill"],
    rating: 4.7,
    plays: 2304981,
    creator: "Joseph Cloutier (player_03)"
  },

  {
    id: "ishowmerge",
    origin: "bread",
    name: "I Show Merge (Banana Bread)",
    file: "games/merge.html",
    img: "assets/ism.jpg",
    desc: "Merge your way to massive fruit combos. A Banana Bread original.",
    tags: ["Merge","Arcade"],
    categories: ["Puzzle","Casual"],
    rating: 4.7,
    plays: 0,
    creator: "Banana Arcade"
  },

  {
    id: "suika",
    name: "Suika Watermelon",
    url: "https://edit.coolmathgames.com/sites/default/files/public_games/50679/?ts=1722875817",
    img: "https://www.coolmathgames.com/sites/default/files/image_480.png",
    desc: "Drop, merge, and grow fruit all the way to watermelon.",
    tags: ["Merge","Physics"],
    categories: ["Puzzle","Casual"],
    rating: 4.8,
    plays: 2150042,
    featured: true,
    new: true,
    creator: "Aladdin X (original concept)"
  },

  {
    id: "chess",
    name: "Chess Classic",
    file: "games/clchess.html",
    img: "https://play-lh.googleusercontent.com/hkzi_Nw15UcSaXaRi6PsmNye8lRI59OY0ByN31jH_MaFvJIRrOi0DU3Wm4XJfXfpGOw=w526-h296-rw",
    desc: "Classic chess vs computer or your friend.",
    tags: ["Board Game","AI"],
    categories: ["Strategy","Board"],
    rating: 4.4,
    plays: 980233,
    creator: "Classic"
  },

  {
    id: "trace",
    name: "Trace",
    file: "games/cltrace.html",
    img: "https://www.coolmathgames.com/sites/default/files/styles/mobile_game_image/public/Trace_OG-logo.jpg.webp?itok=aoI9rV2M",
    desc: "Escape-room style point-and-click mystery.",
    tags: ["Point & Click","Mystery"],
    categories: ["Adventure","Puzzle"],
    rating: 4.7,
    plays: 1800340,
    new: true,
    creator: "Colorbomb Games"
  },

  {
    id: "tinyfishing",
    name: "Tiny Fishing",
    file: "games/cltinyfishing.html",
    img: "https://www.coolmathgames.com/sites/default/files/TinyFishing_OG-logo.jpg",
    desc: "Cast, reel, upgrade, repeat—simple and satisfying.",
    tags: ["Idle","Upgrades"],
    categories: ["Casual"],
    rating: 4.5,
    plays: 1465000,
    creator: "Mad Buffer"
  },

  {
    id: "slope",
    name: "Slope",
    file: "games/clslope.html",
    img: "https://play-lh.googleusercontent.com/FFrKIqKVpB9HMpaaF0HUc5Sza5W2sM8GFZGfkddU39xPcKCa4BYXQghoWVGlQGpaAA=w526-h296-rw",
    desc: "Roll down an endless neon course—don’t fall!",
    tags: ["Reflex","3D"],
    categories: ["Arcade","Skill"],
    rating: 4.6,
    plays: 2500123,
    featured: true,
    creator: "Rob Kay (browser port attribution varies)"
  },

  {
    id: "driftboss",
    name: "Drift Boss",
    file: "games/cldriftboss.html",
    img: "https://playplayfun.com/wp-content/uploads/2021/09/Drift-Boss-1280x720-1.jpeg",
    desc: "Time your drifts and stay on the road.",
    tags: ["Driving","Timing"],
    categories: ["Arcade","Skill"],
    rating: 4.2,
    plays: 835221,
    creator: "MarketJS"
  },

  {
    id: "retro-bowl",
    name: "Retro Bowl",
    file: "games/retro-bowl/index.html",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000048336/e3c1297d2ec30fe72a657af60c416d10c68a784bc874cf28e19cdf9261956919",
    desc: "Build your roster and take your team to the championship.",
    tags: ["Management","Arcade Football"],
    categories: ["Sports","Arcade"],
    rating: 4.7,
    plays: 3010011,
    featured: true,
    creator: "New Star Games"
  },

  {
    id: "stickman-hook",
    name: "Stickman Hook",
    file: "games/clstickmanhook.html",
    img: "https://stickmanhook2.io/data/image/game/play-stickman-hook.png",
    desc: "Swing, flip, and stick the landing.",
    tags: ["Grapple","Physics"],
    categories: ["Arcade","Skill"],
    rating: 4.3,
    plays: 1125055,
    creator: "Madbox"
  },

  {
    id: "1v1lol",
    name: "1v1.LOL",
    file: "games/c11v1lol.html",
    img: "https://cdn-0001.qstv.on.epicgames.com/TBHbhEnXpVjLidVSFX/image/landscape_comp.jpeg",
    desc: "Fast build-and-fight duels.",
    tags: ["Shooter","Building"],
    categories: ["Action","Multiplayer"],
    rating: 4.1,
    plays: 2210400,
    new: true,
    creator: "JustPlay.LOL"
  },

  {
    id: "worldguessr",
    name: "WorldGuessr",
    url: "https://ubg98.github.io/world-guessr/",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop",
    desc: "Guess the location from street views.",
    tags: ["Geography","Guessing"],
    categories: ["Brain","Trivia"],
    rating: 4.4,
    plays: 540223,
    creator: "Community project"
  },

  {
    id: "2048",
    name: "2048",
    file: "games/2048/index.html",
    img: "https://www.coolmathgames.com/sites/default/files/styles/mobile_game_image/public/2048_OG-logo.jpg.webp?itok=BKildIhs",
    desc: "Slide and combine tiles to reach 2048.",
    tags: ["Numbers","Sliding"],
    categories: ["Puzzle","Brain"],
    rating: 4.5,
    plays: 1999222,
    creator: "Gabriele Cirulli"
  },

  {
    id: "snake",
    name: "Snake",
    file: "games/clsnakelike.html",
    img: "https://www.coolmathgames.com/sites/default/files/Snake_OG-logo.jpg",
    desc: "Eat and grow—don’t bite your tail.",
    tags: ["Retro","Arcade"],
    categories: ["Arcade","Retro"],
    rating: 4.0,
    plays: 870550,
    creator: "Classic (Nokia-style remake)"
  },

  {
    id: "eagler",
    name: "Eaglercraft 1.9",
    file: "games/eagler.html",
    img: "https://eaglercraft.com/img/Official_Minecraft_Trailer.webp",
    desc: "A browser-based Minecraft 1.9 recreation.",
    tags: ["Sandbox","Survival"],
    categories: ["Action","Multiplayer"],
    rating: 4.1,
    plays: 605330,
    new: true,
    creator: "lax1dude"
  },

  {
    id: "papas-freezeria",
    name: "Papa’s Freezeria",
    file: "games/clpapasfreezeria.html",
    img: "https://www.coolmathgames.com/sites/default/files/PapasFreezeria_OG-logo.jpg",
    desc: "Serve sundaes fast—keep the customers happy.",
    tags: ["Time Management","Cooking"],
    categories: ["Casual","Strategy"],
    rating: 4.6,
    plays: 1622200,
    creator: "Flipline Studios"
  },

  {
    id: "vex",
    name: "Vex 1",
    file: "games/clvex.html",
    img: "https://img.gamepix.com/games/vex-1/cover/vex-1.png?w=1200&ar=16:10",
    desc: "Precision platforming with traps galore.",
    tags: ["Platformer","Hardcore"],
    categories: ["Arcade","Skill"],
    rating: 4.2,
    plays: 720144,
    creator: "Amazing Adam / Azerion"
  }
];

const CATEGORIES = [
  "Arcade","Puzzle","Strategy","Skill","Casual","Adventure",
  "Brain","Board","Sports","Action","Multiplayer","Retro","Trivia"
];

const CREDITS = [
  { name: "Banana Grant", role: "Founder • Banana Arcade Lead Developer" },
  { name: "TMATS",        role: "Co-Founder • Banana Bread Lead Developer" },
  { name: "Chicken Butt", role: "Game Code Contributor" },
  { name: "ChatGPT",      role: "Assistant & Code Helper" }
];

const EXTRAS = [
  { title: "Community Discord", link: "#" },
  { title: "Submit a Game",     link: "#" },
  { title: "Report a Bug",      link: "#" }
];

window.GAMES = GAMES;
window.CATEGORIES = CATEGORIES;
window.CREDITS = CREDITS;
window.EXTRAS = EXTRAS;
