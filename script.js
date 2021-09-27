var progressBar = document.getElementById('progress-bar');
var container = document.getElementById('container');
var layerOne = document.getElementById('layerOne');
var layerTwo = document.getElementById('layerTwo');
var layerThree = document.getElementById('layerThree');
var layerFour= document.getElementById('layerFour');
var layerFive = document.getElementById('layerFive');
var layerSix = document.getElementById('layerSix');

var containerPos = {w: 1000, h: 1845};
var layerOnePos = {x: 0, y: 0, w: 1250, h: 156.6};
var layerTwoPos = {x: 0, y: 0, w: 1250, h: 156.6};
var layerThreePos = {x: 0, y: 0, w: 1250, h: 156.6};
var layerFourPos = {x: 0, y: 0, w: 1250, h: 156.6};
var layerFivePos = {x: 0, y: 0, w: 1250, h: 156.6};
var layerSixPos = {x: 0, y: 0, w: 1250, h: 156.6};

window.scrollTo(0,0);

window.addEventListener("scroll", onScroll);
function onScroll(evt) {
    var currentWidth = window.scrollY / (container.scrollHeight - window.innerHeight) * 100;

    progressBar.style.width = currentWidth + "%";

    // var bgSectionOne = document.getElementById('sectionOne');
    // var bgSectionTwo = document.getElementById('sectionTwo');

    // if (window.scrollY + 800 >= bgSectionTwo.offsetTop) {
    //     console.log('change');
    //     bgSectionOne.style.backgroundColor = "black";
    // }
}

window.addEventListener("mousemove", onMouseMove);
function onMouseMove(evt) {
    var mouse = {x: evt.pageX - container.offsetLeft, y: evt.pageY - container.offsetTop};

    layerOnePos.x = (-mouse.x * 0.08) + containerPos.w/2 - layerOnePos.w/2;
    layerOne.style.left = layerOnePos.x + 'px';

    layerTwoPos.x = (-mouse.x * 0.07) + containerPos.w/2 - layerTwoPos.w/2;
    layerTwo.style.left = layerTwoPos.x + 'px';

    layerThreePos.x = (-mouse.x * 0.06) + containerPos.w/2 - layerThreePos.w/2;
    layerThree.style.left = layerThreePos.x + 'px';

    layerFourPos.x = (-mouse.x * 0.05) + containerPos.w/2 - layerFourPos.w/2;
    layerFour.style.left = layerFourPos.x + 'px';

    layerFivePos.x = (-mouse.x * 0.04) + containerPos.w/2 - layerFivePos.w/2;
    layerFive.style.left = layerFivePos.x + 'px';

    layerSixPos.x = (-mouse.x * 0.03) + containerPos.w/2 - layerSixPos.w/2;
    layerSix.style.left = layerSixPos.x + 'px';
}   