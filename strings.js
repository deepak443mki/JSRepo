const fname = "Deepak-mki";
const repoCount = 50

// console.log(fname+repocount+);

// console.log(` Hello my name is ${fname} and my repo count is ${repoCount}`);


const name = new String("Deepak-mki");
// console.log(name);
// console.log(name[0]);
// console.log(name.__proto__);

// console.log(name.length);
// console.log(name.charAt(4));
// console.log(name.indexOf("e"));

const newStr = name.substring(0, 4) //negative value not allowed
// console.log(newStr);

const newStr2 = name.slice(-1, 3); //negative value are allowed
// console.log(newStr2);
// console.log(name.toUpperCase())

const newStr3 = "     Deepak     ";
// console.log(newStr3); //"     Deepak     "
// console.log(newStr3.trim()); //"Deepak"


const url = "https://me.com/mee%20deepak"
// console.log(url.replace("%20", "_"));

// console.log(url.includes("deepak"));

console.log(name.split("-"))
console.log(name.bold())