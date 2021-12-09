let country = "Sri Lanka";
const contianent = "Asia";
let population = 2.8;

console.log(country, contianent, population);

let isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof population);

let checkNull = null;

console.log(typeof checkNull);

language = "Tamil";
// isIsland = false; Uncaught TypeError: Assignment to constant variable.

population /= 2;
population++;
console.log(population);

const finlandPopulation = 6;

console.log(population > finlandPopulation);

const averagePopulation = 33;
console.log(population < averagePopulation);

const description = `${country} is in ${contianent}, and its ${population} million people speak ${language}`;

console.log(description);

const newDescription = "My name 'safras";
console.log(newDescription);
let x, y;
(x = 10), (x = y = 23 - 4);

console.log(x, y);

const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;

const markBMIMethod1 = markWeight / markHeight ** 2;
const johnBMIMethod1 = johnWeight / johnHeight ** 2;
// const markBMIMethod2 = markWeight / (markHeight * markHeight);
// const johnBMIMethod2 = johnWeight / (johnHeight * johnHeight);

const markHeightBMI = markBMIMethod1 > johnBMIMethod1;

console.log(markBMIMethod1, johnBMIMethod1);
console.log(markHeightBMI);

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is 22 million below average`);
}

if (markBMIMethod1 > johnBMIMethod1) {
  console.log(
    `Mark's BMI (${markBMIMethod1.toFixed(2)}) 💪💪💪 is higher than John's!`
  );
} else {
  console.log(
    `John's BMI (${johnBMIMethod1.toFixed(2)}) 💪💪💪 is higher than Mark's!`
  );
}
/*
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("only 1 border");
} else if (numNeighbours > 1) {
  console.log("More than one border");
} else {
  console.log("No border");
}*/
population = 20;
isIsland = true;
population = 2;
language = "english";
if (language === "english" && population < 50 && isIsland) {
  console.log(`You should live in ${country}:)`);
} else {
  console.log(`${country} does not meet your criteria`);
}

const KoalasScore1 = 88;
const KoalasScore2 = 91;
const KoalasScore3 = 110;

const dolphinsAverageScore = (96 + 108 + 89) / 3;
const koalasAverageScore = (88 + 91 + 110) / 3;

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
  console.log("Dolphins team won the trophy 🏆");
} else if (
  koalasAverageScore > dolphinsAverageScore &&
  koalasAverageScore >= 100
) {
  console.log("Koalas team won the trophy 🏆");
} else if (
  koalasAverageScore === dolphinsAverageScore &&
  koalasAverageScore >= 100 &&
  dolphinsAverageScore >= 100
) {
  console.log("match drawn");
} else {
  console.log("No one wins the trophy 🏆");
}
language = "tamil";
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("Most number of native speakers");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

console.log(
  `${country} population is ${population > 33 ? "above" : "below"} average`
);

let age = 14;

const newAge =
  age > 18 ? (age += 1) : age === 14 ? (age > 12 ? "hi" : "hello") : 1;
console.log(newAge);

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}`);

function fruitProcess(apple, orange) {
  return `${apple} ,${orange}`;
}

const result = fruitProcess();

console.log(result);
