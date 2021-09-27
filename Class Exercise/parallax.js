var onion = document.getElementById('onion');
var container = document.getElementById('container');

var layerOne = document.getElementById('layerOne');
var layerTwo = document.getElementById('layerTwo');
var layerThree = document.getElementById('layerThree');

var containerPos = {w: 512, h: 512};
var onionPos = {x: 0, y: 0, w: 50, h: 50};
var layerOnePos = {x: 0, y: 0, w: 1000, h: 512};
var layerTwoPos = {x: 0, y: 0, w: 1000, h: 512};
var layerThreePos = {x: 0, y: 0, w: 1000, h: 512};

window.addEventListener("mousemove", onMouseMove);
//on device you use "touchmove" not "mousemove"

function onMouseMove(evt) {
    var mouse = {x: evt.pageX - container.offsetLeft, y: evt.pageY - container.offsetTop};

    onionPos.x = mouse.x - onionPos.w / 2 ;
    onionPos.y = mouse.y - onionPos.h / 2 ;
    onion.style.left = onionPos.x + 'px';
    onion.style.top = onionPos.y + 'px';

    layerOnePos.x = (-mouse.x * 0.08) + containerPos.w/2 - layerOnePos.w/2;
    layerOne.style.left = layerOnePos.x + 'px';

    layerTwoPos.x = (-mouse.x * 0.03) + containerPos.w/2 - layerTwoPos.w/2;
    layerTwo.style.left = layerTwoPos.x + 'px';

    layerThreePos.x = (-mouse.x * 0.006) + containerPos.w/2 - layerThreePos.w/2;
    layerThree.style.left = layerThreePos.x + 'px';
}   
