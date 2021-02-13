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
    <!-- <div class="container"> -->
        <div class="box">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <h6 class="card-subtitle mb-2"><i class="fas fa-mug-hot"></i>${data.manager}</h6><br>
              <br>
              <br>
              <a> ID: ${data.id} </a><br>
              <a> Email: </a><a href="#" class="card-link">${data.email}</a><br>
              <a> Office Number: ${data.officenumber}</a><br>
            </div>
        </div>
        <div class="box">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <h6 class="card-subtitle mb-2"><i class="fas fa-glasses"></i>${data.engineer}</h6>
              <br>
              <br>
              <br>
              <a> ID: ${data.id}</a><br>
              <a> Email: </a><a href="#" class="card-link">${data.email}</a><br>
              <a> Github: </a><a href="#" class="card-link"> </a><br>
            </div>
        </div>
        </div>
          <div class="box">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <h6 class="card-subtitle mb-2"><i class="fas fa-glasses"></i>${data.engineer}</h6>
              <br>
              <br>
              <br>
              <a> ID: ${data.id}</a><br>
              <a> Email: </a><a href="#"class="card-link">${data.email}</a><br>
              <a> Github: </a><a href="#" class="card-link"></a><br>
            </div>
          </div>
          <div class="box">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <h6 class="card-subtitle mb-2"><i class="fas fa-glasses"></i>${data.engineer}</h6>
              <br>
              <br>
              <br>
              <a> ID: ${data.id}</a><br>
              <a> Email: </a><a href="#"class="card-link">${data.email}</a><br>
              <a> Github: </a><a href="#" class="card-link">https://github.com/${data.github}</a><br>
            </div>
          </div>
          <div class="box">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <h6 class="card-subtitle mb-2"><i class="fas fa-glasses"></i>${data.intern}</h6>
              <br>
              <br>
              <br>
              <a> ID: ${data.id}</a><br>
              <a> Email: </a><a href="#" class="card-link">${data.email}</a><br>
              <a> School: ${data.school}</a>
            </div>
          </div>
         
    <!-- </div> -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
    <script src="dist/script.js"></script>
</body>
</html>`
    )
})

questions();

function writeToFile(content){
    fs.writeFile("index.html", content, (err) =>
    err ? console.error(err): console.log("Great Success!"))
};