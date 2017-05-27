/**
 * Created by maryz on 2017/5/26.
 */
addLoadEvent(positionMessage);
function positionMessage() {
if (!document.getElementById)return false;
if (!document.getElementById("message"))return false;
    var elem=document.getElementById("message");
    elem.style.position="absolute";
    elem.style.left="50px";
    elem.style.top="100px";
    elem.style.fontColor="red";
    movement("message",125,25,20);
}
