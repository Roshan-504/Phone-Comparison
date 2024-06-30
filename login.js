
const users = {
    "Nilesh" : 1234,
    "Roshan" : 1234,
    "Gauri" : 1234,
    "gauri" : 1234,
    "kshitij" : 1234,
    "Kshitij" : 1234,
    "mandar" : 1234,
    "Mandar" : 1234,
}

let btn = document.getElementById("btn")

btn.onclick = () => {
    let userneme = document.getElementById("username")
    let password = document.getElementById("password")
    const anchor = document.getElementById("anchor")
    if(userneme.value in users){
        if(password.value == users[userneme.value]){
            console.log("hello")
            window.open("homepage.html")
        }
        else{
            window.alert("Wrong Username or Password")
        }
    }
    else{
        window.alert("Wrong Username or Password")
    }
}