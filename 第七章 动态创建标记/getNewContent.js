/**
 * Created by maryz on 2017/4/20.
 */
function getNewContent() {
    var request = getHTTPObject();
    if (request) {
        request.open("GET", "example.txt", true);
        request.onreadystatechange = function () {
            if (request.readyState == 4);
            {
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }

        };


    request.send(null);
}
else{
    alert('Sorry，your brower doesn\'t support XMLHttpRequest');

}
}
addLoadEvent(getNewContent());



