function randomNumber(min, max) {
    if (min >= 0 && max >= min) {
        const RANDZ = min + Math.random() * (max + 1 - min);
        return Math.floor(RANDZ);
    } else { console.log('Ошибка!') }
};
export { randomNumber }
const isEscapeKey = (evt) => evt.key === 'Escape';
export { isEscapeKey }