//Immediately Invoked Function Expression (IIFE)


(function apple(){
    //named IIFE
    console.log(`DB connected`);
})();

//_______()()______ ()--> function_definition,  ()-->function_call

// IIFE - To overcome the global scope polution problem

((name)=>{
    //unnamed IIFE
    console.log(`DB connected two ${name}`)
})("Deepak");


((number1, number2)=>{
    console.log(`${number1} + ${number2} = ${number1+number2}`);
})(2, 3);