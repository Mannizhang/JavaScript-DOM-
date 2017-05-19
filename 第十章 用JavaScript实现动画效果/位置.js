function positionMessage(){  
    var elem = document.getElementById('message');  
    elem.style.position = "relative";  
    elem.style.left="20px";  
    elem.style.top="50px";  
    elem.style.fontColor="red";  
    moveMessage("message",200,100,10)  
}  
//将移动元素函数抽象  
function moveMessage(elementID,end_x,end_y,interval){  
    var elem = document.getElementById(elementID);  
    var xpos = parseInt(elem.style.left);  
    var ypos = parseInt(elem.style.top);  
    if(xpos == end_x &&ypos == end_y){  
        return true;  
    }  
    if(xpos < end_x){xpos++;}  
    if(xpos > end_x){xpos--;}  
    if(ypos < end_y){ypos++;}  
    if(ypos > end_y){ypos--;}  
    elem.style.left = xpos + "px";  
    elem.style.top = ypos + "px";  
    var repeat = "moveMessage('"+elementID+"',"+end_x+","+end_y+","+interval+")";  
    movement = setTimeout(repeat,interval);  
}  