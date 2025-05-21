const coding = ["js", "java", "ruby", "python"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(values);


// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newnum = number.filter((num)=>{
//     return num > 5;
// });

// console.log(newnum);


const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums  = number.map((num)=>num+10)


const newnums = number
                    .map((num)=>num*10)
                    .map((num)=>num+1)
                    .filter((num)=>num>=40)
// console.log(newnums);





const numbers = [1, 2, 3]

const total = numbers.reduce((ac, curr)=>ac + curr, 0);

console.log(total);
