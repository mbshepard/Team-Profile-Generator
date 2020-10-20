// TODO: Write code to define and export the Employee class

class Employee{
    constructor(name, id, email)  {
        this.name = name;
        this.id = id;
        this.email = email
    }
    getName(){
        return (`${this.name}`)
    }
    getId(){
        return (this.id)
    }
    getEmail(){
        return (`${this.email}`)
    }
    getRole(){
        return "Employee"
    }
}

module.exports = Employee

// console.log(answers.ee_Name)

// var emp1 = new Employee(answers.ee_Name,answers.ee_Title,answers.ee_Email)
// console.log(emp1)



// var emp1 = new Employee("Michael","Engineer","michael@gmail.com")

