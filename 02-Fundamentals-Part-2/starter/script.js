"use strict";

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const sri_lanka = describeCountry("Sri Lanka", 21.8, "colombo");
const india = describeCountry("India", 1393, "delhi");
const pakistan = describeCountry("Pakistan", 208.57, "Islamabad");

console.log(sri_lanka);
console.log(india);
console.log(pakistan);
const worldPopulation = 7900;
function percentageOfWorld1(population) {
  const calcPopulation = (population / worldPopulation) * 100;
  return `${calcPopulation.toFixed(2)}%`;
}

const sl_population = percentageOfWorld1(21.8);
const india_population = percentageOfWorld1(1393);
const pakistan_population = percentageOfWorld1(208.57);
console.log(sl_population);
console.log(india_population);
console.log(pakistan_population);

const percentageOfWorld3 = (population) =>
  `${((population / worldPopulation) * 100).toFixed(2)}%`;

console.log(percentageOfWorld3(21.8));
console.log(percentageOfWorld3(1393));
console.log(percentageOfWorld3(208.57));

const describePopulation = (country, population) => {
  const populationPercentage = percentageOfWorld1(population);
  return `${country} has ${population} million people,which is about ${populationPercentage} of the world.`;
};

console.log(describePopulation("Sri Lanka", 21.8));
console.log(describePopulation("India", 1393));
console.log(describePopulation("Pakistan", 208.57));

//coding challenge #1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgKoalas = calcAverage(23, 34, 27);
const avgDolhins = calcAverage(85, 54, 41);

const checkWinner = (avgDolhins, avgKoalas) => {
  if (avgDolhins >= avgKoalas * 2) {
    return `Dolphins win (${avgDolhins} vs ${avgKoalas})`;
  } else if (avgDolhins * 2 <= avgKoalas) {
    return `Koalas win (${avgKoalas} vs ${avgDolhins})`;
  } else {
    return `no team wins`;
  }
};

console.log(checkWinner(avgDolhins, avgKoalas));

const populations = [21.8, 1393, 208.57, 1449];

console.log(populations);

const chinese_populations = percentageOfWorld1(1449);

const percentages = [
  sl_population,
  india_population,
  pakistan_population,
  chinese_populations,
];

console.log(percentages);

const neighbours = ["india", "pakistan", "bangladesh"];

neighbours.push("Utopia");

neighbours.pop();

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

const index = neighbours.indexOf("bangladesh");

neighbours[index] = "maldives";

console.log(neighbours);

//coding challenge #2

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const total = [
  calcTip(bills[0]) + bills[0],
  calcTip(bills[1]) + bills[1],
  calcTip(bills[2]) + bills[2],
];

console.log(total);

//introduction to objects

const myCountry = {
  country: "Sri Lanka",
  capital: "colombo",
  language: "Tamil",
  population: 21.8,

  neighbours: ["india", "bangladesh", "pakistan"],
  describe: function () {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.
    `);
  },
  checkIsLand: function () {
    this.isLand = neighbours.length >= 1 ? true : false;

    return this.isLand;
  },
};

myCountry.population = 23.8;
myCountry["population"] = 22.8;
myCountry.describe();
myCountry.checkIsLand();
console.log(myCountry.isLand);

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};
const john = {
  fullName: "john smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.BMI.toFixed(2)}) is higher than ${
      john.fullName
    }'s ${john.BMI.toFixed(2)}`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.BMI.toFixed(2)}) is higher than ${
      mark.fullName
    }' ${mark.BMI.toFixed(2)}`
  );
}

//iteration : the for Loop
for (let i = 1; i <= 50; i++)
  console.log(`Voter number ${i} is currently voting`);

// console.log(populations);
const percentages2 = [];

for (let i = 0; i <= populations.length - 1; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
// console.log(percentages);

console.log(percentages2);

const listOfNeighbors = [
  ["canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbors.length; i++) {
  for (let j = 0; j < listOfNeighbors[i].length; j++) {
    console.log(listOfNeighbors[i][j]);
  }
}

//while loop
let i = 0;
const percentages3 = [];
while (i <= populations.length - 1) {
  // /console.log(populations[i]);

  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentages3);

//coding challenge #4

const newBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const newTips = [];
const newTotal = [];

for (let i = 0; i < newBills.length; i++) {
  const tip = calcTip(newBills[i]);
  newTips.push(tip);
  newTotal.push(tip + newBills[i]);
}

console.log(newTotal);
console.log(newTips);

const calculatedAverage = (arr) => {
  let totalValue = 0;

  for (let i = 0; i < arr.length; i++) {
    totalValue += arr[i];
  }
  // arr.forEach((item) => (totalValue += item));
  return totalValue / arr.length;
};

console.log(calculatedAverage(newBills));

function remainderFunc(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Invalid";
  }

  return num1 > num2 ? num1 % num2 : NaN;
}
console.log(remainderFunc(13, 23));
