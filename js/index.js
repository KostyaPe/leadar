const swiper1 = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  initialSlide:1,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  observer: true,
  observeParents: true,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  autoplay: {
    delay: 3000
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 41,
      initialSlide:1,
    },
  }
});

const swiper2 = new Swiper('.testimonials-swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  initialSlide:1,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  observer: true,
  observeParents: true,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  autoplay: {
    delay: 3000
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
  }
});


let cardsSwiper = null;

function initSwiper() {
  if (window.innerWidth <= 768 && cardsSwiper === null) {
    cardsSwiper = new Swiper('.cardsSwiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
      },
    });
  } else if (window.innerWidth > 768 && cardsSwiper !== null) {
    cardsSwiper.destroy(true, true);
    cardsSwiper = null;
  }
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', () => {
  // swiper1.update();
  // swiper2.update();
  initSwiper();
});


document.addEventListener('click', (e) => {
  if (e.target.classList.contains('scroll-btn')) {
    const isMobile = window.innerWidth <= 768;

    const form = isMobile
      ? document.querySelector('.mobile-form')
      : document.querySelector('.desktop-form');

    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
});