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

//when we use new, a new object/instance is created and the this keyword points to that new object.
//it is also used in classes and constructor functions to refer to the current instance of the class or object being created.
//its stored in the memory and can be accessed by the methods of the class or constructor function.
