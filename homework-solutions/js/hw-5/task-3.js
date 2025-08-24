/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';

let vowels = 0;
let consonants = 0;

for (const symbol of word.toLowerCase()) {
  if ('aeiou'.includes(symbol)) {
    vowels += 1;
  } else if ('bcdfghjklmnpqrstvwxyz'.includes(symbol)) { 
    consonants += 1;
  }  
}
vowelsAndConsonantsResult = `${word} contains ${vowels} vowels and ${consonants} consonants`;
console.log(vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };
