/**
 * Created by maryz on 2017/6/6.
 */
//要修改页面的所有video元素，删除其内置控件并且添加自定义的Play按钮
//找到页面中的video元素，然后对他们分别应用addControls函数
function createVideoControls() {
    var vids= document.getElementsByTagName('video');
    for (var i = 0; i < vids.length; i++){
        addControls = (vids[i]);
    }
}
//去掉其内置的控件，接着又创建了几个DOM对象，用来充当Play/Pause按钮，并把它们都添加为video元素的子元素。
function addControls(vid) {
    vid.removeAttribute('controls');

    vid.height = vid.videoHeight;
    vid.width = vid.videoWidth;
    vid.parentNode.style.height = vid.videoHeight + 'px';
    vid.parentNode.style.width = vid.videoWidth + 'px';

    var controls = document.createElement('div');
    controls.setAttribute('class', 'controls');

    var play = document.createElement('button');
    play.setAttribute('title', 'play');
    play.innerHTML = '&#x25BA';

    controls.appendChild(play);

    vid.parentNode.insertBefore(controls, vid);

}
//给play按钮添加一个onclick事件，以便单击播放影片
play.onclick = function () {
    if (vid.ended) {
        vid.currentTime = 0;
    }
    if (vid.paused) {
        vid.play();
    } else {
        vid.pause();
    }
};

//利用play、pause、ended事件来修改play按钮的状态，并在影片未暂停的情况下显示Pause按钮。
vid.addEventListener('play', function () {
    play.innerHTML = '&#x2590;&#x2590;';
    play.setAttribute('pause', true);
}, false);

vid.addEventListener('pause', function () {
    play.removeAttribute('paused');
    play.innerHTML = '&#x25BA;';
}, false);

vid.addEventListener('ended', function () {
    vid.pause();
}, false);


window.onload=function(){
    createVideoControls();
}
