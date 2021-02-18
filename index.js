const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer.js")
const Intern = require("./lib/intern.js")
const Employee = require("./lib/employee.js")

let managers = [];
let engineers = [];
let interns = [];


const questions = [
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
        message: "What is your email address?",
        filter: function(val){
            return val.toLowerCase();
        },
    },
    {
        type: "list",
        name: "role",
        message: "What is your postion?",
        choices: ["Manager", "Engineer", "Intern"],
    },
    {
        type: "input",
        name: "officenumber",
        message: "What is your office number?",
        when: (data) => (data.role).includes("Manager"),
        
    },
    {
        type: "input",
        name: "github",
        question: "What is your github profile name?",
        when: (data) => (data.role).includes("Engineer"),
    },    
    {
        type: "input",
        name: "school",
        question: "What school do you attend?",
        when: (data) => (data.role).includes("Intern"),
        
    },
    {
        type: "confirm",
        name: "adding",
        quetions: "Do you have another employee to add?"
    }
]

function manager(managers){
    var managerString = ""

    for (var i=0; i<managers.length; i++){
        managerString += `<div class="box">
        <div class="card-body">
        <h5 class="card-title">${managers[i].name}</h5>
        <h6 class="card-subtitle mb-2"><i class="fas fa-mug-hot"></i> Mananger</h6><br>
        <br>
        <a> ID: ${managers[i].id} </a><br>
        <a href="${managers[i].email}" class="card-link">${managers[i].email}</a><br>
        <a> Office Number: ${managers[i].officeNumber}</a><br>
        </div>
        </div>`
    }
    return managerString
}


 

function engineer(engineers){
    engineerString = ""
    for (var i=0; i<engineers.length; i++){
        engineerString += `<div class="box">
        <div class="card-body">
        <h5 class="card-title">${engineers[i].name}</h5>
        <h6 class="card-subtitle mb-2"><i class="fas fa-mug-hot"></i> Engineer</h6><br>
        <br>
        <a> ID: ${engineers[i].id} </a><br>
        <a href="#" class="card-link">${engineers[i].email}</a><br>
        <a href="https://github.com/${engineers[i].github}" class="card-link">${engineers[i].github}</a><br>
        </div>
        </div>`
    }
    return engineerString
}

function intern(interns){
    let internString = ""
    for (var i=0; i<interns.length; i++){
        internString += `<div class="box">
        <div class="card-body">
        <h5 class="card-title">${interns[i].name}</h5>
        <h6 class="card-subtitle mb-2"><i class="fas fa-mug-hot"></i> Intern</h6><br>
        <br>
        <a> ID: ${interns[i].id} </a><br>
        <a href="${interns[i].email}" class="card-link">${interns[i].email}</a><br>
        <a> School: ${interns[i].school} </a><br>
        </div>
        </div>`
    };
    return internString;
}

function init(){
inquirer.prompt(questions).then((data) => {
    console.log(data);
    if ((data.role).includes('Manager')) {
        managers.push(new Manager(data.name, data.id, data.email, data.officenumber));
        console.log(managers);
    } else if ((data.role).includes('Engineer')) {
        engineers.push(new Engineer(data.name, data.id, data.email, data.github));
        console.log(engineers)
    } else if ((data.role).includes('Intern')) {
        interns.push(new Intern(data.name, data.id, data.email, data.school));
        console.log(interns);
    }
    if (data.adding === true) {
        init();
    }else{
        writeToFile(
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Team!</title>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="dist/style.css">
</head>
<body>
    <h1>This is the team!</h1> 
    <h1>(Scroll down to see everyone)</h1>
        ${manager(managers)}
        ${engineer(engineers)}
        ${intern(interns)}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
    <script src="dist/script.js"></script>
    </body>
    </html>`
    )};
    
    });
};
function writeToFile(content){
    fs.writeFile("index.html", content, (err) =>
    err ? console.error(err): console.log("Great Success!"))
};

init();