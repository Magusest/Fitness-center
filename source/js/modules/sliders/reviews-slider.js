import Swiper from '../../vendor/swiper';

export function getReviewsSlider() {
  const slider = new Swiper('.swiper-reviews', {
    direction: 'horizontal',

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  return slider;
}
