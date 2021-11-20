import { setImageFormSubmit, closeEditForm } from './popup.js';
import { getData } from './api.js';
import { showLoadAlert } from './alert.js';
import { generatePhotos } from './thumbnails.js';
import { applyFilters } from './thumbnails-filter.js';
import { debounce } from './debounce.js';
import './preview.js';
getData(
  (photos) => {
    generatePhotos(photos);
    applyFilters(photos, debounce(generatePhotos));
  },
  () => showLoadAlert('Проблемы с загрузкой контента, попробуйте обновить страницу'),
);

setImageFormSubmit(closeEditForm);
