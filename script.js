const burgerMenu = document.querySelector(".nav-burger");
const navCLose = document.querySelector(".nav-close");
const navLink = document.querySelectorAll(".nav-link");
const mobileMenu = document.querySelector(".nav-menu-wrap-mobile");

burgerMenu.addEventListener("click", () => {
    mobileMenu.classList.add("visible");
    document.body.classList.add("body-overflow");
})

navCLose.addEventListener("click", () => {
    mobileMenu.classList.remove("visible");
    document.body.classList.remove("body-overflow");
})

navLink.forEach(n => n.addEventListener("click", () => {
    mobileMenu.classList.remove("visible");
    document.body.classList.remove("body-overflow");
})
)
/*
const openButton = document.querySelectorAll(".question-card");
const text = document.querySelectorAll(".question-card-disc");
const arrow = document.querySelectorAll(".questions-arrow");


openButton.forEach(n => n.addEventListener("click", function (e) { 
    this.lastElementChild.classList.toggle('visible');
    this.firstElementChild.lastElementChild.firstElementChild.classList.toggle("active");
}));

*/
/*accordion*/
const accordion = document.querySelectorAll(".question-card-title");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        let arrow = this.lastElementChild.firstElementChild;
        arrow.classList.toggle("active");
        let discription = this.nextElementSibling;
        if (discription.style.maxHeight) {
            discription.style.maxHeight = null;
        } else {
            discription.style.maxHeight = discription.scrollHeight + "px";
        }
    })
}

/*about*/

const aboutCard = document.querySelectorAll(".about-card");

for (let i = 0; i < aboutCard.length; i++) {
    aboutCard[i].addEventListener("click", function() {


        let wrap = document.querySelector(".about-cards-wrap");
        let active = wrap.children;

        for(let h = 0; h < active.length; h++) {

        active[h].classList.remove("active");
        let activeElem = active[h].children;
        for (let g = 0; g < activeElem.length; g++){
            activeElem[g].classList.remove('active');
        }
        }

        this.classList.add("active");
        let cardElem = this.children;
        for (let j = 0; j < cardElem.length; j++){
            cardElem[j].classList.add('active');
        }

    })
}

/*filter mobile*/
 
const filterButton = document.querySelector(".articles-filter-button");
const filterList = document.querySelector(".articles-filter-wrap");

filterButton.addEventListener("click", () => {
    filterList.classList.toggle("active");
})
