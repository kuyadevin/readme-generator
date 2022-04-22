// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path')
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
        message: 'What are the insturctions on how to install and run this program?',
        name: 'installation'
    },
    {
        type:'list',
        message:'What kind of license would you like?',
        name:'license',
        choices: [
            'MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            'Eclispe [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
            'GNU GPL v3 [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
            'None'
        ]
    },
    {
        type:'input',
        message: 'Who worked on this project?',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'GitHub'
    },
    {
        type: 'input',
        message: 'What is your e-mail?',
        name: 'email'
    },

];

// TODO: Create a function to write README file
// fs append here
function writeToFile(fileName, data) {
    // Write Markdown
return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile('NEWREADME.md', generateMarkdown({...responses}))
    });
}

// Function call to initialize app
init();
