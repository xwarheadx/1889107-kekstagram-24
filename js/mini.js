import { createPhotos } from './data.js';
import { openFullSizeImg } from './fullsizeimg.js'
const usersPhotos = document.querySelector('.pictures');
usersPhotos.querySelector('.pictures__title').classList.remove('hidden');
const picturesListElement = usersPhotos;
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const createPicture = createPhotos;
const pictureListFragment = document.createDocumentFragment();
createPicture.forEach(({ id, url, comments, likes }) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureListFragment.appendChild(pictureElement);
    pictureElement.addEventListener('click', () => {
        openFullSizeImg(id);
    });

});
picturesListElement.appendChild(pictureListFragment);
