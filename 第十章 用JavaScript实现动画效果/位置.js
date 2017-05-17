/**
 * Created by maryz on 2017/5/17.
 */
function positionMessage() {
    if (!document.getElementById)return false;
    if (!document.getElementById("message"))return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "1000px";
}
