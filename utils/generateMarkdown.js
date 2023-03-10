function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## GitHub

[${data.github}](https://github.com/${data.github})

## Description

${data.description}

## User Story

${data.userstory}

## Features

${data.features}

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseBadge(data.license)}

## Contact Me

Contact me at ${data.email}
`;
}

function renderLicenseBadge(license) {
  if (license == "None") {
    return `[Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return '';
}

module.exports = generateMarkdown