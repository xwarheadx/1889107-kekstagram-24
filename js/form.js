const MAX_COMMENT_LENGTH = 140;
const HASHTAG_NUMBER = 5;
const HASHTAG_LENGTH = 20;
const hashtagIsValid = /^#[A-Za-zА-Яа-яЁё0-9]*$|(^$)/;
const hashtagText = document.querySelector('.text__hashtags');
const commentTextarea = document.querySelector('.text__description');

const validateDescription = () => {
  commentTextarea.addEventListener('input', () => {
    if (commentTextarea.value.length > MAX_COMMENT_LENGTH) {
      commentTextarea.setCustomValidity('Длина комментария не может составлять больше 140 символов');
    } else {
      commentTextarea.setCustomValidity('');
    }
    commentTextarea.reportValidity();
  });
};

const validateHashTags = () => {
  hashtagText.addEventListener('input', () => {
    hashtagText.value = hashtagText.value.toLowerCase().replace(/\s+/g, ' ');
    const hashtagsArray = hashtagText.value.split(' ');
    const errorsArray = [];
    const hasDuplicates = hashtagsArray.some((item) => hashtagsArray.indexOf(item) !== hashtagsArray.lastIndexOf(item));
    if (hasDuplicates) {
      errorsArray.push('Хештеги не могут повторяться');
    }
    if (hashtagsArray.length > HASHTAG_NUMBER) {
      errorsArray.push(`Нельзя добавлять более ${HASHTAG_NUMBER} хештегов`);
    }
    hashtagsArray.forEach((tag) => {
      if (!tag.startsWith('#')) {
        errorsArray.push('Хештеги должны начинаться с "#" и отделяться пробелом');
      }
      if (tag === '') {
        errorsArray.length = 0;
      }
      if (tag === '#') {
        errorsArray.push('Хештег не может состоять только из "#');
      }
      if (!hashtagIsValid.test(tag)) {
        errorsArray.push('Хештеги должны состоять только из букв и чисел');
      }
      if (tag.length > HASHTAG_LENGTH) {
        errorsArray.push(`Хештег не может быть длиннее ${HASHTAG_LENGTH} символов`);
      }
    });
    if (hashtagsArray[0] === '') {
      hashtagText.value = hashtagText.value.trim();
      hashtagText.setCustomValidity('');
    } else if (errorsArray.length === 0) {
      hashtagText.setCustomValidity('');
    } else {
      hashtagText.setCustomValidity(errorsArray[0]);
    }
    hashtagText.reportValidity();
  });
};
const clearDescription = () => {
  commentTextarea.value = '';
  hashtagText.value = '';
};
export { validateDescription, validateHashTags, clearDescription };
