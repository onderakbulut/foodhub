document.querySelector('.menu-button').addEventListener('click',function(){
    slideToggle();
    document.querySelector('.menu-button').classList.toggle('is-active');
});


var slideOpen = true;
var heightChecked = false;
var initHeight = 0;

function slideToggle(e) {
    var mdiv = document.querySelector('.navbar-nav');
    if(!heightChecked) {
        initHeight = mdiv.scrollHeight;
        heightChecked = true;
    }
    if(slideOpen) {
        slideOpen = false;
        console.log(initHeight);
        mdiv.style.height = initHeight + 'px';
    }
    else {
        slideOpen = true;
        mdiv.style.height = '0px';
    }
}