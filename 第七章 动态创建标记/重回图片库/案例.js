

function showPic(whichpic){
    if(!document.getElementById("placeholder")){return false;}
        var source=whichpic.getAttribute("href");
        var placeholder=document.getElementById("placeholder");
        placeholder.setAttribute("src",source);
        if(document.getElementById("description")){
            var text=whichpic.getAttribute("title");
            var description=document.getElementById("description");
            description.firstChild.nodeValue=text;
            }
        return true;
    }
function prepareGallery(){
    if(!document.getElementById){
        return false;}
        if(!document.getElementsByTagName){
            return false;}
            if(!document.getElementById("imagegallery")){
                return false;}
                var gallery=document.getElementById("imagegallery");
                var links=gallery.getElementsByTagName("a");
                for(var i=0;i<links.length;i++){
                    links[i].onclick=function(){
                      return!showPic(this);//或使用三元操作符：return showPic(this)?false:true;

                        }
                }
        }
//以下为 addLoadEvent函数代码，共享onload事件
function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
        }else{
            window.onload=function(){
                oldonload();
                func();
                }
            }
    }
var placeholder = document.createElement("img");
placeholder.setAttribute("id", "placeholder");
placeholder.setAttribute("scr", image / placeholder.jpg);
placeholder.setAttribute("alt", "my image gallery");
var description = document.createElement("p");
description.setAttribute("id", description);
var desctext = document.createTextNode("choose an image");
description.appendChild(desctext);
document.getElementsByTagName("body")[0].appendChild(placeholder);
document.getElementsByClassName("body")[0].appendChild(description);


function preparePlaceholder() {
if(!document.createElement)return false;
    if(!document.createTextNode)return false;
    if(!document.getElementById)return false;
    if(!document.getElementById("imagegallery"))return false;
    var placeholder=document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("scr","images/placeholder.img");
    placeholder.setAttribute("alt","my image gallery");
    var description=document.createElement("p");
    description.setAttribute("id","description");
    var desctext=document.createTextNode("choose a image");
    description.appendChild(desctext);
    var gallery=document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}