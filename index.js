#! /usr/bin/env node
import inquirer from "inquirer";
const randomNum = Math.floor(Math.random()) * 6 + 1;
const answer = await inquirer.prompt([
    {
        message: "Please guess a game number : 1-6",
        type: "number",
        name: "userNumber",
    }
]);
if (answer.userNumber !== randomNum) {
    console.log("You Guess a wrong number:Guess again");
}
else {
    console.log("Congratulation you enter a right number");
}
