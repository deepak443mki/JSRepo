
// ---------------------------Numbers----------------------------------------------
const score = 33;
// console.log(score);


const balance = new Number(100.3344);
// console.log(balance);
// console.log(balance.toString().length) //8
// console.log(balance.toFixed(2)); //100.33


const otherNumber = 293.85446;
// console.log(otherNumber.toPrecision(3));


const hundreds = 100000000;
// console.log(hundreds.toLocaleString('en-IN'));


// ----------------------------Maths-----------------------------------

console.log(Math.abs(-2)); //2
console.log(Math.round(45.68)); //46
console.log(Math.ceil(23.4)); //24
console.log(Math.floor(23.4)); //23


console.log(Math.min(23, 4, 5, 11, 76, 3, 12, -6)); //-6
console.log(Math.max(23, 4, 5, 11, 76, 3, 12, -6)); // 76

console.log(Math.random()); //0 - 1
console.log((Math.random()*10) +1 ); //values shifted to left
console.log((Math.floor(Math.random()*10) +1 )); //remove floating number

const min = 50;
const max = 80;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //random number between min num and max num
