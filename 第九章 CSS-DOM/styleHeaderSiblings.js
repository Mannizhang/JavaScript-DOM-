/**
 * Created by maryz on 2017/5/13.
 */
function addClass(element,value) {
    if(!element.className){
        element.className=value;
    }else{
        newClassName=element.className;
        newClassName+="";
        newClassName+=value;
        element.className=newClassName;
    }

}
function styleHeaderSiblings() {
    if (!document.getElementsByTagName)return false;
    var headers = document.getElementsByTagName("h1");
    /*用getElementTagName的方法把所有h1元素找出来*/
    var elem;
    for (var i = 0; i < headers.length; i++) {/*遍历这个节点集合里的所有元素*/
        elem = getNextElement(headers[i].nextSibling);
        /*把当前h1元素的nextSibling节点作为参数传递给getNextElemet函数*/
      addClass(elem,"intro");
    }


}
/*文档的下一个节点可以用nextSibling属性查找出来*/
function getNextElement(node) {
    if (node.nodeType == 1) {
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
}


addLoadEvent(styleHeaderSiblings);