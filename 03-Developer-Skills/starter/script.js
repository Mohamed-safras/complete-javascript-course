// Remember, we're gonna use strict mode in all scripts now!
"use strict";

function printForecast(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let msg = `...${arr[i]}ºC in ${i + 1} days`;
    newArr.push(msg);
  }
  return newArr.join(" ") + "...";
}

console.log(printForecast([12, 5, -5, 0, 4]));
