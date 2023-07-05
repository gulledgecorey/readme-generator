// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',   
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Describe your project?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What are the instructions for usage?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who contributed to this project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How should users install extra packages?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How should your project be tested?',
    },
    {
        type: 'input',
        name: 'GitHubUsername',
        message: 'What is your GitHub username?',
    },
    {
        type: 'list',
        name: 'License',
        message: 'What is your License?',
        choices:[
            "MIT",
            "apache_2.0",
            "none"
        ]
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your Email?',
    },
]) 
.then(answers=>{
    fs.writeFileSync("README.md", `
    # ${answers.title}
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

    ## Table of Contents
- [Project Descrition](#Description)
- [Install/Usage](#Installation)
- [Contributions](#Contributions)
- [Questions](#Questions)
- [License](#License)

## Description
${answers.Description}

## Installation
${answers.installation}

## Usage
${answers.Usage}

## Contribution(s)
${answers.contributions}

## Questions
${answers.Email}

https://github.com/${answers.GitHubUsername}

## License
${answers.License}


## Test
${answers.test}
    `)
}) 
}

// Function call to initialize app
init();
