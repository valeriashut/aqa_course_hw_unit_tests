// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

function validatePassword (password: string): boolean {
    if (password.trim().length === 0) {
    return false;
  }
  if (password.length < 8 ||
    !/[A-Z]||[А-Я]/.test(password) || 
    !/[a-z]||[а-я]/.test(password) || 
    !/\d/.test(password)) {
    return false;
    }
    return true;
}


console.log(validatePassword("pakjlord"));
console.log(validatePassword("pkdkKKq1"));
console.log(validatePassword("Pas11"));
console.log(validatePassword("ждблж1"));
console.log(validatePassword("ждблжГН1"));