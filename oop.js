const user = {
    username: "adrika",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`Username: ${this.username}, Login Count: ${this.loginCount}, Signed In: ${this.signedIn}`);     
        console.log(this);   
    }
    
}

console.log(this);   


console.log(user.username);
console.log(user.getUserDetails());

