import { createPhotos, randomComment } from './data.js';
import { isEscapeKey } from './util.js';
const fullSizeImg = document.querySelector('.big-picture');
const commentTemplate = document.querySelector('#comment').content;
const commentsFullImg = fullSizeImg.querySelector('.social__comments');
const moreComments = fullSizeImg.querySelector('.social__comments-loader');
const countOfComments = fullSizeImg.querySelector('.social__comment-count');
let currentCommentCount = 0;
let currentComment = [];

function appendComments(randomComment, start, step) {
    const listNotesFragment = document.createDocumentFragment();
    const stop = step + start;
    randomComment.slice(start, stop).forEach(({ avatar, message, name }) => {
        const commentElement = commentTemplate.cloneNode(true);
        commentElement.querySelector('.social__picture').src = avatar;
        commentElement.querySelector('.social__text').textContent = message;
        commentElement.querySelector('.social__picture').alt = name;
        listNotesFragment.appendChild(commentElement);
    });

    commentsFullImg.appendChild(listNotesFragment);
    let countComment = randomComment.length;
    if (randomComment.length <= stop) {
        moreComments.classList.add('hidden');
    } else {
        moreComments.classList.remove('hidden');
        countComment = stop;
    }
    countOfComments.innerHTML = `${countComment} из <span class="comments-count">${randomComment.length}</span> комментариев`;
    currentCommentCount = stop;
}

function openFullSizeImg(item) {
    const createFullSizeImg = createPhotos;
    const closeFullSizeImg = document.querySelector('.big-picture__cancel');

    createFullSizeImg.forEach(({ id, avatar, url, comments, likes, description }) => {
        if (id === item) {
            currentCommentCount = 0;
            currentComment = randomComment;
            fullSizeImg.classList.remove('hidden');
            fullSizeImg.querySelector('.big-picture__img img').src = url;
            fullSizeImg.querySelector('.likes-count').textContent = likes;
            fullSizeImg.querySelector('.social__caption').textContent = description;
            fullSizeImg.querySelector('.social__header img').src = avatar;
            commentsFullImg.innerHTML = '';
            appendComments(randomComment, currentCommentCount, 5);
            document.body.classList.add('modal-open');
        }
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
    moreComments.addEventListener('click', () => {
        appendComments(currentComment, currentCommentCount, 5);
    });
}
export { openFullSizeImg };
