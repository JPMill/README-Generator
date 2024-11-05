// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project? ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a description of your project: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide intallation instructions: ',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide usage information: ',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Select a license for your project: ',
        name: 'license',
        choices: ['MIT','GPLv3','Apache 2.0','None']
    },
    {
        type: 'input',
        message: 'Provide contribution guidelines: ',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Provide test instructions: ',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your GitHub username? ',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address? ',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('README file created successfully!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);
            console.log("README:\n")
            console.log(readmeContent)
            writeToFile('README.md', readmeContent)
        })
}

// Function call to initialize app
init();
