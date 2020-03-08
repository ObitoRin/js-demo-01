let div = document.createElement("div");

document.body.appendChild(div);
var flag = false
var lastX
var lastY
div.onmousedown = function (e){
    flag = true
    
    lastX = e.clientX   //按下时的位置
    lastY = e.clientY
}

document.onmousemove = function (e){
    
    if(flag === true){
        var x = e.clientX - lastX   //移动后的位置 当前位置减按下时的位置
        var y = e.clientY - lastY
        
        var left = parseInt(div.style.left) || 0    //盒子之前在的位置
        var top = parseInt(div.style.top) || 0

        if(left < 0){
            left = 0
        }
        if(top < 0){
            top = 0
        }

        div.style.left = left + x + 'px'
        div.style.top = top + y + 'px'
        
        lastX = e.clientX   //当前移动后的位置就是最后一次位置
        lastY = e.clientY
    }
    
}

document.onmouseup = function (){
    flag = false
}



 