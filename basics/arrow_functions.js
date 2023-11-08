const user = {
    username: "Rishabh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "SaM"
// user.welcomeMessage()
console.log(this);    //current context is empty as in node envirenment but not in website

function chai(){
    console.log(this);
}
 chai()


