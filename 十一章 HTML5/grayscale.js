/**
 * Created by maryz on 2017/6/1.
 */
function converToGS(img) {
    if(!Modernizr.canvas)return;
    img.color=img.src;
    img.grayscale=createGSCanvas(img);


}