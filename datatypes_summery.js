// based store and access datas `datatypes are 2 types`

//1.Primitive
// 7 categories: string, number, boolean, null, undefined, bigint, symbol

// const id = Symbol('123');
// const anotherId = Symbol('123');

// console.log(id==anotherId); //false

// const bigNumber = 9999999999999999999999999999n;
// console.log(bigNumber);
// console.log(typeof(bigNumber));


// 2.reference type/non-primitive: arrays, objects, functions

// const cars = ["Audi", "Bugati", "Lamborgini", "Mercedese", "Tata"]
// console.log(cars);

// let myObj = {
//     name:"Deepak",
//     age:21,
//     course:"CSE",
//     specialization:"AIML",
//     isRegular:true
// }
// console.log(myObj);

const myFunction = function(){
    console.log("Hello World");
    
}

myFunction();
console.log(typeof(myFunction));