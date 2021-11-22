const SCALE_STEP = 25;
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const imagePreview = document.querySelector('.img-upload__preview');
const imageScaleUp = document.querySelector('.scale__control--bigger');
const imageScaleDown = document.querySelector('.scale__control--smaller');
const imageScaleValue = document.querySelector('.scale__control--value');

const toScaleUp = () => {
  let newScaleValue = parseInt(imageScaleValue.value, 10) + SCALE_STEP;
  if (newScaleValue > MAX_SCALE) {
    newScaleValue = MAX_SCALE;
  }
  imageScaleValue.value = `${newScaleValue}%`;
  imagePreview.style.transform = `scale(${newScaleValue}%)`;
};

const toScaleDown = () => {
  let newScaleValue = parseInt(imageScaleValue.value, 10) - SCALE_STEP;
  if (newScaleValue < MIN_SCALE) {
    newScaleValue = MIN_SCALE;
  }
  imageScaleValue.value = `${newScaleValue}%`;
  imagePreview.style.transform = `scale(${newScaleValue}%)`;
};

const changeSize = () => {
  imageScaleUp.addEventListener('click', toScaleUp);
  imageScaleDown.addEventListener('click', toScaleDown);
};

const setDefaultSize = () => {
  imageScaleValue.value = `${100}%`;
  imagePreview.style.transform = `scale(${1})`;
  imageScaleDown.removeEventListener('click', changeSize);
  imageScaleUp.removeEventListener('click', changeSize);
};
export { changeSize, setDefaultSize };
