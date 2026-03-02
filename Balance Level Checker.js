function checkBalance(balance) {
    if (balance > 1000){
        return "High balance"
 }
    else if (balance >500){
        return "Medium balance"
    }
    else {
        return "Low balance"
    }
}
console.log (checkBalance(1500))
