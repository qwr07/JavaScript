let title = document.getElementById("title")
let increaseBtn = document.getElementById("increase")
let decreaseBtn = document.getElementById("decrease")
let size=16
title.style.fontSize=size+"px"
increaseBtn.onclick=function(){
    size=size+4;
    title.style.fontSize=size+"px"
}
decreaseBtn.onclick=function(){
    size=size-4;
    title.style.fontSize=size+"px"
}
