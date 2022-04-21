// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');
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
        message: 'How do you use your application?',
        name:'usage'
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
            'Eclispe',
            'GNU GPL v3',
            'IBM'

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
function writeToFile(fileName, data) {
    // Write Markdown
    const markdown = generateMarkdown(data);
    fs.writeToFile('ReadMe.md',markdown)
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
