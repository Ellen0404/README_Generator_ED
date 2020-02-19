// LIBRARIES PACKAGES

const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const generateMarkdown = require("./generateMarkdown");
const api = require("./api");
const dotenv = require("dotenv");
const open = require("open");
const electronHtmlTo = require("electron-html-to");
const electron = require("electron");


// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

async function init() {
    try {
        // QUESTIONS TO USER
        const responses = await inquirer.prompt([
            {
                type: "input",
                name: "username",
                message: "What is your GitHub username?"
            },
            {
                type: "input",
                name: "title",
                message: "What is your Project title?"
            },
            {
                type: "input",
                name: "description",
                message: "Write your project description here"
            }
        ]);

        const { username, title, description } = responses;
        // GET GITHUB INFO FROM GITHUB API
        const repo = await axios.get(`https://api.github.com/users/${username}`);
        const { data } = repo;
        const { avatar_url, email } = data;

        // CREATE MARKDOWN FILE
        const markdown = await generateMarkdown({
            email,
            avatar_url,
            title,
            description

        });

        fs.writeFileSync(username + ".md", markdown, function (err) {
            if (err) {
                throw err;
            }
        });

    } catch (err) {
        console.log(err);
    }
}

init();