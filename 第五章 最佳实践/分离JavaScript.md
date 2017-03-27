# 分离JavaScript
- 演示行为和结构分离开来
- JavaScript语言并不要求事件必须在HTML文档里处理，可以在外部JavaScript文件里把一个事件添加到HTML文档中的某个元素上
- element.event=action...
- 把应该获得这个事件的元素确定下来，这个问题可以利用class或者id属性来解决
> getElementById(id).event=action
- 可以用getElementByTagName和getAttribute把事件添加到有着特定属性的一组元素上

## 步骤
1. 把文档里的所有链接全放入一个数组里。
2. 遍历数组。
3. 如果某个链接的class属性等于popup，就说明这个链接在被点击时将调用popUp（）函数。
> var links = document.getElementsByTagName("a");

>   for ( var i = 0 ; i<links.length ;  i ++){

>        if ( links[i].className == "popup"){

>                links[i].onclick = function(){

>                     popUp(this.getAttribute("href"));

>                     return false;

>                 }

>         }

>    }