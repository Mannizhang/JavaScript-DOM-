# Ajax
- 用于概括异步加载页面内容技术
- 使用Ajax就可以做到更新页面中的一小部分，而其他内容都不用加载，用户仍然像往常一样点击链接。
- **Ajax的主要优势就是对页面的请求以异步方式发送到服务器，而服务器不会用整个页面来响应请求，它会在后台处理请求，与此同时用户还能继续浏览页面并与页面交互。**
## XMLHttpRequest创建对象
- Ajax技术的核心就是XMLHttpRequest对象
- 这个对象充当着浏览器中的脚本(客户端)与服务器之间的中间人的角色。
- Javascript通过这个对象可以自己发送请求，同时也自己处理响应。
- **不同浏览器实现XMLHttpRequest对象的方式不太一样**/**所有现代浏览器（IE7+、Firefox、Chrome、Safari 以及 Opera）均内建 XMLHttpRequest 对象。**
-----------------------------------------------------------------------------------------------
## XMLHttpRequest请求
1. XMLHttpRequest对象用于和服务器交换数据
**向服务器发送请求**如需将请求发送到服务器，我们使用XMLHttpRequest对象的open()和send()方法
**get还是post**与post相比get会简单一点。
- 以下情况必须用post：
- 无法使用缓存文件（更新服务器上的文件或数据库）
- 向服务器发送大量数据（POST 没有数据量限制）
- 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠
- 如果您希望通过 GET 方法发送信息，请向 URL 添加信息
**url-服务器上的文件**open() 方法的 url 参数是服务器上文件的地址
- xmlhttp.open("GET","ajax_test.asp",true);
- 该文件是可以是任何类型的文件
**异步 - True 或 False？**
- AJAX 指的是异步 JavaScript 和 XML（Asynchronous JavaScript and XML）
- **XMLHttpRequest 对象如果要用于 AJAX 的话，其 open() 方法的 async 参数必须设置为 true:xmlhttp.open("GET","ajax_test.asp",true);**
**Async = true**
- 当使用 async=true 时，请规定在响应处于 onreadystatechange 事件中的就绪状态时执行的函数
**Async = false**
- 如需使用 async=false，请将 open() 方法中的第三个参数改为 false:xmlhttp.open("GET","test1.txt",false);
-------------------------------------------------------------------------------------------------------
#XMLHttpRequest响应
- 服务器响应
- 如需获得来自服务器的响应，请使用 XMLHttpRequest 对象的 responseText(获取字符串形式的响应数据) 或 responseXML(获得 XML 形式的响应数据。) 属性。
- **responseText**
- 如果来自服务器的响应并非XML,用responseText.
- **responseXML**
- 如果来自服务器的响应是XML，用responseXML.请求books.xml文件，并解释响应。
--------------------------------------------------------------------------------------------------------
## onreadystatechange事件


## 渐进增强与Ajax
## Hijax