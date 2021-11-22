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
    const allHashtags = hashtagText.value.split(' ');
    const hashtagsErrors = [];
    const hasDuplicates = allHashtags.some((item) => allHashtags.indexOf(item) !== allHashtags.lastIndexOf(item));
    if (hasDuplicates) {
      hashtagsErrors.push('Хештеги не могут повторяться');
    }
    if (allHashtags.length > HASHTAG_NUMBER) {
      hashtagsErrors.push(`Нельзя добавлять более ${HASHTAG_NUMBER} хештегов`);
    }
    allHashtags.forEach((tag) => {
      if (!tag.startsWith('#')) {
        hashtagsErrors.push('Хештеги должны начинаться с "#" и отделяться пробелом');
      }
      if (tag === '') {
        hashtagsErrors.length = 0;
      }
      if (tag === '#') {
        hashtagsErrors.push('Хештег не может состоять только из "#');
      }
      if (!hashtagIsValid.test(tag)) {
        hashtagsErrors.push('Хештеги должны состоять только из букв и чисел');
      }
      if (tag.length > HASHTAG_LENGTH) {
        hashtagsErrors.push(`Хештег не может быть длиннее ${HASHTAG_LENGTH} символов`);
      }
    });
    if (allHashtags[0] === '') {
      hashtagText.value = hashtagText.value.trim();
      hashtagText.setCustomValidity('');
    } else if (hashtagsErrors.length === 0) {
      hashtagText.setCustomValidity('');
    } else {
      hashtagText.setCustomValidity(hashtagsErrors[0]);
    }
    hashtagText.reportValidity();
  });
};
const clearDescription = () => {
  commentTextarea.value = '';
  hashtagText.value = '';
  commentTextarea.removeEventListener('input', validateDescription);
  hashtagText.removeEventListener('input', validateHashTags);
};
export { validateDescription, validateHashTags, clearDescription };
