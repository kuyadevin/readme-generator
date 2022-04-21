// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project',
        name: 'title'
    },
    {
        type:'input',
        message: 'What is the description of your project?',
        name:'description'

    },
    {
        type: 'input',
        message: 'Is there anything that needs to be installed?',
        name:'installation'
    },
    {
        type: 'input',
        message: 'What are the insturctions on how to run this program?',
        name: 'instructions'
    },
    {
        type:'input',
        message: 'What technologies did you use?',
        name:'technology'
    },
    {
        type:'list',
        message:'What kind of license would you like?',
        name:'license',
        choices: [
            'MIT',
            
        ]
    },
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'GitHub'
    },
    {
        type: 'input',
        message: 'What is your e-mail?',
        name: 'e-mail'
    },
    {
        type:'input',
        message: 'Who worked on this project?',
        name: 'collaborators'
    }
];

// TODO: Create a function to write README file
// fs append here
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
