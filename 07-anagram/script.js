/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    if (!str1 || !str2 || str1.length !== str2.length) {
        return false;
    }
    const FirstAn = str1.toLowerCase();
    const SecondAn = str2.toLowerCase();

    if (FirstAn === SecondAn) {
        return false;
    }
    const FirstStr = FirstAn.split('').sort().join('');
    const SecondStr = SecondAn.split('').sort().join('');

    return FirstStr === SecondStr;
};

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('up', 'UP')); 