let user = prompt("Enter your name:")
let password = Number(prompt("Enter your password:"))
if (user === "admin"&& password === 1234){
    console.log("welcome", user ,"Login successful")
}
else {
    console.log("Access denied")
}
