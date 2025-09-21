// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

const someObject = {
    id: 52,
    objectType: "list",
    numberOfPeople: 44,
    isBoolean: true
};

function getKeyByValue<Type extends object>(obj: Type, value: Type[keyof Type]): keyof Type | undefined  {
    for (const key in obj) {
        if (obj[key] === value) {
            return key;
        }
    }
    return undefined;
}

console.log(getKeyByValue(someObject, "list"));
console.log(getKeyByValue(someObject, 44));
console.log(getKeyByValue(someObject, "llmkdfkljbhnokij"));