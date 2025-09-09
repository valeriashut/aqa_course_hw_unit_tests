/*
1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
  его резолва в консоль
3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
  Обработайте промис методом .catch и выведите результат его резолва в консоль
4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль результаты работы каждого промиса через .then
6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль статус и результат каждого промиса через .then
7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
*/

function delayTwoSeconds(callback) {
    setTimeout(callback, 2000)
};

const firstPromise = new Promise((resolve1, reject1) => {
    resolve1(1);
})

firstPromise
.then(
    (resolve1) =>  {console.log(resolve1); }
);

const secondPromise = new Promise((resolve2, reject2) => {
    reject2("Promise failed");
});

secondPromise
.catch(
    (resolve2) =>  {console.log(resolve2); }
);

function promiseNumber(number) {
    return new Promise((resolveNumber, rejectNumber) => {
        resolveNumber(number);
});
};

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((values) => 
    values.forEach (number => console.log(number)))

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((results) => 
     results.forEach(number => console.log(`Status: ${number.status}, value: ${number.value}`)))

async function numberSeven(numberArray) {
    try {
    const results = await Promise.all(numberArray);
    results.forEach(number => console.log(number));
    } catch (error) {
    console.error('Ошибка:', error);
  }
}

const testArrow = [promiseNumber(1), promiseNumber(2), promiseNumber(3)];
numberSeven(testArrow);

async function numberSevenB(numberArray2) {
    try {
    const results = await Promise.allSettled(numberArray2);
    results.forEach(result => console.log(`Status: ${result.status}, value: ${result.value}`));
    } catch (error) {
    console.error('Ошибка:', error);
  }
}

const testArrow2 = [promiseNumber(1), promiseNumber(2), promiseNumber(3)];
numberSevenB(testArrow2);