function positionMessage() {
    var elem = document.getElementById('message');
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "50px";
    movement = setTimeout("moveMessage()", 1000);//一秒钟之后才调用moveMessage函数
    
