// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee{
    constructor(name,id,email,officeNumber) { //In this constructor, you can add add'l arguments to create a manager
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getRole(){
        return "Manager"
    }
    getOfficeNumber(){
        return this.officeNumber
    }
}

module.exports = Manager

