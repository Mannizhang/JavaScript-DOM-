/**
 * Created by maryz on 2017/4/19.
 */
function getHTTPObject() {
if(typeof XMLHttpRequest=="undefined")
    XMLHttpRequest=function () {
     try{return new ActiveXObject("Msxml2.XMLHttp.6.0");}
     catch (e){}
     try{return new ActiveXObject("Msxml2.XMLHttp.3.0");}
     catch (e){}
     try {return new ActiveXObject("Msxml2.XMLHttp");}
       catch (e){}
     return false;

    }
    return new XMLHttpRequest();
}