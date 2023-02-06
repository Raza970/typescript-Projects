#!usr/bin/env-node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";

const sleep = () => {
  return new Promise((res, rej) => {
    setTimeout(res, 1000);
  });
};

async function welcome() {
  const rainbowtitle = chalkanimation.rainbow("----Let's start Program----");
  await sleep();
  rainbowtitle.stop();
}

welcome();

async function askQuestion() {
  let que = await inquirer.prompt([
    {
      type: "input",
      name: "str",
      message: chalk.green("Please enetr the Paragraph you qant to convert: "),
    },
  ]);

  // WORDS
  // CONVERT A STRING INTO ON ARRAY
  const word_arr = que.str.split(" ");
  console.log(word_arr);
  console.log(`words in paragraph: ${word_arr.length} `);

  // CHARATERS:
  const chr_withoutspace = que.str.replace(/ /g, "");
  console.log(chr_withoutspace);
  console.log(`Characters in Paragraph: ${chr_withoutspace.length}`);
}
// askQuestion()

async function startAgain() {
  do {
    await askQuestion();
    var playAgain = await inquirer.prompt([
      {
        type: "input",
        name: "restart",
        message: chalk.green(`Do you want to restat ? press Y or N: `),
      },
    ]);
  } while (
    playAgain.restart === "y" ||
    playAgain.restart === "yes" ||
    playAgain.restart === "Y" ||
    playAgain.restart === "YES"
  );
}
startAgain();
