
//以下为 addLoadEvent函数代码，共享onload事件
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
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {/*检查目标元素是不是parent的最后一个子元素，即比较parent元素的lastchild属性值与目标元素是否存在等于关系*/
        parent.appendChild(newElement);
        /*如果是，就用appendChild方法把新元素追加到parent元素上，这样新元素就恰好被插入到目标元素之后*/
    } else {
        parent.insertBefore(newElement, targetElement, nextSibling);
    }
}

function preparePlaceholder() {
    if (!document.createElement)return false;
    if (!document.createTextNode)return false;
    if (!document.getElementById)return false;
    if (!document.getElementById("imagegallery"))return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("scr", "images/placeholder.img");
    placeholder.setAttribute("alt", "my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext = document.createTextNode("choose a image");
    description.appendChild(desctext);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
}
function prepareGallery() {
    if (!document.getElementById)return false;
    if (!document.getElementsByTagName)return false;
    if (!document.getElementById("imagegallery"))return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return !showPic(this);//或使用三元操作符：return showPic(this)?false:true;

        }
        links[i].onkeypress=links[i].onclick();
    }
}
function showPic(whichpic) {
    if(!document.getElementById("placeholder"))return true;
        var source=whichpic.getAttribute("href");
        var placeholder=document.getElementById("placeholder");
        placeholder.setAttribute("scr",source);
        if(!document.getElementById("description"))return false;
        if(whichpic.getAttribute("title")) {
            var text = whichpic.getAttribute("title");
        }else{
            var text="";
        }
        var description=document.getElementById("description");
        if(description.firstChild.nodeType==3){
            description.firstChild.nodeValue=text;
        }
        return false;
}
addLoadEvent(prepareGallery());
addLoadEvent(preparePlaceholder());
