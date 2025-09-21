// 1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee
// 2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)
// 3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)
// 4. Создайте тип UserType из объекта QA (используйте typeof)
// 5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными
// 6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee
// 7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager
// 8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)
// 9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - ключи объекта QA (Используйте Record, keyof, typeof)

interface IEmployee {
  name: string; 
  salary: number; 
  isManager: boolean;
}

const QA: IEmployee = {
    name: "Светлана",
    salary: 105000,
    isManager: false
};

type EmployeeKeys = keyof IEmployee;
type QaKeys = keyof typeof QA; 
type UserType = typeof QA;
type PartialEmployee = Partial<IEmployee>;
type NameSalary = Pick<IEmployee, 'name' | 'salary'>;
type WithoutIsManager = Omit<IEmployee, 'isManager'>;
type ReadOnlyType = Readonly<IEmployee>;

const RecordObject: Record<string,  keyof typeof QA> = {
  field1: "name",
  field2: "salary", 
  field3: "isManager"
};