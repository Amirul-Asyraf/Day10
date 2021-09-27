//target element
var progressBar = document.getElementById('progress-bar');
var container = document.getElementById('container');
var sectionOne = document.getElementById('sectionOne');
var sectionTwo = document.getElementById('sectionTwo');
var itemHolder = document.getElementById('item-holder');

//everytime refresh, the window will be scrolled back to the top
window.scrollTo(0,0);

// window.onload = function() {
//     console.log('sad');
//     window.scrollTo(0,0);
// }

//Function for progress-bar scrolling
window.addEventListener("scroll", onScroll);
function onScroll(evt) {
    // //browser height
    // console.log("window height: ", window.innerHeight); 
    // // browser sroll Y value
    // console.log("window.scrollY: ", window.scrollY); 
    // // container available scroll height
    // console.log("container scrollHeight: ", container.scrollHeight); 

    //console.log("sectionTwo offSetTop", sectionTwo.offsetTop);

    var currentWidth = window.scrollY / (container.scrollHeight - window.innerHeight) * 100;

    progressBar.style.width = currentWidth + "%";

    //section Two
    // if(window.scrollY >= sectionTwo.offsetTop) {
    //     console.log("You reached section 2");
    //     itemHolder.style.display = 'flex';
    // } else {
    //     console.log("You are above section two!");
    //     itemHolder.style.display = 'none';
    // }

    var itemList = document.querySelectorAll('.item');
    console.log(itemList);

    // if(window.scrollY + 500 >= itemList[0].offsetTop) {
    //     itemList[0].classList.add('fadeIn');

    //     if (window.scrollY >= itemList[0].offsetTop) {
    //         itemList[0].classList.remove('fadeIn');
    //         itemList[0].classList.add('fadeOut');
    //     }
    // } 
    
    // if (window.scrollY + 500>= itemList[1].offsetTop) {
    //     itemList[1].classList.add('fadeIn');

    //     if (window.scrollY >= itemList[1].offsetTop) {
    //         itemList[1].classList.remove('fadeIn');
    //         itemList[1].classList.add('fadeOut');
    //     }
    // }

    // if (window.scrollY + 500>= itemList[2].offsetTop) {
    //     itemList[2].classList.add('fadeIn');

    //     if (window.scrollY >= itemList[2].offsetTop) {
    //         itemList[2].classList.remove('fadeIn');
    //         itemList[2].classList.add('fadeOut');
    //     }
    // }

    // if (window.scrollY + 500>= itemList[3].offsetTop) {
    //     itemList[3].classList.add('fadeIn');

    //     if (window.scrollY >= itemList[3].offsetTop) {
    //         itemList[3].classList.remove('fadeIn');
    //         itemList[3].classList.add('fadeOut');
    //     }
    // }

    for (var i = 0; i <itemList.length; i++) {
        if(window.scrollY + 500 >= itemList[i].offsetTop) {
            itemList[i].classList.add('fadeIn');

            if (window.scrollY >= itemList[i].offsetTop) {
                itemList[i].classList.remove('fadeIn');
                itemList[i].classList.add('fadeOut');
            }
        }
    }
}