//if statement

// const isUserLoggedIn = false;
// if (isUserLoggedIn) {
//     console.log("Welcome");
// } else{
//     console.log("Please login");
    
// }

// if (2==2) {
//     console.log("true");
// }

// const temeperature = 1;
// if (temeperature>40) {
//     console.log("temperature greater than 40");
    
// }else {
//     console.log("Temperature not greater than 40");
    
// }


// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User fower: ${power}`);
// }

// console.log(`User fower: ${power}`);



// const balance = 2000
// if(balance>100) console.log("test");


// if (balance<1000) {
//     console.log("Less than 100");
// }
// else if(balance > 10000){
//     console.log("Greater than");
// }
// else if(balance==2000){
//     console.log("Equal");
// }
// else{
//     console.log("None ");
    
// }



// ------------switch statement-------------


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 23;

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("Fabruary");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("Auguust");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;

//     default:
//         break;
// }


// ----------------truthevalues---------------

const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
    
// } else {
//     console.log("Don't have user email");
    
// }

// falsy values
// false , 0, -0, Bigint 0n, "", null, undefined, NaN

//truthy values
//"0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length===0) {
//     console.log("Object is Empty");
    
// }

//Nullish Coalescing Operator(??): null undefined

// let val1;
// val1 = 5 ?? 10   //5

// val1 = null ?? 10   //10 
// val1 = undefined ?? 10  //10

// val1 = null ?? 10 ?? 15 //10
// console.log(val1);


//terenary operator

// coondition ? true:false

const iceTeaPrice = 160
iceTeaPrice >= 100 ? console.log("more than 100"): console.log("less than 100");
;
