function positionMessage(){  
    var elem = document.getElementById('message');  
    elem.style.position = "relative";  
    elem.style.left="20px";  
    elem.style.top="50px";
    movement=setTimeout("moveMessage()",5000);
}