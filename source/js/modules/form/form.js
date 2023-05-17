
const feedbackForm = document.querySelector('[data-form');
const inputName = document.querySelector('[data-validate-type="text"]');
const inputPhone = document.querySelector('[data-validate-type="phone"]');
const modal = document.querySelector('[data-modal]');

export function initSuccessSend() {
  feedbackForm.addEventListener('submit', () => {
    if (inputName.classList.contains('is-valid') && inputPhone.classList.contains('is-valid')) {
      inputName.removeAttribute('data-message-base');
      inputPhone.removeAttribute('data-message-base');
      feedbackForm.reset();
      modal.classList.add('is-active');
    }
  });

  const onDocumentKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      modal.classList.remove('is-active');
    }
  };

  document.addEventListener('click', () => {
    modal.classList.remove('is-active');
  });

  document.addEventListener('keydown', onDocumentKeyDown);
}
