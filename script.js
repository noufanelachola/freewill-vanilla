let menu = document.getElementsByClassName("menu")[0];
let toggImg = document.getElementsByClassName("toggImg")[0];
let links = document.getElementsByClassName("links")[0];
let linksArray = document.querySelectorAll(".link");
let menuSrc;

const toggleFunc = () => {
    links.classList.toggle("show");
    menuSrc = links.classList.contains("show") ? "assets/close.svg" : "assets/menu.svg";
    toggImg.src = menuSrc;    
}

menu.addEventListener("click",toggleFunc);

linksArray.forEach((link,i) => {
    link.addEventListener("click",toggleFunc);
});



// -----------SWIPER_1----------
const swiper = new Swiper("#swiper-1", {
        slidesPerView: 1,
        spaceBetween: 30,
        // centeredSlides:true,
        autoplay: {
            delay: 1500, 
            disableOnInteraction: false,
            stopOnLastSlide: false,
        },
        allowTouchMove: false,
        loop:true
       
});

const swiper2 = new Swiper("#team #swiper-2",{
    slidesPerView: "auto",
    spaceBetween: 10,
    navigation: {
        nextEl:".swiper-2-custom-nav .nav-right",
        prevEl:".swiper-2-custom-nav .nav-left"
    },

});
