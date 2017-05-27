/**
 * Created by maryz on 2017/5/26.
 */
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof oldonload != 'function'){
        window.onload= func;
    }
    else{
        oldonload();
        func();
    }
}

