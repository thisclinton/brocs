/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");
const themeToggleBtn = document.querySelector("#theme-toggle-btn");

/*========== MENU SHOW ==========*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*========== MENU HIDE ==========*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*========== REMOVE MENU ON NAV LINK CLICKS ============*/
const linkClick = () => {
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkClick));

/*========== SCROLL HEADER ============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
};

window.addEventListener("scroll", scrollHeader);

/*========== SWIPER ============*/

/*========== THEME CHANGE ============*/
const bodyElement = document.body;
const currentTheme = localStorage.getItem("currentTheme");

if (currentTheme) {
  bodyElement.classList.add("dark-theme");
}

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (bodyElement.classList.contains("dark-theme")) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme");
  }
});

/*========== CART SHOW/CLOSE ============*/
const cart = document.getElementById("cart");
const cartBtn = document.getElementById("cart-btn");
const cartClose = document.getElementById("cart-close");

if (cartBtn) {
  cartBtn.addEventListener("click", () => {
    cart.classList.add("show-cart");
  });
}

if (cartClose) {
  cartClose.addEventListener("click", () => {
    cart.classList.remove("show-cart");
  });
}

/*========== SWIPER ============*/
let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 24,
  loop: "true",

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

/* const selectElement = selector => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something Went wrong, make sure ${selector} exists or is spelt correctly.`);
};

const scrollHeader = () => {
    const headerElement = selectElement('.header');
    if(this.scrollY >= 15){
        headerElement.classList.add('activated');
    }else{
        headerElement.classList.remove('activated');
    }
};

window.addEventListener('scroll', scrollHeader); 


const OpenToggleIcon = selectElement('#open-toggle-btn');


const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    OpenToggleIcon.classList.toggle('activated');
}

OpenToggleIcon.addEventListener('click', toggleMenu);

 // THEME CHANGE

const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if(currentTheme){
    bodyElement.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');

    if(bodyElement.classList.contains('light-theme')){
        localStorage.setItem('currentTheme', 'themeActive');
    }else {
        localStorage.removeItem('currentTheme');
    }

});

//SEARCH BUTTON
const searchOpenBtn = selectElement('#search-icon-btn');
const searchCloseBtn = selectElement('#form-close-btn');
const searchFormContainer = selectElement('#search-form-container');

searchOpenBtn.addEventListener('click', () => searchFormContainer.classList.add('activated'));
searchCloseBtn.addEventListener('click', () => searchFormContainer.classList.remove('activated'));

window.addEventListener('keyup', event => {
    if(event.key === 'Escape'){
        searchFormContainer.classList.remove('activated');
    }
}) */
