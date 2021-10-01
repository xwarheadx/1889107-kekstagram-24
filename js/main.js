//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function randomNumber(min, max) {
    if (min >= 0 && max >= min) {
        const RANDZ = min + Math.random() * (max + 1 - min);
        return Math.floor(RANDZ);
    } else { console.log('Ошибка!') }
}
console.log(randomNumber(0, 10)); //Проверка положительного диапазона, включая ноль
console.log(randomNumber(-1, 10));//Проверка на отрицательное число в диапазоне 
console.log(randomNumber(10, 10));//Проверка если числа равны 
console.log(randomNumber(11, 10));//Проверка если минимальное число больше максимального 
// Функция для проверки максимальной длины строки
const TEXT = '';
function commentLength(TEXT) {
    if (TEXT.length <= 140) { return true; }
    return false;
}
console.log(commentLength('Текст для проверки')); // проверка строкой меньше 140 символов 
console.log(commentLength('Функции не обязательно писать с нуля, можно найти готовые в интернете, разобраться в них и добавить к себе в проект. Только не забудьте это.'));// проверка строкой в 140 символов
console.log(commentLength('В файле main.js напишите несколько вспомогательных функций, которые пригодятся вам в следующих заданиях. Функции не обязательно писать с нуля, можно найти готовые в интернете, разобраться в них и добавить к себе в проект. Только не забудьте указать ссылку на источник!')); // проверка строкой больше 140 символов 