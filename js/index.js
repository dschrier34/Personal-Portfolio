const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav_link');
const slides=document.querySelector('.project-slider-items').children;
const nextSlide=document.querySelector(".right-slide");
const prevSlide=document.querySelector(".left-slide");
let index = 0;
let totalSlides=slides.length;

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

nextSlide.onclick=function () {
    next("next");
}
prevSlide.onclick=function () {
    next("prev");
}

function next(direction){
    if(direction=="next"){
        index++;
        if(index==totalSlides){
            index=0;
        }
    }else {
        if(index==0){
            index=totalSlides-1;
        }else {
            index--;
        }
    }
    for(i=0; i<slides.length; i++){
        slides[i].classList.remove("active");
    }
    
    slides[index].classList.add("active");
}

