let number = Number(prompt("Enter your number"))
console.log(typeof number)
if(isNaN(number)){
    console.log("the value you entered is not a number")
}

 else if (number%2==0){
    console.log("the number",number,"is even")
}
else{ console.log("the number",number,"is odd") }
