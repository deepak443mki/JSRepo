let myDate = new Date()
// console.log(myDate.toString()); //Thu May 15 2025 14:58:42 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()); //2025-05-15T09:28:42.197Z
// console.log(myDate.toDateString()); //Thu May 15 2025
// console.log(myDate.toTimeString()); //14:58:42 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString()); //15/5/2025, 2:58:42 pm
// console.log(myDate.toLocaleDateString());//15/5/2025
// console.log(myDate.toLocaleTimeString());//2:58:42 pm

// const myCreatedDate = new Date(2004, 8, 23); //YYYY, MM, DD
// console.log(myCreatedDate.toDateString());

let date = new Date();

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getHours());
// console.log(date.getMinutes());

console.log(date.toLocaleString('defult', {
    weekday:"long",
    hour:"numeric",
    minute:"numeric"
}));
