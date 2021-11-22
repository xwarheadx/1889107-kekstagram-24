import {isEscapeKey} from './utils.js';
const MESSAGE_SHOW_TIME = 5000;

const showLoadAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.color = 'white';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, MESSAGE_SHOW_TIME);
};

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessageModal();
  }
};
const onMessageClick = (evt) => {
  if (!evt.target.closest('.success__inner') && !evt.target.closest('.error__inner')) {
    closeMessageModal();
  }
};

function closeMessageModal() {
  const messageModal = document.querySelector('.success') || document.querySelector('.error');
  if (messageModal) {
    messageModal.remove();
  }

  document.removeEventListener('click', onMessageClick);
  document.removeEventListener('keydown', onMessageEscKeydown);
}

const renderSuccessMessage = () => {
  const messageModal = successTemplate.cloneNode(true);
  document.body.appendChild(messageModal);
  const messageModalButton = messageModal.querySelector('button');

  messageModalButton.addEventListener('click', () => {
    closeMessageModal();
  });
  document.addEventListener('click', onMessageClick);
  document.addEventListener('keydown', onMessageClick);
};

const renderErrorMessage = () => {
  const messageModal = errorTemplate.cloneNode(true);
  document.body.appendChild(messageModal);
  const messageModalButton = messageModal.querySelector('button');

  messageModalButton.addEventListener('click', () => {
    closeMessageModal();
  });
  document.addEventListener('click', onMessageClick);
  document.addEventListener('keydown', onMessageClick);
};

export {showLoadAlert, renderSuccessMessage, renderErrorMessage};
