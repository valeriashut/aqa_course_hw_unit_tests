class Employee {
  #salary;

    constructor(firstName, lastName, profession, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.profession = profession;
        this.#salary = salary;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(newFN) {
        if (typeof newFN !== 'string' || newFN.trim() === '') {
            throw new Error('ошибка');
        }
        this._firstName = newFN.trim();
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(newLN) {
        if (typeof newLN !== 'string' || newLN.trim() === '') {
            throw new Error('ошибка');
        }
        this._lastName = newLN.trim();
    }
    
    get profession() {
        return this._profession;
    }

    set profession(newProf) {
        if (typeof newProf !== 'string' || newProf.trim() === '') {
            throw new Error('ошибка');
        }
        this._profession = newProf.trim();
    }

    get salary() {
        return this.#salary;
    }

    set salary(newSal) {
        if (typeof newSal !== 'number' || newSal <= 0) {
            throw new Error('ошибка');
        }
        this.#salary = newSal;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const employee1 = new Employee('John', 'Doe', 'Developer', 3000);
console.log(employee1.firstName);
console.log(employee1.lastName);
console.log(employee1.profession);
console.log(employee1.salary);
console.log(employee1.getFullName());
employee1.firstName = 'Jane';
employee1.lastName = 'Smith';
employee1.profession = 'Senior Developer';
employee1.salary = 3100;
console.log(employee1.firstName);
console.log(employee1.lastName);
console.log(employee1.profession);
console.log(employee1.salary); 
console.log(employee1.getFullName());

const employee2 = new Employee('Ann', 'Short', 'QA', 1500);
console.log(employee2.firstName);
console.log(employee2.lastName);
console.log(employee2.profession);
console.log(employee2.salary);
console.log(employee2.getFullName());
employee2.firstName = 'Lora';
employee2.lastName = 'Smith';
employee2.profession = 'Developer';
employee2.salary = 2700;
console.log(employee2.firstName);
console.log(employee2.lastName);
console.log(employee2.profession);
console.log(employee2.salary); 
console.log(employee2.getFullName());


class Company {
  #employees;

    constructor(title, phone, address, employees) {
        this.title = title;
        this.phone = phone;
        this.address = address;
        this.#employees = [];
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        if (typeof newTitle !== 'string' || newTitle.trim() === '') {
            throw new Error('ошибка');
        }
        this._title = newTitle.trim();
    }

    get phone() {
        return this._phone;
    }

    set phone(newPhone) {
        if (typeof newPhone !== 'number') {
            throw new Error('ошибка');
        }
        this._phone = newPhone;
    }
    
    get address() {
        return this._address;
    }

    set address(newAddress) {
        if (typeof newAddress !== 'string' || newAddress.trim() === '') {
            throw new Error('ошибка');
        }
        this._address = newAddress.trim();
    }

    addEmployee(employee) {
        if (!(employee instanceof Employee)) {
            throw new Error('ошибка');
        }
        this.#employees.push(employee);
        return employee;
    }
    
    getEmployees() {
        return [...this.#employees]; 
    }
    
    getInfo() {
        return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
    }
}

const company = new Company('Tech Corp', 123456, 'Main Street');
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
company.addEmployee(emp1);
company.addEmployee(emp2);
console.log(company.getEmployees());
console.log(company.getInfo());

export { Employee, Company };
