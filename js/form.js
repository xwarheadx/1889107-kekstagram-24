const MAX_COMMENT_LENGTH = 140;
const HASHTAG_NUMBER = 5;
const HASHTAG_LENGTH = 20;
const hashtagIsValid = /^#[A-Za-zА-Яа-яЁё0-9]*$|(^$)/;
const hashtagText = document.querySelector('.text__hashtags');
const commentTextarea = document.querySelector('.text__description');

const validateDescription = () => {
    if (commentTextarea.value.length > MAX_COMMENT_LENGTH) {
        commentTextarea.setCustomValidity('Длина комментария не может составлять больше 140 символов');
    } else {
        commentTextarea.setCustomValidity('');
    }
    commentTextarea.reportValidity();
};

const validateHashTags = () => {
    hashtagText.addEventListener('input', () => {
        hashtagText.value = hashtagText.value.toLowerCase().replace(/\s+/g, ' ');
        const hashtagArray = hashtagText.value.split(' ');
        const errorArray = [];
        const hasDuplicates = hashtagArray.some((item) => hashtagArray.indexOf(item) !== hashtagArray.lastIndexOf(item));
        hashtagArray.forEach((tag) => {
            if (!tag.startsWith('#')) {
                errorArray.push('Хештеги должны начинаться с "#" и отделяться пробелом');
            }
            if (tag === '') {
                errorArray.length = 0;
            }
            if (tag === '#') {
                errorArray.push('Хештег не может состоять только из "#');
            }
            if (!hashtagIsValid.test(tag)) {
                errorArray.push('Хештеги должны состоять только из букв и чисел');
            }
            if (tag.length > HASHTAG_LENGTH) {
                errorArray.push(`Хештег не может быть длиннее ${HASHTAG_LENGTH} символов`);
            }
            if (hasDuplicates) {
                errorArray.push('Хештеги не могут повторяться');
            }
            if (hashtagArray.length > HASHTAG_NUMBER) {
                errorArray.push(`Нельзя добавлять более ${HASHTAG_NUMBER} хештегов`);
            }
        });
        if (hashtagArray[0] === '') {
            hashtagText.value = hashtagText.value.trim();
            hashtagText.setCustomValidity('');
        } else if (errorArray.length === 0) {
            hashtagText.setCustomValidity('');
        } else {
            hashtagText.setCustomValidity(errorArray[0]);
        }
        hashtagText.reportValidity();
    });
};
export { hashtagText, commentTextarea, validateDescription, validateHashTags };