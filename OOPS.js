function multiplyby5(num){
    return num*5
}

multiplyby5.power = 3

console.log(multiplyby5(4));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);

function createUser(userName, score){
    this.userName = userName
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()