/**
 * Created by maryz on 2017/5/3.
 */
function displayCitations() {
    if (!document.getElementsByTagName || !document.createElement
        || !document.createTextNode);
    return false;
    //取得所有引用
    var quotes = document.getElementsByTagName("blockquote");
    for (var i = 0; i < quotes.length; i++);
    {
        if (!quotes[i].getAttribute("cite")) continue;
        var url = quotes[i].getAttribute("cite");
        var quoteChildren = quotes[i].getElementsByTagName('*');
        if (quoteChildren.length < 1) continue;
        var elem = quoteChildren[quoteChildren.length - 1];

//创建标记
        var link = document.createElement("a");
        var link_text = document.createElement("a");
        link.appendChild(link_text);
        link.setAttribute("href", url);
        var superscript = document.createElement("sup");
        superscript.appendChild(superscript);

//把标记添加到引用中的最后一个元素节点
        elem.appendChild(superscript);
    }
}

