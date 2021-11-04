import { hashtagText, commentTextarea } from './form.js';
import { isEscapeKey } from './util.js';
import { changeSize } from './imagesize.js';
import './filters.js'
const bodyIsVisible = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const imageEdit = document.querySelector('.img-upload__overlay');
const imageEditClose = imageEdit.querySelector('#upload-cancel');

const openEditForm = () => {
    imageEdit.classList.remove('hidden');
    bodyIsVisible.classList.add('modal-open');

    document.addEventListener('keydown', onEditFormEscKeydown);
};

changeSize()

const closeEditForm = () => {
    if (document.activeElement !== hashtagText && document.activeElement !== commentTextarea) {
        imageEdit.classList.add('hidden');
        bodyIsVisible.classList.remove('modal-open');
        document.removeEventListener('keydown', onEditFormEscKeydown);
    }
};

const onEditFormEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
        evt.preventDefault();
        closeEditForm();
    }
}

uploadFile.addEventListener('change', (evt) => {
    openEditForm();
    evt.target.value = '';
});


imageEditClose.addEventListener('click', () => {
    closeEditForm();
});
