

// function sayname(){
//     console.log("D");
//     console.log("e");
//     console.log("e");
//     console.log("p");
//     console.log("a");
//     console.log("k");
// }

// sayname();


// function add(a, b){
//     console.log(a+b);
// }
// function addNum(a, b){
//     return a+b;
// }

// const result = add(3,  3);
// const result1 = addNum(2, 7)
// console.log("Result: "+result1);


// function loginUserFunction(username ="sam"){ //default usernameis sam
//     if (!username) {
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in` //string interpolation
// }

// const result = loginUserFunction("Deepak")
// console.log(result);



// ---------------function 2----------------\
function calculateCardPrice(...num1) {  //rest operator " ....parameter"
    return num1
}

console.log(calculateCardPrice(500, 400, 900, 460));


const user ={
    username:"Deepak",
    price:122
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`);
    
}


handleObject({
    username:"DeepakKumar",
    price:199
})

const myNewAray = [200, 100, 500, 400]

function returnSecondvalue(getArray){
    return getArray[1]
}

console.log(returnSecondvalue(myNewAray));
console.log(returnSecondvalue([11, 200, 300, 400]));
