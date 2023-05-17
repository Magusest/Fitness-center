import Swiper from '../../vendor/swiper';

export function getReviewsSlider() {
  const slider = new Swiper('.review__swiper', {
    direction: 'horizontal',

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  return slider;
}
