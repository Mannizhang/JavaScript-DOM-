/**
 * Created by maryz on 2017/5/6.
 */
function displayCitations() {
    var quotes = document.getElementsByTagName("blockquote");//第一步把文档里所有blockquote元素找出来
    for (var i = 0; i < quotes.length; i++);//遍历这个集合
    if (!quotes[i].getAttribute("cite"))continue;
    var url = quotes[i].getAttribute("cite");
}

var quoteElements=quotes[i].getElementsByTagName("*");//变量quoteElements是一个数组，它包含当前blockquote元素所包含的全体元素节点
var elem=quoteElements[quoteElements.length-1];
for(var i=0;i<quotes.length;i++);
    if(!quotes[i].getAttribute("cite"))continue;
