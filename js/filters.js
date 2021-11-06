import './nouislider/nouislider.js'
const imagePreview = document.querySelector('.img-upload__preview');
const effectSlider = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const hideFilter = (element) => element.classList.add('hidden');
noUiSlider.create(effectSlider, {
    range: {
        min: 0,
        max: 100,
    },
    start: 100,
    step: 0.1,
    connect: 'lower',
});
hideFilter(effectSlider);

const effectsList = document.querySelector('.effects__list');
let selectedFilter = '';
const onFilterChange = (evt) => {
    selectedFilter = evt.target.value;
    if (selectedFilter !== 'none') {
        imagePreview.className = '';
        imagePreview.classList.add('img-upload__preview');
        imagePreview.classList.add(`effects__preview--${selectedFilter}`);
        effectSlider.classList.remove('hidden');
        if (selectedFilter === 'chrome') {
            effectSlider.noUiSlider.updateOptions({
                range: {
                    min: 0,
                    max: 1,
                },
                start: 1,
                step: 0.1,
            });
            effectSlider.noUiSlider.on('update', (_, handle, unencoded) => {
                effectValue.value = unencoded[handle];
                imagePreview.style.filter = `grayscale(${effectSlider.noUiSlider.get()})`;
            });
        }
        else if (selectedFilter === 'sepia') {
            effectSlider.noUiSlider.updateOptions({
                range: {
                    min: 0,
                    max: 1,
                },
                start: 1,
                step: 0.1,
            });
            effectSlider.noUiSlider.on('update', (_, handle, unencoded) => {
                effectValue.value = unencoded[handle];
                imagePreview.style.filter = `sepia(${effectSlider.noUiSlider.get()})`;
            });
        }
        else if (selectedFilter === 'marvin') {
            effectSlider.noUiSlider.updateOptions({
                range: {
                    min: 0,
                    max: 100,
                },
                start: 100,
                step: 1,
            });
            effectSlider.noUiSlider.on('update', (_, handle, unencoded) => {
                effectValue.value = unencoded[handle];
                imagePreview.style.filter = `invert(${effectSlider.noUiSlider.get()}%)`;
            });
        }
        else if (selectedFilter === 'phobos') {
            effectSlider.noUiSlider.updateOptions({
                range: {
                    min: 0,
                    max: 3,
                },
                start: 3,
                step: 0.1,
            });
            effectSlider.noUiSlider.on('update', (_, handle, unencoded) => {
                effectValue.value = unencoded[handle];
                imagePreview.style.filter = `blur(${effectSlider.noUiSlider.get()}px)`;
            });
        }
        else if (selectedFilter === 'heat') {
            effectSlider.noUiSlider.updateOptions({
                range: {
                    min: 1,
                    max: 3,
                },
                start: 3,
                step: 0.1,
            });
            effectSlider.noUiSlider.on('update', (_, handle, unencoded) => {
                effectValue.value = unencoded[handle];
                imagePreview.style.filter = `brightness(${effectSlider.noUiSlider.get()})`;
            });
        }
    }
    else {
        imagePreview.className = '';
        imagePreview.classList.add('img-upload__preview');
        hideFilter(effectSlider);
        imagePreview.style.filter = '';
    }
};
effectsList.addEventListener('change', (evt) => {
    onFilterChange(evt);
});