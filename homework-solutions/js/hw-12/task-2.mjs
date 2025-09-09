/*
Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
   Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
   После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
   Преобразуйте респонс из JSON в объект
   Проверьте, что айди в респонсе === 201
   Функция должна возвращать полученный объект из респонса
   Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
*/
const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

const bodyToDo = {
  userId: 'userId',
  title: 'title',
  text: 'text'
};

async function createTodo(bodyToDo) {
    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyToDo)
        });

        if (response.status !== 201) {
            throw new Error(`Wrong response}`);
        }
        const responseData = await response.json();
        if (responseData.id !== 201) {
            console.error(`Expected something else`);
        }
        return responseData;
    } catch (error) {
        console.error('Error creating todo:', error.message);
    } finally {
        console.log('Работа функции завершена');
    }
}