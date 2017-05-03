/**
 * Created by maryz on 2017/5/3.
 */
function  addLoadEvent(func) {
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else{
        window.onload=function () {
            oldonload();
            func();
        }
    }

}
addLoadEvent(displayAbbreviations);