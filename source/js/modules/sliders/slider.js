import Swiper from '../../vendor/swiper';
const trainersSwiper = document.querySelector('[data-slider="trainer"]');

export const initSlider = () => {
  if (trainersSwiper) {
    (() =>
      new Swiper('.trainers__swiper', {
        direction: 'horizontal',
        loop: true,

        navigation: {
          nextEl: '.trainers__button--next',
          prevEl: '.trainers__button--prev',
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      })
    )();
  }

  new Swiper('.review__swiper', {
    direction: 'horizontal',
    slidesPerView: 1,

    navigation: {
      nextEl: '.review__button--next',
      prevEl: '.review__button--prev',
    },
  })();
};
