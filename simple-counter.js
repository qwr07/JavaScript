let number=document.getElementById("number")
let increaseBtn=document.getElementById("increase")
let decreaseBtn =document.getElementById("decrease")
let resetBtn = document.getElementById("reset")
let count=0
increaseBtn.onclick=function(){
    count=count+1
    number.innerText=count
}
decreaseBtn.onclick=function(){
    count=count-1
    number.innerText=count
}
resetBtn.onclick=function(){
    count=0
    number.innerText=count
}
