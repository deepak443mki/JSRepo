function setUsername(username){
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    setUsername.call(this, username)

    this.email = email
    this.password = password
}


const deepak  = new createUser("Deepak", "Deepak23@gmail.com", "23232fe")
console.log(deepak);
