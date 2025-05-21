//ES 6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }


    encryptPassword() {
        return `${this.password}abc`
    }
}

const chai = new User("Deepak", "deepak@gmail.com", "password")

console.log(User.encryptPassword);
