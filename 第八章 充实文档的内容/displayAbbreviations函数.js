/**
 * Created by maryz on 2017/4/29.
 */
function displayAbbreviations() {
    var abbreviations = document.getElementsByTagNameNS("abbr");
    if (abbreviations.length < 1)return false;
    var defs = new Array();
    for (var i = 0; i < abbreviations.length; i++) {
        var current_abbr =abbreviations[i];
        var definition = abbreviations[i].getAttribute("title");
        var key = abbreviations[i].lastChild.nodeValue;
        defs[key] = definition;
    }
}
/*定义列表*/
var dlist = document.createElement("dl");
for (key in defs) {/*利用一个for循环把某个数组的下标临时赋值给一个变量*/
    var definition = defs[key];/*可以利用它得到相应的数组元素的值*/
    /*创建相应的文本节点并把它们分别添加到新创建的dt和dd元素*/
    var dtitle = document.createTextNode(key);/*先创建dt元素*/
    var dtitle_text=document.createTextNode(key);/*用变量key的值去创建一个文本节点*/
    dtitle.appendChild(dtitle_text);
    var ddesc=document.createElement("dd");
    var ddesc_text=document.createTextNode(definition);
    ddesc.appendChild(ddesc_text);
    dlist.appendChild(dtitle);
    dlist.appendChild(ddesc);
}

/*插入这个定义列表*/
var header = document.createElement("h2");
var header_text = document.createTextNode("Abbreviations");
header.appendChild(header_text);
document.getElementsByTagName("body")[0]
document.body.appendChild(header);
document.body.appendChild(dlist);

/*检查兼容性*/
if(!document.getElementsByTagName())return false;
if(!document.createElement())return false;
if(!document.createTextNode())return false;




