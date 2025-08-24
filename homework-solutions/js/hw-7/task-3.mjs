/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
    if (number <= 9) {
        return number;
    }
    const sum = String(number).split('').reduce((answer, num) => answer + Number(num), 0);
    return digitalRoot(sum);
}

console.log(digitalRoot(39));

export { digitalRoot };
