import { validateDescription, validateHashTags, clearDescription } from './form.js';
import { isEscapeKey, bodyModalOpen, bodyModalClose } from './utils.js';
import { changeSize, setDefaultSize } from './image-size.js';
import { setDefaultFilter } from './filters.js';
import { sendData } from './api.js';
import { renderSuccessMessage, renderErrorMessage } from './alert.js';
const uploadFile = document.querySelector('#upload-file');
const imageEdit = document.querySelector('.img-upload__overlay');
const imageEditClose = imageEdit.querySelector('#upload-cancel');
const imageForm = document.querySelector('#upload-select-image');

const openEditForm = () => {
  imageEdit.classList.remove('hidden');
  bodyModalOpen();
  changeSize();
  validateDescription();
  validateHashTags();
  document.addEventListener('keydown', onEditFormEscKeydown);
};

const closeEditForm = () => {
  imageEdit.classList.add('hidden');
  uploadFile.value = '';
  clearDescription();
  bodyModalClose();
  setDefaultSize();
  setDefaultFilter();
  document.removeEventListener('keydown', onEditFormEscKeydown);
};

const onEditFormEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditForm();
  }
};

uploadFile.addEventListener('change', (evt) => {
  openEditForm();
});


imageEditClose.addEventListener('click', () => {
  closeEditForm();
});

const setImageFormSubmit = (onSuccess) => {
  imageForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => renderSuccessMessage(),
      () => renderErrorMessage(),
      new FormData(evt.target),
    );

    onSuccess();
  });
};
export { setImageFormSubmit, closeEditForm };
