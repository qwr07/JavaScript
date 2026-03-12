let username=document.getElementById("username")
let password=document.getElementById("password")
let button=document.getElementById("loginBtn")
let message=document.getElementById("message")
let saveduser=localStorage.getItem("user")
if(saveduser){
    message.innerText="welcome back"+saveduser
}
button.onclick=function(){
    let userVale=username.value
    let passVale=password.value
    if(userVale==="admin"&& passVale==="123456"){
        localStorage.setItem("user",userVale)
        message.innerText="welcome"
    }
    else if(userVale!=="admin"){
        message.innerText="please enter username"
    }
    else if(passVale.length<4){
        message.innerText="password too short"
    }
    else{
        message.innerText="Access denied"
    }
}
