/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  function countVowels(word) {
    const vowels = word.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
  }

  return [...wordsArr].sort((a, b) => countVowels(a) - countVowels(b));
}

const newArr = sortedByVowels(words);
console.log(newArr);

export { sortedByVowels };
