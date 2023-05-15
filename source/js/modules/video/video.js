const targetVideo = '<iframe width="560" height="315" src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="YouTube video player" allow="autoplay" frameborder="0" allowfullscreen></iframe>';

export function initVideo() {
  const videoContainer = document.querySelector('[data-video]');
  const videoButton = document.querySelector('[data-video-button]');

  videoContainer.addEventListener('click', () => {
    videoButton.remove();
    videoContainer.insertAdjacentHTML('afterbegin', targetVideo);
  });
}

