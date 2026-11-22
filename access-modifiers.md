# Access Modifiers

<b>Introduction:</b><br>
Access modifiers are part of encapsulation which is a major part of Object oriented programming(OOP). These access modifiers limit the access range of a data which makes the program more secure and controlled. 

1. Public: This is the default access modifier of typescript. A variable or function with this access modifier can be accessed from anywhere of the code.
```
class Employee{
    public name: string;
    
    constructor(name: string){
        this.name = name;
    }

    public employeeInfo(){
        console.log(`Employee name is ${this.name}`);
    }
}

const emp1 = new Employee("Chinmoy");

console.log(emp1.name);
emp1.employeeInfo();

```

2. Private: Private declared variable for function is only accessable inside the class. Child or subclass cannot directly access it.
```
class Employee{
    public name: string;
    private salary: number;
    
    constructor(name: string, salary: number){
        this.name = name;
        this.salary = salary;
    }

    public displaySalary(){
        console.log(`Salary:  ${this.salary}`);
    }
}

const emp1 = new Employee("Chinmoy", 60000);

console.log(emp1.salary); // Error (not accessable)
emp1.displaySalary(); // accessable

```

3. Protected: Protected data can be accessed inside the class and it's child class. It is mostly useful in case of inheritance. It has a wide access range than Private.
```
class Employee{
    public name: string;
    protected salary: number; 
    
    constructor(name: string, salary: number){
        this.name = name;
        this.salary = salary;
    }
}

class Developer extends Employee{
    public displaySalary(){
        console.log(`${this.name} salary is ${this.salary}`)
    }
}

const dev1 = new Developer("Chinmoy", 60000);

console.log(dev1.salary); // Error (not accessable)
dev1.displaySalary(); // accessable

```

4. Readonly: It cannot be changed after initialization. It can only read but cannot be edited anymore. It helps to protect data from unwanted edits.
```
class Employee{
    readonly id: number;
    public name: string;
    
    constructor(id:number, name: string){
        this.id = id;
        this.name = name;
    }
}

const emp1 = new Employee(112, "Chinmoy");

console.log(emp1.id); // can be read
emp1.id = 221; // Error (not allowed)

```

## Conclusion:
These four access modifiers have different scopes or range. These modifiers prevent the unauthorized access and provide an overall control on the data of our program. 