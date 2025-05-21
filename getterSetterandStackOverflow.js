class User  {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toLowerCase();
    }

    set email(value){
        return this._email = value;
    }

    get password(){
        return `${this._password}deepak`
    }

    set password(value){
        this._password = value;
    }
}

const deepak = new User("deepak@gmail.com", "abc")
console.log(deepak.email);
console.log(deepak.password);
