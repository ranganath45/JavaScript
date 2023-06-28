/*
// Displaying alert
let js = "raghu";
if (js === "raghu") alert("Raghu Konanki");

// Showing Output on console
let a = 30 + 21 + 7 - 6 * 2;
console.log(a);

//  Values and Variables

let country = 'India';    // Here country is variable and India is value
let continent = 'Asia';
let population = '140.76 CR';
console.log(country);
console.log(continent);
console.log(population);


// Data Types

let a = true;
console.log(typeof a);
console.log(typeof 2001);
console.log(typeof 'Ranga');
console.log(typeof 45.5);

a = 'Raghu Konanki';
console.log(typeof a);

// let,const,var

let age = 30;  // we can change values when we declare them with let
age = 45;

const dob = 2001;  // we cant reassign values whe we declare with const
 dob = 2001;

var fname = 'raghu';   // var performs same as let
fname  = 'Ranga;'

// Operators
let a = 30;
let b = 40;
x = a + b;
x = a * b;
console.log(x);
console.log(a > b);

let c = 5;
c += 8;
c++;
c--;
console.log(c);

let now = 2023
const johnage = now - 2001;
const wickage = now - 2000;
console.log(johnage > wickage);


let k, l;
k = l = 30 - 10;
console.log(k, l);

/////////////////////////////////////////////////////////////////////////////
// ---------------------CHALLENGE #1 ------------------//
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

////////////// Solution //////////////
let massMark =78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95

 let BMIMark = massMark/(heightMark * heightMark);


let BMIJohn = massJohn/(heightJohn * heightJohn);
console.log(BMIMark);
console.log(BMIJohn);

let markHigherBmi = BMIMark > BMIJohn;
console.log(BMIMark > BMIJohn);

/////////////////////////////////////////////////////////////////////////////
// Strings and literal variables
const fname = 'Raghu';
const job = 'Programmer';
const birthYear = 2001;
const now = 2023;

// using strings
const about = "I'm " + fname + ' ,a ' + (now - birthYear) + ' years old ' + job;
console.log(about);

console.log('This is \n\
second\n\
line');

// USing literal variables - backticks
console.log(`I'm ${fname} ,a ${now - birthYear} years old ${job}.`);
console.log(`This is
second
line
`);

/////////////////////////////////////////////////////////////
// if else

const age = 17;
if (age >= 18) {
    console.log("Raghu you can drive😍😍");
} else {
    const yearsLeft = 18 - age;
    console.log(`you are young .need to wait ${yearsLeft} more years`)
}

//////////////////////////////////////////////////////////////

///////////---------CHALLENGE #2 ------------------//////
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.

// -------------------- Solution ------------------------//

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if(BMIMark>BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

////////////////////////////////////////////////////////////////////////////////
// type conversion

const inpuyYear = "2001";
console.log(Number(inpuyYear), inpuyYear);
console.log(Number(inpuyYear) + 18);

console.log(Number("raghu"));
console.log(String(23), 23);

// type coercion

console.log("I'm " + 23 + " years old");
console.log("23" + 10);
// for sub(-), mul(*), div(*) js auyomatically converts strings into integers
console.log("23" - 10);
console.log("23" * 10);
console.log("23" / 10);

////////////////////////////////////////////////////////
// truthy and falsy values
// 5 falsy values 0,'',undefined,null.NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('raghu'));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 0;
if (money) {
    console.log("Hey u can enjoy");
} else {
    console.log("You don't have a job");
}

let height;
if (height) {
    console.log("height is defined");
} else {
    console.log("height is undefined");
}

let weight = 10;
if (weight) {
    console.log("weight is defined");
} else {
    console.log("weight is undefined");
}


/////////////////////////////////////////////////////////////////////
// equality operators == vs ===
const age = "22";
if (age === 22) {
    console.log("You became an adult", "(it is strict equality operator)")
}
if (age == 22) {
    console.log("You became an adult", "(it is loose equality operator)")
}

const fav = Number(prompt("Enter your favourite number"));
console.log(fav);
console.log(typeof fav);

if (fav === 45) {
    console.log("45 is an amazing number");
}
else if (fav == 45) {
    console.log("45 is an amazing number");
}
else if (fav === 18) {
    console.log("45 is an amazing number");
} else if (fav == 18) {
    console.log("18 is an amazing number");
} else {
    console.log("Neither 45 nor 18");
}
* /
///////////////////////////////////////////////////////////////////////
// logical operators
const hadDriversLicense = true;
const hadGoodVison = true;

console.log(hadDriversLicense && hadGoodVison);
console.log(hadDriversLicense || hadGoodVison);
console.log(!hadDriversLicense);

if (hadDriversLicense && hadGoodVison) {
    console.log("You can drive");
} else {
    console.log("someone else should drive");
}

const getTired = false;
if (hadDriversLicense && hadGoodVison && getTired) {
    console.log("You can drive");
} else {
    console.log("someone else should drive");
}

const noEnergy = false;
if (hadDriversLicense || hadGoodVison || noEnergy) {
    console.log("You can drive");
} else {
    console.log("someone else should drive");
}


//////////////////////////////////////////////////////////////////////////////
// ----------------------------CHALLENGE #3 -------------------------//
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

/------------ Solution -----------/
const scoreDolphins = (96+108+89)/3;
const scoreKoalas = (88+91+110);

if(scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy");
}else if(scoreDolphins < scoreKoalas){
    console.log("Koalas win the trophy");
}else{
    console.log("Both win the trophy");
}

///////////////////////////////////////////////////////////////////////////
// ------------ switch statements ------ //

const day = "tey";
switch (day) {
    case 'monday':
        console.log("Goto work");
        break;
    case 'tuesday':
    case 'wednesday':
        console.log("work begin");
        break;
    case 'thursday':
    case 'friday':
        console.log("work completed");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy weekend");
        break;
    default:
        console.log("not a valid day!");
}
//////////////////////////////////////////////////////////////
// Conditional(Terenary) operator

const age = 16;
age >= 18 ? console.log("You can drink wine🍷") : console.log("you can drink water💧");

const drink = age >= 18 ? "wine🍷" : "water💧";
console.log(drink);

//////////////////////////////////////////////////////////////////////
// --------------------CHALLENGE #4 ----------------------------/
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430

//--------------- solution ---------------------//
const bill = 275;

// Using If else //
let tip=0;
let total=0;
if(bill < 300 && bill > 50){
    tip = (bill*15)/100;
    total = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
}else{
    tip = (bill*20)/100;
    total = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
}

// using terenary operator //
const tip = bill<=300 && bill>=50 ? bill*0.15 : bill*0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);

*/
