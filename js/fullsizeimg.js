import {createPhotos, randomComment} from './data.js';
import { isEscapeKey } from './util.js';
const fullSizeImg = document.querySelector('.big-picture');
const commentTemplate = document.querySelector('#comment').content;
const commentsFullImg = fullSizeImg.querySelector('.social__comments');
function appendComments(randomComment) {
    const listNotesFragment = document.createDocumentFragment();
  
    randomComment.forEach(({avatar, message, name}) => {
      const commentElement = commentTemplate.cloneNode(true);
      commentElement.querySelector('.social__picture').src = avatar;
      commentElement.querySelector('.social__text').textContent = message;
      commentElement.querySelector('.social__picture').alt = name;
      listNotesFragment.appendChild(commentElement);
    });
    commentsFullImg.innerHTML = '';
    commentsFullImg.appendChild(listNotesFragment);
  }

function openFullSizeImg (item) {
  const createFullSizeImg = createPhotos;
  const closeFullSizeImg = document.querySelector('.big-picture__cancel');

  createFullSizeImg.forEach(({id, avatar, url, comments, likes, description}) => {
    if ( id === item) {
      fullSizeImg.classList.remove('hidden');
      fullSizeImg.querySelector('.big-picture__img img').src = url;
      fullSizeImg.querySelector('.likes-count').textContent = likes;
      fullSizeImg.querySelector('.comments-count').textContent = comments.length;
      fullSizeImg.querySelector('.social__caption').textContent = description;
      fullSizeImg.querySelector('.social__header img').src = avatar;
      fullSizeImg.querySelector('.social__comment-count').classList.add('hidden');
      fullSizeImg.querySelector('.comments-loader').classList.add('hidden');
      appendComments(randomComment);
      document.body.classList.add('modal-open');}
  });

  closeFullSizeImg.addEventListener('click', () => {
    fullSizeImg.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      fullSizeImg.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  });
}
export {openFullSizeImg};
