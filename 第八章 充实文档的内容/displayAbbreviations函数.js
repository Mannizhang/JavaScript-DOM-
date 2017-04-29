/**
 * Created by maryz on 2017/4/29.
 */
function displayAbbreviations() {
    var abbreviations = document.getElementsByTagNameNS("abbr");
    if (abbreviations.length < 1)return false;
    var defs = new Array();
    for (var i = 0; i < abbreviations.length; i++) {
        var definition = abbreviations[i].getAttribute("title");
        var key = abbreviations[i].lastChild.nodeValue;
        defs[key] = definition;
    }
}
var dlist=document.createElement("dl");
for(key in defs){
    var definition=defs[key];
    var dtitle=document.createTextNode(key);
    dtitle.appendChild(dtitle_text);

}




var header=document.createElement("h2");
var header_text=document.createTextNode("Abbreviations");
header.appendChild(header_text);
document.getElementsByTagName("body")[0]
document.body.appendChild(header);
document.body.appendChild(dlist);
