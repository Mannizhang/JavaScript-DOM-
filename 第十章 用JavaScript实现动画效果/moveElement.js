/**
 * Created by maryz on 2017/5/26.
 */
function moveElement(elementID,final_x,final_y,interval) {//第一步是声明它的各个参数
    if (!document.getElementById)return false;
    if (!document.getElementById(elementID))return false;
    var elem = document.getElementById(elementID);
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);//给定元素的left和top属性转换为数值，并把转换结果分别赋值给变量xpos和ypos



    if(xpos==final_x&&ypos==final_y){//检查给定元素是否已经到达目的地
        return true;
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


    var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    movement=setTimeout(repeat,interval);
}
addLoadEvent(moveElement);