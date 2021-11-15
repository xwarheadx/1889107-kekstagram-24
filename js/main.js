import { setImageFormSubmit, closeEditForm } from './popup.js';
import { getData } from './api.js'
import { showLoadAlert } from './alert.js';
import { generatePhotos } from './thumbnails.js';
getData(
  (photos) => generatePhotos(photos),
  () => showLoadAlert('Проблемы с загрузкой контента, попробуйте обновить страницу'),
);

setImageFormSubmit(closeEditForm);