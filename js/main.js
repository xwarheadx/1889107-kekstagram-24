import { setImageFormSubmit, closeEditForm } from './popup.js';
import { getData } from './api.js'
import { showLoadAlert } from './alert.js';
import { generatePhotos } from './thumbnails.js';
import { applyFilters } from './thumbfilters.js';
import { debounce } from './debounce.js';
getData(
  (photos) => {
    generatePhotos(photos);
    applyFilters(photos, debounce(generatePhotos));
  },
  () => showLoadAlert('Проблемы с загрузкой контента, попробуйте обновить страницу'),
);

setImageFormSubmit(closeEditForm);