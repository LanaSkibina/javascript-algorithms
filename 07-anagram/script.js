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
    if (str1.length !=  str2.length) return false;
    else {
        let st1 = str1.toLowerCase();
        let st2 = str2.toLowerCase();

        if (st1 === st2) return false;
        else {
            s1 = st1.split('').sort().join('');
            s2 = st2.split('').sort().join('');
            if (s1 != s2) return false;
            else {
                return true;
            }
        }
    }
};

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false