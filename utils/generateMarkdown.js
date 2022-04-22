// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//var license= `${data.license}`
var licenseLink = ''
function renderLicenseBadge(license) {
  if (license !== 'None'){
    return `![GitHub license](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if  (license === 'MIT'){
    return '(https://opensource.org/licenses/MIT)' ;
  }
  else if (license === 'Ecplise'){
    return '(https://opensource.org/licenses/EPL-1.0)'
  } 
  else if (license === 'GNU GPL v3'){
    return '(https://www.gnu.org/licenses/gpl-3.0)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
*[Contributions](#contributions)
*[Tests](#tests)
*[Questions](#questions)

### Installation
${data.installation}

### Useage 
${data.usage}

### License
${licenseBadge}

### Contributions
${data.contributions}

### Tests

### Questions
${data.gitHub}
Any additional questions? Pleasse feel free to e-mail me at: 
${data.email}
`;
}

module.exports = generateMarkdown;