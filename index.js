const inquirer = require("inquirer")
const fs = require("fs")

const questions = () => inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type:"confirm",
        name:"intern",
        message: "Are you an intern?",  
        when: function(answers){
            return !intern(answers)
        } 
    },
    {
        type: "confirm",
        name: "engineer",
        message: "Are you an engineer?",
        when: function(answers){
            return !intern(answers)
        } 
        
    },
    {
        type: "confirm",
        name: "manager",
        message: "Are you a manager?"
    },
    {
        type: "input",
        name: "officenumber",
        message: "What is your office number?",
        when: function(answers){
            return answers.manager;
        }
    },
    {
        type: "input",
        name:"github",
        question:"What is your github profile name?",
        when: function(answers){
            return answers.engineer;
        }
    },
    {
        type: "input",
        name: "School",
        question: "What school do you attend?",
        when: function(answers){
            return answers.intern
        }
    }
])
.then((data) => {


    writeToFile(

    )
})

questions();

// function writeToFile(content){
//     fs.writeFile("index.html", content, (err) =>
//     err ? console.error(err): console.log("Great Success!"))
// };