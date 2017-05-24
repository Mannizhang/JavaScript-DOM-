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

addLoadEvent(positionMessage);
addLoadEvent(moveMessage);
    
