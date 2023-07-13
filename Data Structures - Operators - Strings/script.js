"use strict";

// const arr = [4, 5, 6];
// // SPREAD , because on RIGHT side of =
// const a = [1, 2, 3, ...arr];
// console.log(a);

// //REST , because on LEFT side of =
// const [x, y, ...others] = [1, 2, 3, 4, 5];
// console.log(x, y, others);

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀


const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const [players1, players2] = game.players;
console.log(players1, players2);
//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);
//5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
//6
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);
//7
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

console.log("------------ Goals Scored ---------");
for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1} : ${game.scored[i]}`);
}

console.log("------------ Odds ---------------");

let odds = Object.values(game.odds);
let avg = 0;
let sum = 0;
for (const odd of odds) sum = sum + odd;
avg = sum / odds.length;
console.log(avg);

const newSet = new Set([1, 2, 3, 4, 1, 3, 5]);
console.log(typeof newSet);

// map

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//const events = [...new Set(gameEvents.values())];
//console.log(events);

const events = gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `an event happend, on average, every ${90 / gameEvents.size} minutes`
);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "First" : "Second";
  console.log(`[${half} Half] ${min} : ${event}`);
}
//slicing

const airLines = "Air India";
const plane = "A245";
console.log(airLines.indexOf("a"));
console.log(airLines.lastIndexOf("i"));
console.log(airLines.length);
console.log(airLines.slice(2, 8));
console.log(airLines.slice(-1));

const middleSeatCheck = function (seat) {
  const s = seat.slice(-1);
  if (s === "A" || s === "R") {
    console.log("You got the middle seat");
  } else {
    console.log("You are lucky");
  }
};
middleSeatCheck("23A");
middleSeatCheck("23B");

// upper case & lowercase
const airLines = "Air India";
console.log(airLines.toLowerCase());
console.log(airLines.toUpperCase());

const name = "rAghU";
console.log(name.slice(1));
const nameLower = name.toLowerCase();
const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
console.log(nameCorrect);

// split
const capitalName = function (name) {
  const names = name.split(" ");
  const newNameUpper = [];
  for (const n of names) {
    //newNameUpper.push(n[0].toUpperCase() + n.slice(1));
    newNameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(newNameUpper.join(" "));
};
capitalName("raghu konanki");

// padding
const card = function (number) {
  const last = String(number);
  console.log(last.slice(-4).padStart(last.length, "*"));
};
card(1236474849);
card(4354849008765500);


// repeat
const msg = "Bad weather... All flights are cancelled..\n";
console.log(msg.repeat(5));

const flights = function (n) {
  console.log(`There are ${n} no of planes in line ${"✈️".repeat(n)}`);
};
flights(3);
flights(5);


document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    // console.log(first, second);

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
*/
