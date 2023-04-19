const inquirer = require('inquirer');
const fs = require('fs');
const htmlData = require('./src/htmldata');

inquirer.prompt([
    // manager prompts
    {
        type: 'name',
        name: 'Manager',
        message: "Please enter the name of your team manager.",
        validate (value) {
            const isString = `/^[a-zA-Z]+$/`

            if (value.match(isString)) {
                return true;
            } else {
               return 'Please enter a valid name';
            }
        }, 
        validate (answer) {
            if (!answer) {
                return 'Please, enter a name!';
            } else {
                return true;
            }
        },
    },
    {
        type: 'number',
        name: 'ID:',
        message: "Please, enter the employee ID your team manager!",
        filter: Number
    },
    {
        type: 'email',
        name: 'Email:',
        message: "Please, enter the email address of your team manager!",
    },
    {
        type: 'number',
        name: 'Office Number:',
        message: "Please enter the office number of your team manager."
    },
    {
        type: 'input',
        name: 'GitHub:',
        message: "Please enter the GitHub username of your team manager."
    },
    // // engineer prompts
    {
        type: 'input',
        name: 'Engineer',
        message: "Please enter the name of your team engineer."
    },
    {
        type: 'input',
        name: 'ID:',
        message: "Please enter the employee ID of your team engineer."
    },
    {
        type: 'input',
        name: 'Email:',
        message: "Please enter the email address of your team engineer."
    },
    {
        type: 'input',
        name: 'Office Number:',
        message: "Please enter the office number of your team engineer."
    },
    {
        type: 'input',
        name: 'GitHub:',
        message: "Please enter the GitHub username of your team engineer."
    },
    // intern prompts
    {
        type: 'input',
        name: 'Intern',
        message: "Please enter the name of your team intern."
    },
    {
        type: 'number',
        name: 'ID',
        message: "Please enter the employee ID of your team intern."
    },
    {
        type: 'email',
        name: 'Email:',
        message: "Please enter the email address of your team intern."
    },
    {
        type: 'number',
        name: 'Office Number:',
        message: "Please enter the office number of your team intern."
    },
    {
        type: 'input',
        name: 'GitHub:',
        message: "Please enter the GitHub username of your team intern."
    },
    // options
    {
        type: 'rawlist',
        name: 'option',
        message: 'Please an option to continue',
        choices: ['Add another engineer','Add another intern','Continue'],
        default: "Continue"
    },
    // add another engineer 
    {
        type: 'input',
        name: 'Engineer',
        message: "Please enter the name of your team engineer.",
        when: function(value) {
            return value.option == 'Add another engineer'
        }
    },
    {
        type: 'input',
        name: 'ID:',
        message: "Please enter the employee ID of your team engineer.",
        when: function(value) {
            return value.option == 'Add another engineer'
        }
    },
    {
        type: 'input',
        name: 'Email:',
        message: "Please enter the email address of your team engineer.",
        when: function(value) {
            return value.option == 'Add another engineer'
        }
    },
    {
        type: 'input',
        name: 'Office Number:',
        message: "Please enter the office number of your team engineer.",
        when: function(value) {
            return value.option == 'Add another engineer'
        }
    },
    {
        type: 'input',
        name: 'GitHub:',
        message: "Please enter the GitHub username of your team engineer.",
        when: function(value) {
            return value.option == 'Add another engineer'
        }
    },
    // add another intern 
    {
        type: 'input',
        name: 'Intern',
        message: "Please enter the name of your team intern.",
        when: function(value) {
            return value.option == 'Add another intern'
        }
    },
    {
        type: 'number',
        name: 'ID',
        message: "Please enter the employee ID of your team intern.",
        when: function(value) {
            return value.option == 'Add another intern'
        }
    },
    {
        type: 'email',
        name: 'Email:',
        message: "Please enter the email address of your team intern.",
        when: function(value) {
            return value.option == 'Add another intern'
        }
    },
    
    {
        type: 'number',
        name: 'Office Number:',
        message: "Please enter the office number of your team intern.",
        when: function(value) {
            return value.option == 'Add another intern'
        }
    },
    {
        type: 'input',
        name: 'GitHub:',
        message: "Please enter the GitHub username of your team intern.",
        when: function(value) {
            return value.option == 'Add another intern'
        }
    },
])
.then(function(data) {
    fs.writeFile('./dist/index.html', `${htmlData(data)}`, (error) => {
        error ? console.log(error) : console.log("Team profile is successfully created")
    })
}); 