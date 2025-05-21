const marvel_heros = ["Thor", "Iron man", "Spidrman"];
const dc = ["Super man", "flash", "Batman"];
// marvel_heros.push(dc);


// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const heros = marvel_heros.concat(dc);
// console.log(heros);


// const allHeros  = [...marvel_heros, ...dc ]; //spread operator
// console.log(allHeros);


const arr1 = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11, 12]]];
const updated_arr2 = arr1.flat(Infinity);
// console.log(updated_arr2);


// console.log(Array.isArray("Deepak"));
// console.log(Array.from("Deepak"));
// console.log(Array.from({name:"Deepak"})); //intresting
let score1  = 100;
let score2  = 200;
let score3  = 300;

// console.log(Array.of(score1, score2, score3));
