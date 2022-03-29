const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const {
  generateEngineerCard,
  generateInternCard,
  generateManagerCard,
  baseHTML,
} = require("./src/htmlGen");

const teamMemberHTMLArr = [];

function init() {
  function managerCreate() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your Manager's name?",
        },
        {
          type: "input",
          name: "email",
          message: "What is their email?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the Manger's id number?",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the Office Number?",
        },
      ])
      .then(({ name, id, email, officeNumber }) => {
        const manager = new Manager(name, id, email, officeNumber);
        teamMemberHTMLArr.push(generateManagerCard(manager));
        mainMenu();
      });
  }
  function mainMenu() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "position",
          choices: ["Engineer", "Intern", "I'm all done!"],
          message: "Would you like to add another Employee?",
        },
      ])
      .then((answers) => {
        switch (answers.position) {
          case "Engineer":
            return engineerCreate();
          case "Intern":
            return internCreate();
          default:
            return generateHTML();
        }
      });
  }
  function engineerCreate() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the Engineer's name?",
        },
        {
          type: "input",
          name: "email",
          message: "What is their email?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the Engineer's id number?",
        },
        {
          type: "input",
          name: "github",
          message: "What is the Engineer's GitHub username?",
        },
      ])
      .then(({ name, id, email, github }) => {
        const engineer = new Engineer(name, id, email, github);
        teamMemberHTMLArr.push(generateEngineerCard(engineer));
        mainMenu();
      });
  }
  function internCreate() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the Intern's name?",
        },
        {
          type: "input",
          name: "email",
          message: "What is their email?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the Intern's id number?",
        },
        {
          type: "input",
          name: "school",
          message: "What is the Intern's school?",
        },
      ])
      .then(({ name, id, email, school }) => {
        const intern = new Intern(name, id, email, school);
        teamMemberHTMLArr.push(generateInternCard(intern));
        mainMenu();
      });
  }
  function generateHTML() {
    fs.writeFile("./dist/index.html", baseHTML(teamMemberHTMLArr), (err) => {
      err ? console.log(err) : console.log("Your project is good to go!");
    });
  }

  managerCreate();
}

init();
