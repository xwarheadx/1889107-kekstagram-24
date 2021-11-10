import { randomNumber } from './util.js'
const NAMES = ['Иван',
    'Сергей',
    'Пётр',
    'Валерий',
    'Ольга',
    'Юлия',
    'Евгений',
];

const COMMENT_TEXT = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const ID_NUMBER = [];
while (ID_NUMBER.length < 25) {
    let r = randomNumber(1, 25);
    if (ID_NUMBER.indexOf(r) === -1) ID_NUMBER.push(r);
};

const ID_NUMBER_COMMENT = [];
while (ID_NUMBER_COMMENT.length < 1000) {
    let r = randomNumber(1, 1000);
    if (ID_NUMBER_COMMENT.indexOf(r) === -1) ID_NUMBER_COMMENT.push(r);
};

const ID_NUMBER_PHOTO = [];
while (ID_NUMBER_PHOTO.length < 25) {
    let r = randomNumber(1, 25);
    if (ID_NUMBER_PHOTO.indexOf(r) === -1) ID_NUMBER_PHOTO.push(r);
};
const createComment = () => {
    const randomNameIndex = randomNumber(0, NAMES.length - 1);
    const randomCommentIndex = randomNumber(0, COMMENT_TEXT.length - 1);
    return {
        id: ID_NUMBER_COMMENT.pop(),
        avatar: 'img/avatar-' + randomNumber(1, 5) + '.svg',
        message: COMMENT_TEXT[randomCommentIndex],
        name: NAMES[randomNameIndex],
    }
};
const randomComment = Array.from({ length: randomNumber(6, 10) }, createComment);
const createPost = () => {
    return {
        id: ID_NUMBER.pop(),
        avatar: 'img/avatar-' + randomNumber(1, 5) + '.svg',
        url: 'photos/' + ID_NUMBER_PHOTO.pop() + '.jpg',
        description: 'Это моё первое фото',
        likes: randomNumber(15, 200),
        comments: randomComment,

    }
};
const POSTS = 19;
const createPhotos = Array.from({ length: POSTS }, createPost);
export { createPhotos, randomComment };
