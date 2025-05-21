//global scope
let a = 300

//block scope
if (true) {
    let a = 10
    const b = 20
    // console.log(`inner a:${a}`);
    {
        let a =20
        // console.log(" inner most a:"+a);
        
    }
}


// console.log(a); //a is not defined
// console.log(b); //b is not defined
// console.log(`outer a:${a}`); // 30


function one(){
    const username ="Deepak"

    function two(){
        const website = "Youtube"
        console.log(username);
        console.log(website);
        
    }
    // console.log(website);
    
    two()
}

// one()

if (true) {
    const username = "Deepak"
    if (username ==="Deepak") {
        const website = " Youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);


// -------------------------intresting --------------------------

function addone(num){
    return num+1
}

console.log(addone(5));
 


addtwo(4)
const addtwo = function(num){
    return num+2
}

