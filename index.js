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

              async function writeToFile(fileName, data) {
                try {
                  await fs.promises.writeFile(path.join(process.cwd(), fileName), data);
                  console.log(`File written successfully at ${fileName}`);
                } catch (error) {
                  console.log(`Error writing file: ${error}`);
                }
              }
              
              async function init() {
                try {
                  const inquirerAnswers = await inquirer.prompt(questions);
                  console.log("Building your README... Please wait...");
                  await writeToFile("generated/README.md", generateMarkdown({ ...inquirerAnswers }));
                } catch (error) {
                  console.log(`Error generating README: ${error}`);
                }
              }
              
              init();
              
