const imagePreview = document.querySelector('.img-upload__preview');
const imageScaleUp = document.querySelector('.scale__control--bigger');
const imageScaleDown = document.querySelector('.scale__control--smaller');
const imageScaleValue = document.querySelector('.scale__control--value');

const changeSize = () => {
    let defaultSize = 100;
    imageScaleUp.addEventListener('click', () => {
        if (defaultSize <= 75) {
            defaultSize += 25;
            imageScaleValue.value = `${defaultSize}%`;
            imagePreview.style.transform = `scale(${defaultSize / 100})`;
        }
    });

    imageScaleDown.addEventListener('click', () => {
        if (defaultSize >= 50) {
            defaultSize -= 25;
            imageScaleValue.value = `${defaultSize}%`;
            imagePreview.style.transform = `scale(${defaultSize / 100})`;
        }
    })
};
export { changeSize };