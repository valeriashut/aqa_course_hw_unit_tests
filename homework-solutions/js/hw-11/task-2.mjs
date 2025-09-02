class Employee {
constructor(firstName, lastName, profession, salary) {
        this._firstName = this.validateFirstName(firstName);
        this._lastName = this.validateLastName(lastName);
        this._profession = this.validateProfession(profession);
        this._salary = this.validateSalary(salary);
    }

    validateFirstName(name) {
      if (typeof name !== 'string' || name.length < 2 || name.length > 50 || !/^[a-zA-Z\s]+$/.test(name)) {
        throw new Error('ошибка! firstName — строка от 2 до 50 символов, только латинские буквы');
      }
      return name;
    }

    validateLastName(name) {
      if (typeof name !== 'string' || name.length < 2 || name.length > 50 || !/^[a-zA-Z\s]+$/.test(name)) {
        throw new Error('ошибка! firstName — строка от 2 до 50 символов, только латинские буквы');
      }
      return name;
    }

    validateProfession(profession) {
        if (typeof profession !== 'string' || profession.trim() === '' || !/^[a-zA-Z\s]+$/.test(profession)) {
            throw new Error('ошибка! profession — строка, не может быть пустой, только латинские буквы и пробелы');
        }
        return profession;
    }

    validateSalary(salary) {
        if (typeof salary !== 'number' || salary <= 0 || salary >= 10000 || isNaN(salary)) {
            throw new Error('ошибка! salary — число, должно быть больше 0 и меньше 10000');
        }
        return salary;
    }

    set firstName(newFirstName) {
        this._firstName = this.validateFirstName(newFirstName);
    }

    set lastName(newLastName) {
        this._lastName = this.validateLastName(newLastName);
    }
    
    set profession(newProfession) {
        this._profession = this.validateProfession(newProfession);
    }
    
    set salary(newSalary) {
        this._salary = this.validateSalary(newSalary);
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get profession() {
        return this._profession;
    }

    get salary() {
        return this._salary;
    }
}

class Company {

  constructor(name, phone, address) {
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.employees = [];
    }

    findEmployeeByName(firstName) {
        if (typeof firstName !== 'string') {
            throw new Error('ошибка');
        }
        const employee = this.employees.find(emp => emp.firstName === firstName);
        if (!employee) {
            throw new Error('Сотрудник не найден');
        }
        return employee;
    }

    addEmployee(employee) {
        if (!(employee instanceof Employee)) {
            throw new Error('ошибка');
        }
        this.employees.push(employee);
    }

    #getEmployeeIndex(firstName) {
        if (typeof firstName !== 'string') {
            throw new Error('ошибка');
        }
        return this.employees.findIndex(emp => emp.firstName === firstName);
    }

    removeEmployee(firstName) {
        const index = this.#getEmployeeIndex(firstName);
        
        if (index === -1) {
            throw new Error('Сотрудник не найден');
        }
        this.employees.splice(index, 1);
        return true;
    }

    getTotalSalary() {
        return this.employees.reduce((total, emp) => total + emp.salary, 0);
    }

    getEmployees() {
        return [...this.employees];
    }
}

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

const company = new Company('Tech Corp', '123-456', 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
company.removeEmployee('John');
console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };
