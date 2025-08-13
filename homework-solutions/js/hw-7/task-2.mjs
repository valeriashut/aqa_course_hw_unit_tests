/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') return false;
  const clearWord = word.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
  return clearWord === clearWord.split('').reverse().join('');
}
console.log(isPalindrom("шиш"));


/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string') return [];
  const words = sentence.split(/\s+/);
  if (words.length === 0 || words[0] === '') return [];
  const maxLength = Math.max(...words.map(word => word.length));
  return words.filter(word => word.length === maxLength);
}

console.log(findLongestWords("Это было самое долгое задание"));

export { isPalindrom, findLongestWords };
