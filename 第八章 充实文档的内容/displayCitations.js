/**
 * Created by maryz on 2017/5/6.
 */
function displayCitations() {
    var quotes = document.getElementsByTagName("blockquote");//第一步把文档里所有blockquote元素找出来
    for (var i = 0; i < quotes.length; i++) {//遍历这个集合
        if (!quotes[i].getAttribute("cite")) continue;
        var url = quotes[i].getAttribute("cite");
        var quoteChildren = quotes[i].getElementsByTagName("*");//变量quoteElements是一个数组，它包含当前blockquote元素所包含的全体元素节点
        if (quoteChildren.length < 1)continue;
        var elem = quoteChildren[quoteChildren.length - 1];


//创建链接
        var link = document.createElement("a");//用createElement方法创建一个"链接"元素
        var link_text = document.createTextNode("source");//用createTextNode方法创建一个内容为source的文本节点
        link.appendChild(link_text);//用appendChild方法把新的文本节点插入新链接
        link.setAttribute("href", url);//把href属性添加给新链接

//插入链接
        var superscript = document.createElement("sup");//创建一个sup元素并把它存入变量superscript
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}



