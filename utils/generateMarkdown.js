// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
      return '';
  }
  const badges = {
      MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
      GPLv3: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
      'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)',
  };
  return badges[license];
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') {
      return '';
  }
  const links = {
      MIT: '[MIT License](https://opensource.org/licenses/MIT)',
      GPLv3: '[GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)',
      'Apache 2.0': '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)',
  };
  return links[license];
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
      return '';
  }
  return `
## License
This project is licensed under the ${license} license.  
For more details, please refer to the ${renderLicenseLink(license)}.
  `;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please feel free to reach out:
- GitHub: [${data.username}](https://github.com/${data.username})
- Email: [${data.email}](mailto:${data.email})
  `;
}

export default generateMarkdown;