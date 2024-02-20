// MOBILE HAMBURGER MENU //
const hamburger = document.getElementById("hamburger");
const lines = document.querySelectorAll("#hamburger div");
const mobileNav = document.querySelector(".mobile-links");
const links = document.querySelectorAll(".mobile-links li a");

const handleHamburger = () => {
  lines.forEach((line) => {
    line.classList.toggle("show");
  });
  hamburger.classList.toggle("show");
  mobileNav.classList.toggle("show");
};

links.forEach((link) => {
  link.addEventListener("click", () => {
    lines.forEach((line) => {
      line.classList.remove("show");
    });
    hamburger.classList.remove("show");
    mobileNav.classList.remove("show");
  });
});

hamburger.addEventListener("click", handleHamburger);

// PROCES SECTION LOGIKA ***************************************** //

const cards = document.querySelectorAll(".proces-left__card");
const title = document.querySelectorAll(".proces-left__title");
const greenLines = document.querySelectorAll(".green-line");
const images = document.querySelectorAll(".right-box__img");
const titles = document.querySelectorAll(".proces-left__title");
const paragraphs = document.querySelectorAll(".left-bottom__text");
const icons = document.querySelectorAll(".proces-left__image");

let index = 0;
let cancelled = false;
let myTimeout;

cards.forEach((card, indexNumber) => {
  card.addEventListener("click", () => {
    index = indexNumber;
    if (cancelled == true) {
      cancelled = false;
    } else {
      cancelled = true;
    }
    clearTimeout(myTimeout);
    animation(cancelled);
  });
});

const animation = (cancelled) => {
  if (cancelled) {
    if (index === cards.length) {
      index = 0;
    }
    cards.forEach((card) => {
      card.classList.remove("active-card");
      card.classList.remove("active-proces-left-wrapper");
    });
    greenLines.forEach((greenLine) => {
      greenLine.classList.remove("active-green-line");
    });
    images.forEach((image) => {
      image.classList.remove("active-img");
    });
    icons.forEach((icon) => {
      icon.classList.remove("active-icon");
    });
    titles.forEach((title) => {
      title.classList.remove("active-title");
    });
    paragraphs.forEach((paragraph) => {
      paragraph.classList.remove("active-text");
    });
    greenLines[index].classList.add("active-green-line");
    cards[index].classList.add("active-card");
    cards[index].classList.add("active-proces-left-wrapper");
    images[index].classList.add("active-img");
    icons[index].classList.add("active-icon");
    titles[index].classList.add("active-title");
    paragraphs[index].classList.add("active-text");

    index = index + 1;

    myTimeout = setTimeout(animation, 10000);
  }
  if (!cancelled) {
    if (index === cards.length) {
      index = 0;
    }
    cards.forEach((card) => {
      card.classList.remove("active-card");
      card.classList.remove("active-proces-left-wrapper");
    });
    greenLines.forEach((greenLine) => {
      greenLine.classList.remove("active-green-line");
    });
    images.forEach((image) => {
      image.classList.remove("active-img");
    });
    icons.forEach((icon) => {
      icon.classList.remove("active-icon");
    });
    titles.forEach((title) => {
      title.classList.remove("active-title");
    });
    paragraphs.forEach((paragraph) => {
      paragraph.classList.remove("active-text");
    });
    greenLines[index].classList.add("active-green-line");
    cards[index].classList.add("active-card");
    cards[index].classList.add("active-proces-left-wrapper");
    images[index].classList.add("active-img");
    icons[index].classList.add("active-icon");
    titles[index].classList.add("active-title");
    paragraphs[index].classList.add("active-text");

    index = index + 1;

    myTimeout = setTimeout(animation, 10000);
  }
};
animation(cancelled);

// FAQ SECTION LOGIKA -------------------------------------------- //
const pitanja = document.querySelectorAll(".pitanja-box__flex");
const pitanjaBox = document.querySelectorAll(".pitanja-box");
const plusevi = document.querySelectorAll("#plus");
const minusi = document.querySelectorAll("#minus");
const opisi = document.querySelectorAll(".pitanja-box__text");

pitanja.forEach((pitanje, index) => {
  pitanje.addEventListener("click", () => {
    pitanjaBox[index].classList.toggle("style");
    opisi[index].classList.toggle("visible");
    plusevi[index].classList.toggle("hidden");
    minusi[index].classList.toggle("hidden");
  });
});

// AUTOMATSKI MJENJANJE COPYRIGHT GODINE
const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();
