//singleton -  from constructor
//not singleton - from literals

//object literals

const mySym = Symbol("Key1");

const  JsUser = {
    name:"Deepak",
    "full name":"Deepak Kumar Majhi",
    [mySym]:"mykey1", // this syntax is for symbol 
    age:21,
    location:"Bhubaneswar",
    email:"deepak@gmail.com",
    isLoggedIn:false,
    LastLoggeInDays:["monday", "wednesday", "Saturday"]
}


// console.log(JsUser.LastLoggeInDays); //not recomended
// console.log(JsUser["full name"])
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);



JsUser.email = "mdep123@gamil.com";
// Object.freeze(JsUser);
JsUser.email = "wcwmdep123@gamil.com";

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js");
    
}
JsUser.greeting2 = function(){
    console.log(`Hello Js user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
