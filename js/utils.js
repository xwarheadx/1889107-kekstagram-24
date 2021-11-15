const isEscapeKey = (evt) => evt.key === 'Escape';
const body = document.querySelector('body');

const bodyModalOpen = () => {
    body.classList.add('modal-open');
};

const bodyModalClose = () => {
    body.classList.remove('modal-open');
};
export { isEscapeKey, bodyModalOpen, bodyModalClose }