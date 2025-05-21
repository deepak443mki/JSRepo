// ["", "", "", "", ""]
// [{}, {}, {}]

// -------------------for of loop----------------------
// const arr = [1, 2, 3, 4, 5]
// for (const number of arr) {
//     console.log(number);
// }

// const name = "Deepak"
// for (const alphabet of name) {
//     console.log(`each char is ${alphabet}`);
// }

// Maps

const map = new Map()
map.set('IN', 'India')
map.set("USA", "United States of America")

// console.log(map);


// for (const [key, value] of map) {
//     console.log(`${key} :- ${value}`);
    
// }

// ------------for in loop-------------

// const myObject = {
//     js : "javascript",
//     cpp : "C++",
//     rb: "ruby",
//     py : "python"
// }

// for (const key in myObject) {
//     console.log(`${key} is shortchut for ${myObject[key]}`);
    
// }


// const programing = ["js", "cpp", "py"]

// for (const key in programing) {
//     console.log(programing[key]);
// }

// ----------------for each-----------



const coding = ["js", "py", "java"]

// coding.forEach(function (val){
//     console.log(val);
    
// });



// coding.forEach((item)=>{
//     console.log(item);
    
// });



// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
    
// })



const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
]

myCoding.forEach((object)=>{
    console.log(object.languageName);
    
})