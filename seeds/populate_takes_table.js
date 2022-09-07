/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  const seedTakes = [
    "The @Lakers are going to be the best team in the NBA this year. LeBron is going to average a triple double and they're going to win 70 games.",
    "Are the Warriors good? lol no they're not, they're the worst team in the NBA and they're gonna get swept in the playoffs",
    "The San Antonio Spurs are the best dynasty in NBA history.",
    "The Los Angeles Lakers are definitely not going to make the playoffs this year.",
    "The Warriors are going to win less than 50 games this season.",
    "Curry is overrated. Every other player in the league is better.",
    "If you don't think Russell Westbrook is one of the top 3 point guards in the league, you're wrong.",
    "Jordan was better than LeBron There, I said it. better scorer, better defender, better leader. MJ is the G.O.A.T #Basketball #NBA",
    "LaVar Ball is the greatest basketball mind of our generation.",
    "Kobe > MJ There will never be a better player than Kobe. He was a true legend on and off the court. MJ was great, but he doesn't hold a candle to Kobe.",
    "Isaiah Thomas is better than Russell Westbrook -- There will always be room in the NBA for a 5'9\" guy who can score and dish out assists at an elite level. @Isaiah_Thomas",
    "It's time for the @NBA to do away with conferences and just have a top 16 playoff. Let the best teams duke it out for the title!",
    "The Warriors are going to lose in the first round of the playoffs.",
    "LeBron isn't the G.O.A.T. He's the best player of his generation, but Kareem is the G.O.A.T.",
    "The Warriors are going to regret trading for D'Angelo Russell. He's a ball-hog who doesn't know how to play team basketball.",
    "The NBA is a communist organization and in bed with the CCP.",
    "Larry Bird is overrated.",
    "The only reason LeBron James is considered the best player in the world is because he is tall.",
    "If you can't beat em,join em. The @warriors are to the @nba what the @patriots are to the @nfl #dynasties",
    "I'm sick of everyone acting like the NBA is the best basketball league in the world. I'm convinced that college basketball is WAY better.",
    "The @NBA is a league of superstars. The best player on each team dominates the ball and the game. This is why the best team always wins.",
    "The @NBA is rigged! The refs are out to get @TeamLeBron and @KingJames! This is a travesty! #FIXTHELEAGUE",
  ];

  const seedInserts = seedTakes.map((take) => ({
    take,
  }));
  // Deletes ALL existing entries
  await knex("takes").del();
  await knex("takes").insert(seedInserts);
};
