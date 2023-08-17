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