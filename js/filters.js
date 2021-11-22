import './nouislider.js';
const FILTERS = {
  chrome: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'grayscale',
    unit: '',
  },

  sepia: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'sepia',
    unit: '',
  },

  marvin: {
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
    style: 'invert',
    unit: '%',
  },

  phobos: {
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'blur',
    unit: 'px',
  },

  heat: {
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'brightness',
    unit: '',
  },
};
const imagePreview = document.querySelector('.img-upload__preview');
const effectSlider = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const effectElementBlock = document.querySelector('.effect-level');
const hideFilter = (element) => element.classList.add('hidden');
const effectsList = document.querySelector('.effects__list');
const defaultFilterChecked = effectsList.querySelector('input[value="none"]');
let selectedFilter = '';

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

const applyFilter = (filter) => {
  effectElementBlock.classList.remove('hidden');
  effectSlider.noUiSlider.updateOptions(filter.options);
  effectSlider.noUiSlider.on('update', (values, handle) => {
    imagePreview.style.filter = `${filter.style}(${values[handle]}${filter.unit})`;
    effectValue.value = values[handle];
  });
};


const changeFilter = (evt) => {
  selectedFilter = evt.target.value;
  if (selectedFilter !== 'none') {
    imagePreview.className = '';
    imagePreview.classList.add('img-upload__preview');
    imagePreview.classList.add(`effects__preview--${selectedFilter}`);
    effectSlider.classList.remove('hidden');
    applyFilter(FILTERS[selectedFilter]);
  } else {
    imagePreview.className = '';
    imagePreview.classList.add('img-upload__preview');
    hideFilter(effectSlider);
    imagePreview.style.filter = '';
  }
};
effectsList.addEventListener('change', (evt) => {
  changeFilter(evt);
});

const setDefaultFilter = () => {
  imagePreview.className = '';
  imagePreview.classList.add('img-upload__preview');
  hideFilter(effectSlider);
  imagePreview.style.filter = '';
  defaultFilterChecked.checked = true;
  effectsList.removeEventListener('change', changeFilter);
};
export { setDefaultFilter };
