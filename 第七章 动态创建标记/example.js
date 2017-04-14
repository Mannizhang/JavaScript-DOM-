/**
 * Created by maryz on 2017/4/9.
 */
function insertParagraph(text) {
    var str = "<p";
    str += text;
    str += "</p>";
    document.write(str);
}

window.onload = function () {
    var testdiv = document.getElementById("testdiv");
    testdiv.innerHTML = "<p>I inserted<em>this</em>content.</p>"
}
document.createElement(nodeName);
document.createElement("p");
<!--创建一个p元素-->
window.onload = function () {
    var para = document.createElement("p");
    var info = "nodeName:";
    info += para.nodeName;
    info += "nodeType";
    info += para.nodeType;
    alert(info);
}
parent.appendChild(Child);
var para = document.createElement("p");
var testdiv = document.getElementById("testdiv");
testdiv.appendChild(para);

window.onload = function () {
    var para = document.createElement("p");
    var testiv = document.getElementById("testiv");
    testiv.appendChild(para);
    var txt = document.createTextNode("Hello World");
    para.appendChild(txt);

}

