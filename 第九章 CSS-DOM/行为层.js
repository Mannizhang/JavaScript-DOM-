/**
 * Created by maryz on 2017/5/8.
 */
var paras=document.getElementsByTagName("p");
for(var i=0;i<paras.length;i++){
    paras[i].onclick=function () {
        alert("You clicked on a paragraph.");
    }
}