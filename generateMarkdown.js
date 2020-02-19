function generateMarkdown(data) {
  return `
  # ${data.title}
  [![NPM version](https://david-dm.org/ellen0404/README_Generator_ED.svg)](https://www.npmjs.com/package/markdown-toc)<br>
  ## Project by ${data.name}
  ![](${data.avatar_url})<br>
  #### Email adress: ${data.email}<br>
  ## Overview<br>${data.description}<br>
  ## Table of Contents


  - [Installation](#installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

## Installation 
 Write info how to install you app

## Usage
Write onfo about the usage of your app

## License
Your License info

## Contributing
Contributing info

## Tests
Put here your tests

## Questions
Questions

  
  `;
}

module.exports = generateMarkdown;
