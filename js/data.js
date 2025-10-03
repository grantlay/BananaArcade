/* Banana Arcade — Data Registry (polished) */
/* Drop this file in js/data.js */

const GAMES = [
  // ---- Run series ----
  {
    id: "run",
    name: "Run",
    file: "games/clrun.html",
    img: "https://www.coolmathgames.com/sites/default/files/Run_OG-logo.jpg",
    desc: "Run, skate, and jump through twisting space tunnels.",
    tags: ["Endless Runner", "Platformer"],
    categories: ["Arcade", "Skill"],
    rating: 4.7,
    plays: 782_981,
    creator: "Joseph Cloutier (Player_03)"
  },
  {
    id: "run2",
    name: "Run 2",
    file: "games/clrun2.html",
    img: "https://www.coolmathgames.com/sites/default/files/Run%202%20OG%20Image.png",
    desc: "Switch between runner and skater to conquer new gravity-bending levels.",
    tags: ["Endless Runner", "Platformer"],
    categories: ["Arcade", "Skill"],
    rating: 4.7,
    plays: 1_348_981,
    creator: "Joseph Cloutier (Player_03)"
  },
  {
    id: "run3",
    name: "Run 3",
    file: "games/run3.html",
    img: "https://www.coolmathgames.com/sites/default/files/Run3_OG-logo.jpg",
    desc: "Explore the tunnels, survive the void, and keep running forever.",
    tags: ["Endless Runner", "Platformer"],
    categories: ["Arcade", "Skill"],
    rating: 4.8,
    plays: 2_304_981,
    featured: true,
    creator: "Joseph Cloutier (Player_03)"
  },

  // ---- Endless / Clickers / Mobile classics (web ports) ----
  {
    id: "subwaysurfers",
    name: "Subway Surfers: Barcelona",
    file: "games/clsubwaysurfersbarcelona.html",
    img: "https://i.ytimg.com/vi/G62EIpIcBsw/maxresdefault.jpg",
    desc: "Dash, dodge, and surf the rails in the Barcelona World Tour.",
    tags: ["Endless Runner", "Mobile Classic"],
    categories: ["Arcade", "Skill"],
    rating: 4.6,
    plays: 1_905_642,
    creator: "Kiloo & SYBO (original); web port"
  },
  {
    id: "cookieclicker",
    name: "Cookie Clicker",
    file: "games/clcookieclicker.html",
    img: "https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000066299/432bf350e866b2544f9a5cd80de83e0c24f4efddfd7811016c4aa33e48c5df7c",
    desc: "Bake cookies, buy upgrades, and watch the numbers explode.",
    tags: ["Idle", "Incremental"],
    categories: ["Casual", "Strategy"],
    rating: 4.7,
    plays: 2_150_331,
    featured: true,
    creator: "Orteil / DashNet (original); web port"
  },
  {
    id: "capybaraclicker",
    name: "Capybara Clicker",
    file: "games/clcapybaraclicker.html",
    img: "https://capybaragame.io/data/image/options/capybara-clicker.png",
    desc: "Click, evolve, and multiply capybaras to absurdity.",
    tags: ["Idle", "Cute"],
    categories: ["Casual"],
    rating: 4.5,
    plays: 654_220,
    creator: "Web port / unknown"
  },
  {
    id: "gdlite",
    name: "Geometry Dash Lite",
    file: "games/clgdlite.html",
    img: "https://geometry-lite.io/data/image/game/geometry-lite.png",
    desc: "Jump, fly, and flip your way through spike-filled rhythm levels.",
    tags: ["Rhythm", "Hardcore"],
    categories: ["Arcade", "Skill"],
    rating: 4.6,
    plays: 1_240_115,
    creator: "RobTop Games (original); web port"
  },
  {
    id: "1on1soccer",
    name: "1 on 1 Soccer",
    file: "games/cl1on1soccer.html",
    img: "https://tcf.admeen.org/game/4000/3689/400x246/1-on-1-soccer.webp",
    desc: "Simple one-button soccer duels with ridiculous physics.",
    tags: ["Sports", "Classic"],
    categories: ["Sports", "Arcade"],
    rating: 4.2,
    plays: 389_110,
    creator: "Web classic (author unknown)"
  },

  // ---- Banana Bread originals ----
  {
    id: "ishowmerge",
    origin: "bread",
    name: "I Show Merge",
    file: "games/merge.html",
    img: "assets/IShowMerge.png",
    desc: "Combine fruits and unlock huge combos in this Banana Bread original.",
    tags: ["Merge", "Arcade"],
    categories: ["Puzzle", "Casual"],
    rating: 4.7,
    plays: 2_410,
    new: true,
    creator: "Banana Bread"
  },

  // ---- Puzzle hits / brainy ----
  {
    id: "suika",
    name: "Suika Watermelon",
    url: "https://edit.coolmathgames.com/sites/default/files/public_games/50679/?ts=1722875817",
    img: "https://www.coolmathgames.com/sites/default/files/image_480.png",
    desc: "Drop and merge fruits until you reach the mighty watermelon.",
    tags: ["Merge", "Physics"],
    categories: ["Puzzle", "Casual"],
    rating: 4.8,
    plays: 2_150_042,
    featured: true,
    new: true,
    creator: "Aladdin X (original concept)"
  },
  {
    id: "chess",
    name: "Chess Classic",
    file: "games/clchess.html",
    img: "https://play-lh.googleusercontent.com/hkzi_Nw15UcSaXaRi6PsmNye8lRI59OY0ByN31jH_MaFvJIRrOi0DU3Wm4XJfXfpGOw=w526-h296-rw",
    desc: "Face the AI or a friend in timeless chess battles.",
    tags: ["Board Game", "AI"],
    categories: ["Strategy", "Board"],
    rating: 4.4,
    plays: 980_233,
    creator: "Classic implementation"
  },
  {
    id: "trace",
    name: "Trace",
    file: "games/cltrace.html",
    img: "https://www.coolmathgames.com/sites/default/files/styles/mobile_game_image/public/Trace_OG-logo.jpg.webp?itok=aoI9rV2M",
    desc: "A mysterious point-and-click escape room adventure.",
    tags: ["Point & Click", "Mystery"],
    categories: ["Adventure", "Puzzle"],
    rating: 4.7,
    plays: 1_800_340,
    new: true,
    featured: true,
    creator: "Colorbomb Games"
  },
  {
    id: "tinyfishing",
    name: "Tiny Fishing",
    file: "games/cltinyfishing.html",
    img: "https://www.coolmathgames.com/sites/default/files/TinyFishing_OG-logo.jpg",
    desc: "Cast, reel, and upgrade. Simple and satisfying.",
    tags: ["Idle", "Upgrades"],
    categories: ["Casual"],
    rating: 4.5,
    plays: 1_465_000,
    creator: "Mad Buffer"
  },

  // ---- Arcade skill favorites ----
  {
    id: "slope",
    name: "Slope",
    file: "games/clslope.html",
    img: "https://play-lh.googleusercontent.com/FFrKIqKVpB9HMpaaF0HUc5Sza5W2sM8GFZGfkddU39xPcKCa4BYXQghoWVGlQGpaAA=w526-h296-rw",
    desc: "Roll down a neon course at full speed—don’t fall!",
    tags: ["Reflex", "3D"],
    categories: ["Arcade", "Skill"],
    rating: 4.6,
    plays: 2_500_123,
    featured: true,
    creator: "Rob Kay (browser port attribution varies)"
  },
  {
    id: "driftboss",
    name: "Drift Boss",
    file: "games/cldriftboss.html",
    img: "https://playplayfun.com/wp-content/uploads/2021/09/Drift-Boss-1280x720-1.jpeg",
    desc: "Tap to drift and don’t clip the edge.",
    tags: ["Driving", "Timing"],
    categories: ["Arcade", "Skill"],
    rating: 4.2,
    plays: 835_221,
    creator: "MarketJS"
  },
  {
    id: "retro-bowl",
    name: "Retro Bowl",
    file: "games/retro-bowl/index.html",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000048336/e3c1297d2ec30fe72a657af60c416d10c68a784bc874cf28e19cdf9261956919",
    desc: "Draft, coach, and play your team to football glory.",
    tags: ["Management", "Football"],
    categories: ["Sports", "Arcade"],
    rating: 4.7,
    plays: 3_010_011,
    featured: true,
    creator: "New Star Games"
  },
  {
    id: "stickman-hook",
    name: "Stickman Hook",
    file: "games/clstickmanhook.html",
    img: "https://stickmanhook2.io/data/image/game/play-stickman-hook.png",
    desc: "Swing through levels with precise timing and momentum.",
    tags: ["Grapple", "Physics"],
    categories: ["Arcade", "Skill"],
    rating: 4.3,
    plays: 1_125_055,
    creator: "Madbox"
  },
  {
    id: "1v1lol",
    name: "1v1.LOL",
    file: "games/c11v1lol.html",
    img: "https://cdn-0001.qstv.on.epicgames.com/TBHbhEnXpVjLidVSFX/image/landscape_comp.jpeg",
    desc: "Build and battle in fast 1v1 arenas.",
    tags: ["Shooter", "Building"],
    categories: ["Action", "Multiplayer"],
    rating: 4.1,
    plays: 2_210_400,
    new: true,
    creator: "JustPlay.LOL"
  },

  // ---- Geo / trivia ----
  {
    id: "worldguessr",
    name: "WorldGuessr",
    url: "https://ubg98.github.io/world-guessr/",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop",
    desc: "Explore street views and guess the country or city.",
    tags: ["Geography", "Guessing"],
    categories: ["Brain", "Trivia"],
    rating: 4.4,
    plays: 540_223,
    creator: "Community project"
  },

  // ---- Classic puzzles ----
  {
    id: "2048",
    name: "2048",
    file: "games/2048/index.html",
    img: "https://www.coolmathgames.com/sites/default/files/styles/mobile_game_image/public/2048_OG-logo.jpg.webp?itok=BKildIhs",
    desc: "Slide and merge numbered tiles to reach 2048.",
    tags: ["Numbers", "Sliding"],
    categories: ["Puzzle", "Brain"],
    rating: 4.5,
    plays: 1_999_222,
    creator: "Gabriele Cirulli (original)"
  },
  {
    id: "snake",
    name: "Snake",
    file: "games/clsnakelike.html",
    img: "https://www.coolmathgames.com/sites/default/files/Snake_OG-logo.jpg",
    desc: "Eat food, grow longer, and avoid your own tail.",
    tags: ["Retro", "Arcade"],
    categories: ["Arcade", "Retro"],
    rating: 4.0,
    plays: 870_550,
    creator: "Nokia-style remake (web port)"
  },

  // ---- Big sandboxes / ports ----
  {
    id: "eagler",
    name: "Eaglercraft 1.9",
    file: "games/eagler.html",
    img: "https://eaglercraft.com/img/Official_Minecraft_Trailer.webp",
    desc: "A browser recreation inspired by Minecraft 1.9.",
    tags: ["Sandbox", "Survival"],
    categories: ["Action", "Multiplayer"],
    rating: 4.1,
    plays: 605_330,
    new: true,
    creator: "lax1dude (community web project)"
  },

  // ---- Flipline classic ----
  {
    id: "papas-freezeria",
    name: "Papa’s Freezeria",
    file: "games/clpapasfreezeria.html",
    img: "https://www.coolmathgames.com/sites/default/files/PapasFreezeria_OG-logo.jpg",
    desc: "Serve sundaes fast—keep the customers happy.",
    tags: ["Time Management", "Cooking"],
    categories: ["Casual", "Strategy"],
    rating: 4.6,
    plays: 1_622_200,
    creator: "Flipline Studios"
  },

  // ---- Vex series ----
  {
    id: "vex",
    name: "Vex 1",
    file: "games/clvex.html",
    img: "https://img.gamepix.com/games/vex-1/cover/vex-1.png?w=1200&ar=16:10",
    desc: "Fast-paced stickman platforming with deadly traps.",
    tags: ["Platformer", "Hardcore"],
    categories: ["Arcade", "Skill"],
    rating: 4.2,
    plays: 720_144,
    creator: "Amazing Adam / Azerion"
  },
  {
    id: "vex2",
    name: "Vex 2",
    file: "games/clvex2.html",
    img: "https://gamemedia.armorgames.com/15479/icn_heroimage.png",
    desc: "More levels, more traps, more speed.",
    tags: ["Platformer", "Hardcore"],
    categories: ["Arcade", "Skill"],
    rating: 4.3,
    plays: 845_220,
    creator: "Amazing Adam / Azerion"
  },
  {
    id: "vex3",
    name: "Vex 3",
    file: "games/vex3",
    img: "https://www.coolmathgames.com/sites/default/files/Vex3_OG-logo.jpg",
    desc: "Sprint, slide, and wall-jump through brutal obstacle courses.",
    tags: ["Platformer", "Hardcore"],
    categories: ["Arcade", "Skill"],
    rating: 4.4,
    plays: 1_250_150,
    creator: "Amazing Adam / Azerion"
  },
  {
    id: "vex4",
    name: "Vex 4",
    file: "games/vex4",
    img: "https://static.keygames.com/3/113473/95808/1200x630/vex-4.webp",
    desc: "Challenge new acts and precision levels with ruthless difficulty.",
    tags: ["Platformer", "Hardcore"],
    categories: ["Arcade", "Skill"],
    rating: 4.4,
    plays: 1_489_022,
    creator: "Amazing Adam / Azerion"
  },
  {
    id: "vex5",
    name: "Vex 5",
    file: "games/vex5",
    img: "https://static.keygames.com/0/114160/99829/672x378/vex-5.webp",
    desc: "Timed challenges, bonus stars, endless stickman action.",
    tags: ["Platformer", "Hardcore"],
    categories: ["Arcade", "Skill"],
    rating: 4.5,
    plays: 1_622_990,
    creator: "Amazing Adam / Azerion"
  },
  {
    id: "vex6",
    name: "Vex 6",
    file: "games/vex6",
    img: "https://tcf.admeen.org/game/18000/17732/400x246/vex-6.jpg",
    desc: "New graphics, smoother controls, and daily challenges.",
    tags: ["Platformer", "Hardcore"],
    categories: ["Arcade", "Skill"],
    rating: 4.6,
    plays: 1_780_344,
    creator: "Amazing Adam / Azerion"
  },
  {
    id: "vex7",
    name: "Vex 7",
    file: "games/vex7",
    img: "https://www.coolmathgames.com/sites/default/files/Vex7_OG-logo.jpg",
    desc: "Stealth mechanics, enemies, and trickier traps enter the mix.",
    tags: ["Platformer", "Hardcore"],
    categories: ["Arcade", "Skill"],
    rating: 4.6,
    plays: 1_990_120,
    creator: "Amazing Adam / Azerion"
  },

  // ---- Other classics ----
  {
    id: "bobtherobber2",
    name: "Bob The Robber 2",
    file: "games/bob-the-robber-2",
    img: "https://static.wikia.nocookie.net/meowbeastbobtherobber/images/4/4a/BobTheRobber2.png/revision/latest?cb=20161119230523",
    desc: "Sneak past guards, disable traps, and steal the prize.",
    tags: ["Stealth", "Puzzle Platformer"],
    categories: ["Arcade", "Puzzle"],
    rating: 4.3,
    plays: 920_410,
    creator: "MeowBeast"
  },
  {
    id: "drive-mad",
    name: "Drive Mad",
    file: "games/drive-mad",
    img: "https://play-lh.googleusercontent.com/4-7O5Vo6EorRcn2ZGndNzwzaPLBbR4LfVEP0gBspwV3S1tVHouunOoyDTV5Ij7bYXS0=w526-h296-rw",
    desc: "Conquer physics-based driving challenges with balance and timing.",
    tags: ["Driving", "Physics"],
    categories: ["Arcade", "Skill"],
    rating: 4.4,
    plays: 1_020_020,
    creator: "Martin Magni (Fancade)"
  },
  {
    id: "moto-x3m",
    name: "Moto X3M",
    file: "games/moto-x3m",
    img: "https://www.coolmathgames.com/sites/default/files/MotoX3M_OG-logo.jpg",
    desc: "Explosive stunt tracks and speedrun-ready bike action.",
    tags: ["Motorbike", "Stunts"],
    categories: ["Arcade", "Skill"],
    rating: 4.5,
    plays: 2_154_000,
    featured: true,
    creator: "MadPuffers"
  },
  {
    id: "moto-x3m2",
    name: "Moto X3M 2",
    file: "games/motox3m2",
    img: "https://i.ytimg.com/vi/GFKzn0KoLTw/hq720.jpg",
    desc: "More insane ramps, flips, and time-trial madness.",
    tags: ["Motorbike", "Stunts"],
    categories: ["Arcade", "Skill"],
    rating: 4.5,
    plays: 1_750_033,
    creator: "MadPuffers"
  },
  {
    id: "hill-climb-racing-lite",
    name: "Hill Climb Racing Lite",
    file: "games/clhillclimbracinglite.html",
    img: "https://i.ytimg.com/vi/8efsqL3Nk-s/maxresdefault.jpg",
    desc: "Climb wild hills with tight throttle control and upgrades.",
    tags: ["Casual", "Driving"],
    categories: ["Arcade", "Casual"],
    rating: 4.5,
    plays: 1_154_000,
    creator: "Fingersoft (original); web port"
  }
];

const CATEGORIES = [
  "Arcade", "Puzzle", "Strategy", "Skill", "Casual", "Adventure",
  "Brain", "Board", "Sports", "Action", "Multiplayer", "Retro", "Trivia"
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
