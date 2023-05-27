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

const swiper = new Swiper('.myswiper', {
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 77,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 50
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 77
        }

    }
});


var containerEl = document.querySelector('.mixitup');
var mixer = mixitup(containerEl, {
    animation: {
        effects: 'fade scale(0.5)'
    },
    selectors: {
        target: '.mix',
        control: '[data-mixitup-control]'
    }
});

const el = document.querySelector("header")
const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(el);