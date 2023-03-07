# Professional-README-Generator
A command-line application that dynamically generates a professional READ.md file from a user's input using Inquirer.

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
## Acceptance Criteria Simplified

This project involves creating a script that asks the user some questions, then generates a README file, using their answers to fill out a template. The README should be written to a file.

* Must use the inquirer module for asking questions of the user
* Must ask the user for the following info:
	* Title
	* Description
	* Installation instructions
	* Usage information
	* Contribution guidelines
	* Testing instructions
	* License (must be chosen from a list)
	* Github username
	* Email
* The readme template must include:
	* A table of contents
	* A section titled "Questions", which has the user's github profile, as well as instructions of how to reach them at their email
	* A section titled "Description, Installation, Usage, Contributing, and Tests", which contains related answers.
	* A title section, which has the title the user entered
	* The readme should follow the structure outlined in the professional readme guide, linked above
	* A badge associated with the license.
* The readme must be written to a file when the program is completed.
* The readme template should either be generated using a template literal, or by reading a template file.
