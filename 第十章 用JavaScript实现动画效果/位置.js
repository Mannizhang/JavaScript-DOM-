function positionMessage() {
    var elem = document.getElementById('message');
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "50px";
    movement = setTimeout("moveMessage()", 5000);
}//5秒钟之后才调用moveMessage函数
function moveMessage() {
    if (!document.getElementById)return false;
    if (!document.getElementById("message"))return false;
    var elem = document.getElementById("message");
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == 200 && ypos == 100) {
        return true
    }
    if (xpos < 200) {
        xpos++;
    }
    if (xpos > 200) {
        xpos--;
    }
    if (ypos < 100) {
        ypos++;
    }
    if (ypos > 100) {
        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    movement = setTimeout("moveMessage()", 10);
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }

}
function moveElement(elementID,final_x,final_y,interval) {//第一步是声明它的各个参数
    if (!document.getElementById)return false;
    if (!document.getElementById(elementID))return false;
    var elem = document.getElementById(elementID);
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);//给定元素的left和top属性转换为数值，并把转换结果分别赋值给变量xpos和ypos
    if(xpos==200&&ypos==100){//检查给定元素是否已经到达目的地
        return true;
    }
    if(xpos==final_x&&ypos==final_y){
        return true;
    }
    if(xpos<200){
        xpos++;
    }
    if(xpos<final_x){
        xpos++;
    }
    if(xpos>final_x){
        xpos--;
    }
    if(ypos<final_y){
        ypos++;
    }
    if(ypos>final_y){
        ypos--;
    }
    elem.style.left=xpos+"px";
    elem.style.top=ypos+"px";//它们负责把字符串"px"追加到变量xpos和ypos的末尾，并将其赋值给elem元素的left和top样式属性。
    movement=setTimeout("moveMessage()",10)//在moveMessage函数里，每隔10毫秒调用一次moveMessage函数
    "moveElement('"+elementID+"',"+final_y+","+final_x","+interval+")"
    var repeat="moveElement"('"+elementID+"',"+final_y+","+final_x","+interval+")";







}

addLoadEvent(positionMessage);
addLoadEvent(moveMessage);
    
