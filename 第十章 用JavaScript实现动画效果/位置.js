function positionMessage() {
    var elem = document.getElementById('message');
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "50px";
    movement = setTimeout("moveMessage()", 1000);//一秒钟之后才调用moveMessage函数
function moveMessage() {
    var elem = document.getElementById("message");
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == 200 && ypos == 100) {
        return true;
    }
    if (xpos > 200) {
        xpos--;//每次移动一个像素
    }
    if (xpos < 200) {
        xpos++;
    }
    if (ypos > 200) {
        ypos--;
    }
    if (ypos < 200) {
        ypos++;
    }
    elem.style.left = xpos + "px";//再次转换为字符串
    elem.style.top = ypos + "px";
    movement = setTimeout("moveMessage()", 10);
}
positionMessage();