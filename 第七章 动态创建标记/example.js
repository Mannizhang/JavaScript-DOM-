/**
 * Created by maryz on 2017/4/9.
 */
function insertParagraph(text) {
    var str="<p";
    str +=text;
    str +="</p>";
    document.write(str);
}
window.onload=function () {
    var testdiv = document.getElementById("testdiv");
    testdiv.innerHTML="<p>I inserted<em>this</em>content.</p>"
}