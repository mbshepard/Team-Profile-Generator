const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Employee = require("./lib/Employee")

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const employees = []
const managers = []
const engineers = []
const interns = []

promptUser()

function promptUser(){

        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the employee's ID?"
            },
            {
                type: "list",
                name: "role",
                message: "What is the employee's role?",
                choices: ["Manager", "Engineer", "Intern"]
            },
            {
                type: "input",
                name: "email",
                message: "What is the employee's email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Please input the manager's office number (Type N/A if not Manager)"
            },
            {
                type: "input",
                name: "github",
                message: "Please input the engineer's GitHub (Type N/A if not Engineer)"
            },
            {
                type: "input",
                name: "school",
                message: "Please input the intern's university attended (Type N/A if not Intern)"
            },
        
        ]).then( answers =>{

            if(answers.role === "Manager"){
                const employee = new Employee (answers.name, answers.id, answers.email)
                const manager = new Manager (answers.name,answers.id,answers.email,answers.officeNumber)
                var html = `<li> Manager Name: ${answers.name} <li> Manager ID: ${answers.id} <li> Manager Email: ${answers.email} <li> Manager Office Number: ${answers.officeNumber}`
                fs.writeFile("./templates/manager.html", html, function(err){
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log("file appended!")
                        promptUser()
                    }
                })


            } else if (answers.role === "Engineer"){
                const employee = new Employee (answers.name, answers.id, answers.email)
                const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github)
                var html = `<li> Engineer Name: ${answers.name} <li> Engineer ID: ${answers.id} <li> Engineer Email: ${answers.email} <li> GitHub: ${answers.github}`
                fs.writeFile("./templates/engineer.html", html, function(err){
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log("file appended!")
                        promptUser()
                    }
                })

            } else if (answers.role === "Intern"){
                const employee = new Employee (answers.name, answers.id, answers.email)
                const intern = new Intern (answers.name, answers.id, answers.email, answers.school)
                var html = `<li> Engineer Name: ${answers.name} <li> Intern ID: ${answers.id} <li> Student Email: ${answers.email} <li> School: ${answers.school}`
                fs.writeFile("./templates/intern.html", html, function(err){
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log("file appended!")
                        promptUser()
                    }
                })

            }
        })
    }