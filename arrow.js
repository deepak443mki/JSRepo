const user = {
    username:"Deepak",
    price:999,
    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this);

// function func(){
//     let username = "deepak"
//     console.log(this.username);
    
// }

// func()

// const chai = function(){
//     let username = "deepak"
//     console.log(this.username);
// }

// const chai = ()=>{
//     let username = "deepak"
//     console.log(this);
// }

// chai()


// ------------------- arrow function  -------------------------

// const addTow  = (number1, number2) => {
//     return number1+number2
// }

// console.log(addTow(4, 7));


// const returnObject = ()=>{
//     return {name:"Deepak"}
// }

// console.log(returnObject());


myArray = [2, 4, 6, 8, 10]

myArray.forEach(element => {
    console.log(element);
    
});