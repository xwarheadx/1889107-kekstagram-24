import { openFullSizeImg } from './full-size-img.js';
const usersPhotos = document.querySelector('.pictures');
usersPhotos.querySelector('.pictures__title').classList.remove('hidden');
const picturesListElement = usersPhotos;
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureListFragment = document.createDocumentFragment();
const generatePhotos = (photos) => {
  photos.forEach((photo) => {
    const thumbnails = document.querySelectorAll('.picture');
    thumbnails.forEach((element) => element.remove());
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = `${photo.url}`;
    pictureElement.querySelector('.picture__likes').textContent = `${photo.likes}`;
    pictureElement.querySelector('.picture__comments').textContent = `${photo.comments.length}`;
    pictureListFragment.appendChild(pictureElement);
    pictureElement.addEventListener('click', (evt) => {
      openFullSizeImg(evt, photo);
    });

  });
  picturesListElement.appendChild(pictureListFragment);
};
export { generatePhotos };
