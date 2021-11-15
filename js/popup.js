import { validateDescription, validateHashTags, hashtagText, commentTextarea } from './form.js';
import { isEscapeKey, bodyModalOpen, bodyModalClose } from './utils.js';
import { changeSize, setDefaultSize} from './imagesize.js';
import {setDefaultFilter} from './filters.js'
import { sendData } from './api.js';
import { renderSuccessMessage, renderErrorMessage } from './alert.js';
const uploadFile = document.querySelector('#upload-file');
const imageEdit = document.querySelector('.img-upload__overlay');
const imageEditClose = imageEdit.querySelector('#upload-cancel');
const imageForm = document.querySelector('#upload-select-image');

const openEditForm = () => {
    imageEdit.classList.remove('hidden');
    bodyModalOpen();
    setDefaultSize();
    setDefaultFilter()
    hashtagText.addEventListener('input', validateHashTags);
    commentTextarea.addEventListener('input', validateDescription)
    document.addEventListener('keydown', onEditFormEscKeydown);
};
changeSize()
const closeEditForm = () => {
    imageEdit.classList.add('hidden');
    commentTextarea.value = '';
    hashtagText.value = '';
    uploadFile.value = '';
    bodyModalClose();
    document.removeEventListener('keydown', onEditFormEscKeydown);
};

const onEditFormEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
        evt.preventDefault();
        closeEditForm();
    }
}

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