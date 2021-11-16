import { randomNumber } from "./utils.js";
const thumbnailFilter = document.querySelector('.img-filters');
const thumbnailFilterForm = thumbnailFilter.querySelector('.img-filters__form');
const thumbnailFilterButtons = thumbnailFilterForm.querySelectorAll('.img-filters__button');

thumbnailFilter.classList.remove('img-filters--inactive');

const getRandomThumbnail = (array, count) => array.slice().sort(() => randomNumber(0, array.length) - randomNumber(0, array.length)).slice(0, count);

const sortThumbnails = (array, value) => array.slice().sort((firstElement, secondElement) => secondElement[value].length - firstElement[value].length);

const applyFilters = (data, render) => {
  thumbnailFilterForm.addEventListener('click', (evt) => {
    thumbnailFilterButtons.forEach((button) => button.classList.remove('img-filters__button--active'));
    let newData = data;

    if (evt.target.id === 'filter-default') {
      newData = data;
    }
    if (evt.target.id === 'filter-random') {
      newData = getRandomThumbnail(newData, 10);
    }

    if (evt.target.id === 'filter-discussed') {
      newData = sortThumbnails(newData, 'comments');
    }

    evt.target.classList.add('img-filters__button--active');
    render(newData);
  });
};

export { applyFilters };