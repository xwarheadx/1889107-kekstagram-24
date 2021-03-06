import { isEscapeKey, bodyModalOpen, bodyModalClose } from './utils.js';
const MAX_COMMENTS = 5;
const fullSizeImg = document.querySelector('.big-picture');
const commentsFullImg = fullSizeImg.querySelector('.social__comments');
const moreComments = fullSizeImg.querySelector('.social__comments-loader');
const countOfComments = fullSizeImg.querySelector('.social__comment-count');
const commentTemplate = commentsFullImg.querySelector('.social__comment');
const closeFullSizeImg = document.querySelector('.big-picture__cancel');

const appendComments = (comment) => {
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.classList.add('hidden');
  commentElement.querySelector('.social__picture').src = `${comment.avatar}`;
  commentElement.querySelector('.social__picture').alt = `${comment.name}`;
  commentElement.querySelector('.social__text').textContent = `${comment.message}`;
  commentsFullImg.append(commentElement);
};

const showComments = () => {
  const hiddenComments = commentsFullImg.querySelectorAll('.social__comment.hidden');
  Array.from(hiddenComments).slice(0, MAX_COMMENTS).forEach((comment) => comment.classList.remove('hidden'));
  const allCommnets = commentsFullImg.querySelectorAll('.social__comment');
  const allOpenedComments = commentsFullImg.querySelectorAll('.social__comment:not(.hidden)');
  if (allCommnets.length === allOpenedComments.length) {
    moreComments.classList.add('hidden');
  } else {
    moreComments.classList.remove('hidden');
  }
  countOfComments.innerHTML = `Показано ${allOpenedComments.length} из <span class="comments-count">${allCommnets.length}</span> комментариев`;
};

const clearComments = () => {
  commentsFullImg.value = '';
  moreComments.removeEventListener('click', showComments);
};

const createFullSizeImg = (picture) => {
  fullSizeImg.classList.remove('hidden');
  bodyModalOpen();
  fullSizeImg.querySelector('.big-picture__img img').src = `${picture.url}`;
  fullSizeImg.querySelector('.likes-count').textContent = `${picture.likes}`;
  fullSizeImg.querySelector('.social__caption').textContent = `${picture.description}`;
  commentsFullImg.innerHTML = '';
  picture.comments.forEach(appendComments);
  showComments();
};

const onPostEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    fullSizeImg.classList.add('hidden');
    bodyModalClose();
    clearComments();
    document.removeEventListener('keydown', onPostEscKeydown);
  }
};

const closeFullSizeImgClickHandler = () => {
  fullSizeImg.classList.add('hidden');
  bodyModalClose();
  clearComments();
  document.removeEventListener('keydown', onPostEscKeydown);
};

closeFullSizeImg.addEventListener('click', closeFullSizeImgClickHandler);

const openFullSizeImg = (evt, picture) => {
  evt.preventDefault();
  createFullSizeImg(picture);
  document.addEventListener('keydown', onPostEscKeydown);

  moreComments.addEventListener('click', showComments);
};

clearComments();
export { openFullSizeImg };
