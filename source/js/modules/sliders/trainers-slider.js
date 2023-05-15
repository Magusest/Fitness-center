import Swiper from '../../vendor/swiper';

export function getTrainerSlider() {
  const slider = new Swiper('.swiper-trainers', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  return slider;
}
