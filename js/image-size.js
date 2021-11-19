const imagePreview = document.querySelector('.img-upload__preview');
const imageScaleUp = document.querySelector('.scale__control--bigger');
const imageScaleDown = document.querySelector('.scale__control--smaller');
const imageScaleValue = document.querySelector('.scale__control--value');

const setDefaultSize = () => {
  imageScaleValue.value = '100%';
  imagePreview.style.transform = `scale(${1})`;
};

const changeSize = () => {
  let DEFAULT_SIZE = 100;
  imageScaleUp.addEventListener('click', () => {
    if (DEFAULT_SIZE <= 75) {
      DEFAULT_SIZE += 25;
      imageScaleValue.value = `${DEFAULT_SIZE}%`;
      imagePreview.style.transform = `scale(${DEFAULT_SIZE / 100})`;
    }
  });

  imageScaleDown.addEventListener('click', () => {
    if (DEFAULT_SIZE >= 50) {
      DEFAULT_SIZE -= 25;
      imageScaleValue.value = `${DEFAULT_SIZE}%`;
      imagePreview.style.transform = `scale(${DEFAULT_SIZE / 100})`;
    }
  });
};
export { changeSize, setDefaultSize };
