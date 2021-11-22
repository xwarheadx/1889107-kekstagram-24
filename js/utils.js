const isEscapeKey = (evt) => evt.key === 'Escape';
const getRandomNumber = (min, max) => {
  if (min >= 0 && max >= min) {
    const RANDZ = min + Math.random() * (max + 1 - min);
    return Math.floor(RANDZ);
  }
};

const bodyModalOpen = () => {
  document.body.classList.add('modal-open');
};
const bodyModalClose = () => {
  document.body.classList.remove('modal-open');
};
export { isEscapeKey, bodyModalOpen, bodyModalClose, getRandomNumber };
