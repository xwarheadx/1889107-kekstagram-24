const isEscapeKey = (evt) => evt.key === 'Escape';
function randomNumber(min, max) {
    if (min >= 0 && max >= min) {
        const RANDZ = min + Math.random() * (max + 1 - min);
        return Math.floor(RANDZ);
    }
};
const body = document.querySelector('body');
const bodyModalOpen = () => {
    body.classList.add('modal-open');
};
const bodyModalClose = () => {
    body.classList.remove('modal-open');
};
export { isEscapeKey, bodyModalOpen, bodyModalClose, randomNumber }