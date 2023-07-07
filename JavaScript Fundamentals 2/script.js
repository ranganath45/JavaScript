'use strict';
// strict mode is used to caught the errors
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can Drive");

// const interface = 'raghu';
// const private = 234;

///////////////////////////////////////////////////////////////////////////////
//functions

function logger() {
    console.log("my name is raghu");
}

//calling / revoking function
logger();
logger();
logger();

function fruitJuice(apples, grapes) {
    const juice = `Juice with ${apples} apples and ${grapes} grapes.`;
    return juice;
}
const appleJuice = fruitJuice(5, 0);
console.log(appleJuice);

const grapeJuice = fruitJuice(0, 6);
console.log(grapeJuice);

const mixedJuice = fruitJuice(5, 5);
console.log(mixedJuice);


// function decleration
// in function decleration we can call the function before declaring
function caclAge1(birthYear) {
    return 2023 - birthYear;
}
const age1 = caclAge1(2001);

// function expression
const calcage2 = function (birthYear) {
    return 2023 - birthYear;
}
const age2 = calcage2(2001);
console.log(age1, age2);

//arrow functions
const calcage3 = birthyear => 2023 - birthyear;
const age3 = calcage3(2001);
console.log(age3);

const retirementAge = birthyear => {
    const age4 = 2023 - birthyear;
    const retirement = 60 - age4;
    return `retirement age is ${retirement} years.`
}
const calcRetire = retirementAge(2001);
console.log(calcRetire);

//functions with 2 parameters
const ageRetire = (birthyear, firstName) => {
    const age5 = 2023 - birthyear;
    const retire = 60 - age5;
    return `${firstName} retirement age is ${retire} years.`
}
const rAge = ageRetire(2002, "Raghu");
console.log(rAge);

// functions calling other functions
function cutFruits(fruits) {
    return fruits * 4;
}

function fruitJuice(apples, grapes) {
    const applePieces = cutFruits(apples);
    const grapePieces = cutFruits(grapes);

    return `Juice with ${applePieces} pieces of apple and ${grapePieces} pieces of grape.`
}
console.log(fruitJuice(2, 3));

// ------------------ Challenge 1 --------------
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// ------------------ Solution 1 ----------------
const calcAverage = (a, b, c) => (a + b + c) / 3;
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas)

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${scoreDolphins} vs. ${scoreKoalas})`);
    } else {
        console.log("No team wins...")
    }
}
checkWinner(scoreDolphins, scoreKoalas);

//Arrays
const p1 = "Rohit";
const p2 = "Virat";
const p3 = "Sky"

const players = ['Rohit', 'Virat', 'Sky'];
console.log(players);

const years = [1997, 1998, 1999];
console.log(years);

const calcage = function (birthYear) {
    return 2023 - birthYear;
}

const age1 = calcage(years[0]);
const age2 = calcage(years[1]);
const age3 = calcage(years[years.length - 1]);
const ages = [age1, age2, age3]
console.log(ages);

// array operations
const players = ['Rohit', 'Virat', 'Sky'];
console.log(players);
// push(last)
const newPlayer = players.push('MSD');
console.log(players);
// unshift(first)
const oldPlayer = players.unshift("Sachin");
console.log(players);
//pop(last)
players.pop();
console.log(players);
//shift(first)
players.shift();
console.log(players);

console.log(players.indexOf("Rohit"));
console.log(players.indexOf("Virat"));
console.log(players.indexOf("sachin"));

console.log(players.includes("rohit"));
console.log(players.includes("Rohit"));

// ------------- Challenge-2  -------
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.

// ------------- Solution-2 ---------
function calcTip(bill) {
    const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
    return tip;
}
const a = calcTip(100);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// Objects
const Raghu = {
    firstName: 'Raghu',
    lastName: 'Konanki',
    age: 2023 - 2001,
    job: 'Engineer',
    friends: ['john', 'maximus', 'michael']
}
console.log(Raghu);
console.log(Raghu.firstName);
console.log(Raghu['firstName']);

const nameKey = 'Name';
console.log(Raghu['first' + nameKey]);
console.log(Raghu['last' + nameKey]);
const interestedIn = prompt('What do u want to know about raghu? choose between firstName, lastName, age, job, friends');
if (Raghu[interestedIn]) {
    console.log(Raghu[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, friends');
}

Raghu.location = 'Anantapur';
Raghu['company '] = 'Cognizant';
console.log(Raghu);

console.log(`${Raghu.firstName} has ${Raghu.friends.length} friends, and his best friend is called ${Raghu.friends[2]}`);

const Raghu = {
    firstName: 'Raghu',
    lastName: 'Konanki',
    birthYear: 2001,
    job: 'Engineer',
    friends: ['john', 'maximus', 'michael'],
    hadDriversLicense: true,

    calcAge: function () {
        return 2023 - this.birthYear;
    },

    getSummary: function () {
        return (`${Raghu.firstName} is a ${Raghu.calcAge()} years old ${Raghu.job}, and he has ${this.hadDriversLicense ? 'a' : 'no'} driver's license.`);
    }
}


console.log(Raghu.calcAge());
console.log(Raghu.getSummary());


// ----------------- Challenge-3 ----------
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// ----------------- Solution-3 ------------
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`);
} else if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`);
}

// for loop

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetetion ${rep}`);
}

const Raghu = [
    'Raghu',
    'Konanki',
    2023 - 2001,
    'Engineer',
    ['john', 'maximus', 'michael']
];

const ranga = [];
for (let i = 0; i < Raghu.length; i++) {
    ranga[i] = Raghu[i];
    //ranga.push(Raghu[i]);
}
console.log(ranga);

const years = [1999, 2001, 2003];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]);
}
console.log(ages);

const Raghu = [
    'Raghu',
    'Konanki',
    2023 - 2001,
    'Engineer',
    ['john', 'maximus', 'michael']
];
for (let i = Raghu.length - 1; i >= 0; i--) {
    console.log(i, Raghu[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`---------- Exercise ${exercise} -----------`);
    for (let rep = 1; rep <= 6; rep++) {
        console.log(`Lifting weight repetetion ${rep}`);
    }
}

// While loop

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weight repetetion ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`you rolled ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`you rolled 6`);
}

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// ---------- Challenge 4 ---------
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

// ---------------- Solution 4 --------------
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

// -------------------- Challenge 5 -----------------
Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.

// -------------- Solution 5 --------------
const calcAvg = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
};
console.log(calcAvg([2, 4]));

*/