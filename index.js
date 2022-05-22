const htmlgen = require('./src/htmlgen');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const inquirer = require('inquirer');
const fs = require('fs');

const teamArray = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type:'input',
            name:'name',
            message:'The managers name?',
        },
        {
            type:'input',
            name:'id',
            message:'The managers ID?',
        },
        {
            type:'input',
            name:'email',
            message:'The managers email?',
        },
        {
            type:'input',
            name:'officeNumber',
            message:'The managers office number?',
        }
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);
        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log(``);
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What role is the employee?",
            choices: ['Intern', 'Engineer']
        },
        {
            type: 'input',
            name: 'name',
            message: "Employee name?" 
        },
        {
            type: 'input',
            name: 'id',
            message: "Employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "Employee email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "Employee Github username?",
            when: (input) => input.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: "Employee school name?",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'addMoreEmployees',
            message: "Are there any more Employees?",
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Team log created successfully!");
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return htmlgen(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    })
;
