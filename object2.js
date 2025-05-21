// const user = new Object()

const user = {}

user.id = "12de4"
user.name = "sam"
user.isLoggedIn = false

// console.log(user);


const regularUser = {
    email: "fneihi@gmail.com",
    fullname:{
        userfullname:{
            fname:"Deepak",
            lname:"Majhi"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.fname);

const obbj1 = {1:"a", 2:"b"}
const obbj2 = {3:"c", 4:"d"}
const obbj3 = {5:"e", 6:"f"}
const obbj4 = {7:"g", 8:"h"}
const obbj5 = {9:"i", 10:"j"}

// const obj3 = {obbj1, obbj2}
// const objM = Object.assign({}, obbj1, obbj2, obbj3, obbj4, obbj5) //object assign target, sourse
// console.log(objM);


const objM = {...obbj1, ...obbj2, ...obbj3, ...obbj4, ...obbj5} //spread operator
// console.log(objM);


console.log(Object.keys(user));
console.log(Object.values(user));

