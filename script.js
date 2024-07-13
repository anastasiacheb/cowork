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

const backToTopButton = document.querySelector(".back-to-top");

backToTopButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
})

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > document.documentElement.clientHeight) {
        backToTopButton.classList.add("visible");
    } else {
        backToTopButton.classList.remove("visible");
    }
})



/*clients amimation*/

window.addEventListener("scroll", animateCards);

function animateCards() {
    for (let i = 0; i < clientCards.length; i++) {
        if (isVisible(clientCardsWrap)) {
            clientCards[i].classList.remove("clients-card-not-viewed");
            clientCards[i].classList.add("clients-card-viewed");
        }
        
    }
}

window.addEventListener("scroll", animateBlocks);

const docSection = document.querySelectorAll(".animated-block");


function animateBlocks() {
    for (let i = 0; i < docSection.length; i++) {
        if (isVisible(docSection[i])) {
            docSection[i].classList.add('inview');
        }
    }
}

function isVisible(elem) {

    let coords = elem.getBoundingClientRect();

    let windowHeight = document.documentElement.clientHeight;

    let topVisible = coords.top < 500 

    return topVisible 
  }

  const docHeader = document.querySelectorAll(".top-animated-block");

  window.addEventListener("load", () => {
    for (let i = 0; i < docHeader.length; i++) {
        docHeader[i].classList.add("inview");
    }
  })

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

/*blog filter*/

const filterButtons = document.querySelectorAll(".button-filter");
const acticleCards = document.querySelectorAll(".article-card");

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function() {
        for (let h = 0; h < filterButtons.length; h++) {
            filterButtons[h].classList.remove("filter-active");
        };
        this.classList.add("filter-active");
        let buttonTag = this.innerHTML;
        if (buttonTag == "All Posts") {
            for (let g = 0; g < acticleCards.length; g++) {
                acticleCards[g].classList.remove("article-card-hidden");
            };
        } else {
            for (let g = 0; g < acticleCards.length; g++) {
                acticleCards[g].classList.add("article-card-hidden");
                let articleTag = acticleCards[g].firstElementChild.nextElementSibling.firstElementChild.firstElementChild.innerHTML;
                if (buttonTag == articleTag) {
                    acticleCards[g].classList.remove("article-card-hidden");
                }
            };
        }
    });
}

/*const filterButton = document.querySelector(".articles-filter-button");
const filterList = document.querySelector(".articles-filter-wrap");

filterButton.addEventListener("click", () => {
    filterList.classList.toggle("active");
});*/


/*mobile carusel*/

let clientCardsWrap = document.querySelector(".carusel__wrap");
let clientCards = document.querySelectorAll(".clients-card");
let buttonLeft = document.querySelector(".left-arrow");
let buttonRight = document.querySelector(".right-arrow");

let position = 0;
let cardWidth = 95;

buttonRight.addEventListener("click", shiftToLeft);
buttonLeft.addEventListener("click", shiftToRight);


function shiftToLeft() {
    buttonLeft.classList.remove("arrow-inactive");

    position -= cardWidth;
    position = Math.max(position, -cardWidth * (clientCards.length - 1));
    clientCardsWrap.style.marginLeft = position + 'vw';

    if (position == -cardWidth * (clientCards.length - 1)) {
        buttonRight.classList.add("arrow-inactive");
    };
};

function shiftToRight() {
    buttonRight.classList.remove("arrow-inactive");

    position += cardWidth;
    position = Math.min(position, 0);
    clientCardsWrap.style.marginLeft = position + 'vw';

    if (position == 0) {
        buttonLeft.classList.add("arrow-inactive");
    };
}
