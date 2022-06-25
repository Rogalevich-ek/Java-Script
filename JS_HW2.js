//1. Написать скриптик , который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1.

for (let i = 1; i<=10; i++) {
    console.log(2 ** i)
} 

// 1*. Преобразовать первую задачу в функцию , принимающую на вход степень, в которую будет возводиться число 2.

function pow(value) {
    for (let i = 1; i<=value; i++) { 
        console.log(2 ** i)
    }
}
pow(10);

//2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), 
//во второй :):) и так далее Пример в консоли:
//:)
//:):)
//:):):)
//:):):):)
//:):):):):)

let str = ''
let smile = ':)'
for (let i = 1; i < 6; i++) {
    console.log(str += smile)
}

//2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
//e.g. function printSmile(stroka, numberOfRows)
 
let a = '';
function printSmile(stroka, numberOfRows) {
    for (let i = 1; i <=numberOfRows; i++){
        console.log(a += stroka)
    }
}
printSmile(';)', 5);


//3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, 
//сколько в слове гласных, и сколько согласных букв.
//e.g. function getWordStructure(word)
//В консоли: 
//Слово (word) состоит из  (число) гласных и (число) согласных букв
//Проверки: 'case', 'Case', 'Check-list'



function getWordStructure(word) {
let glas = ['a', 'e', 'i', 'u', 'o', 'y'];
let sogl = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
let glasCount = 0;
let soglCount = 0;

    word = word.toLowerCase();
  
    for (let i = 0; i < word.length; i++) {
        if (glas.includes(word[i])) {
            glasCount++;
        } else if (sogl.includes(word[i])) {
            soglCount++
        }
    }
    console.log('Слово ' + word + ' состоит из ' + glasCount + ' гласных и ' + soglCount + ' согласных букв ')
    }

getWordStructure('case')
getWordStructure('Case')
getWordStructure('Check-list')


//4**. Написать функцию, которая проверяет, является ли слово палиндромом
//e.g. function isPalindrom(word)
//Проверки: 'abba', 'Abba'

function isPalindrom(word) {
    word = word.toLowerCase ()
    for (let i = 0, j=word.length-1; i<word.length, j>=0; i++, j--) {
        if (word[i] !== word[j]) {
            return false
        }
    }
    return true
}

console.log(isPalindrom('Nika'))