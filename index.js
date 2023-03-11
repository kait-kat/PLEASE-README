const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
        
      {
          prompt: "Enter your GitHub username",
          name: "github",
          type: "input"
        },
        {
          prompt: "Enter your email",
          name: "email",
          type: "input"
         },
        { prompt: 'Project Title:',
            type: "input",
            name: "title",
            validate(answer) {
                if (!answer) { return "Please enter a title."}
                else { return true }
            },
        },
        { prompt: "Enter a description",
                  type: "input",
                  name: "desciption",
                  validate(answer) {
                    if (!answer) { return "Please enter a description." }
                    else { return true }
                  },
                },
        { prompt: "Enter a user story.",
                  type: "input",
                  name: "userstory",
                  validate(answer) {
                    if (!answer) { return "Please enter a user story." }
                    else { return true }
                  },
                },
        { prompt: "List the applications features.",
                  type: "editor",
                  name: "features",
                  default:
                    "- Feature 1\n" +
                    "- Feature 2\n" +
                    "- Feature 3",
                },
        { prompt: "Add installation steps.",
                  type:    "editor",
                  name:    "installation",
                  default:
                    "1. Step 1\n" +
                    "2. Step 2\n" +
                    "3. Step 3",
                },
        { prompt: "Add usage.",
                  type:    "input",
                  name:    "usage",
                },
        { prompt: "Pick a License.",
                  type:    "list",
                  choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2" ,"BSD3", "None"],
                  name:    "license",
                },
              ];

              async function writeToFile(file, data) {
                try {
                  await fs.promises.mkdir(path.dirname(file), { recursive: true });
                  await fs.promises.writeFile(file, data);
                  console.log(`File saved as ${file}`);
                } catch (err) {
                  console.error(err);
                }
              }
              
              async function init() {
                try {
                  const answers = await inquirer.prompt(questions);
                  const markdown = generateMarkdown(answers);
                  await writeToFile('./generated/README.md', markdown);
                } catch (err) {
                  console.error(err);
                }
              }              
              
              init();
              
