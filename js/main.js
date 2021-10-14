import {createPost} from './data.js';
const POSTS = 25;
const createPhotos = Array.from({ length: POSTS }, createPost);
console.log(createPhotos);