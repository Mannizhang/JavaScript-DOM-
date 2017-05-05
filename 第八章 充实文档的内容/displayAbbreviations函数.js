/**
 * Created by maryz on 2017/4/29.
 */
function displayAbbreviations() {
/*检查兼容性*/
if(!document.getElementsByTagName)return false;
if(!document.createElement)return false;
if(!document.createTextNode)return false;
    var abbreviations = document.getElementsByTagNameNS("abbr");
    if (abbreviations.length < 1)return false;
    var defs = new Array();
    for (var i = 0; i < abbreviations.length; i++) {
        var current_abbr =abbreviations[i];
        if(current_abbr.childNodes.length<1)continue;/*如果当前元素没有子节点，就立刻开始下一次循环*/
        var definition = abbreviations[i].getAttribute("title");
        var key = abbreviations[i].lastChild.nodeValue;
        defs[key] = definition;
    }
}
/*创建定义列表*/
var dlist = document.createElement("dl");
//遍历定义
for (key in defs) {/*利用一个for循环把某个数组的下标临时赋值给一个变量*/
    var definition = defs[key];/*可以利用它得到相应的数组元素的值*/
    /*创建相应的文本节点并把它们分别添加到新创建的dt和dd元素*/
    //创建定义标题
    var dtitle = document.createTextNode(key);/*先创建dt元素*/
    var dtitle_text=document.createTextNode(key);/*用变量key的值去创建一个文本节点*/
    dtitle.appendChild(dtitle_text);
    //创建定义描述
    var ddesc=document.createElement("dd");
    var ddesc_text=document.createTextNode(definition);
    ddesc.appendChild(ddesc_text);
   //把它们添加到定义列表
    dlist.appendChild(dtitle);
    dlist.appendChild(ddesc);
}


var header = document.createElement("h2");//先创建一个h2元素节点
var header_text = document.createTextNode("Abbreviations");//再创建一个内容为Abbreviations的文本节点
header.appendChild(header_text);//然后把文本节点添加到h2元素节点
//把标题添加到页面主体
document.body.appendChild(header);
//把定义列表添加到页面主体
document.body.appendChild(dlist);

addLoadEvent(displayAbbreviations);

window.onload=displayAbbreviations();
function  addLoadEvent(func) {
    var oldonload=window.onload;
    if(typeof window.onload!='fuction'){
        window.onload=function () {
            else{
                window.onload=function () {
                    oldonload();
                    func;

                }
            }

        }
    }

}



