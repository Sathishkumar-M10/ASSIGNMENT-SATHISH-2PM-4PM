class Employee {
    constructor(Name, Salary) {
        this.Name = Name,
        this.Salary = Salary
    }

    displayInfo() {
        console.log(`${this.Name}, ${this.Salary}`);
    }
}

const Emp = new Employee("Sathishkumar M", 250000);

Emp.displayInfo()