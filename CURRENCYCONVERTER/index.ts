import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";

const UsdtoPkr = 228.43;
const PkrtoUsd = 0.0044;
const EutoPkr = 239.85;
const PkrtoEuo = 0.0042;
const EutoUsd = 1.05;
const UsdtoEu = 0.95;
let repeat = false;

async function counter() {
  do {
    let answer: { CurrencyFrom: string; CurrencyTo: string; Amount: number } =
      await inquirer.prompt([
        {
          name: "CurrencyFrom",
          type: "list",
          choices: ["USD", "PKR", "EU"],
          message: "SELECT FROM WHICH CURRENCY YOU WANT TO CONVERT",
        },
        {
          name: "CurrencyTo",
          type: "list",
          choices: ["USD", "PKR", "EU"],
          message: "SELECT TO WHICH CURRENCY YOU WANT TO CONVERT",
        },
        {
          name: "Amount",
          type: "number",
          message: "Enter value: ",
        },
      ]);

    // console.log(answer.Amount);
    switch (answer.CurrencyFrom) {
      case "USD":
        if (answer.CurrencyTo === "PKR") {
          let amount = answer.Amount * UsdtoPkr;
          console.log(amount);
        } else if (answer.CurrencyTo === "EU") {
          let amount = answer.Amount * UsdtoEu;
          console.log(amount);
        } else {
          console.log(answer.Amount);
        }
        break;
      case "PKR":
        if (answer.CurrencyTo === "USD") {
          let amount = answer.Amount * PkrtoUsd;
          console.log(amount);
        } else if (answer.CurrencyTo === "EU") {
          let amount = answer.Amount * PkrtoEuo;
          console.log(amount);
        } else {
          console.log(answer.Amount);
        }
        break;

      case "EU":
        if (answer.CurrencyTo === "USD") {
          let amount = answer.Amount * EutoUsd;
          console.log(amount);
        } else if (answer.CurrencyTo === "PKR") {
          let amount = answer.Amount * EutoPkr;
          console.log(amount);
        } else {
          console.log(answer.Amount);
        }
        break;
    }
    repeat = await Repeat();
  } while (repeat == true);
}

async function Repeat() {
  let again = await inquirer.prompt([
    {
      name: "repeat",
      type: "list",
      choices: ["y", "n"],
      message: "Do you want to Continue",
    },
  ]);

  return again.repeat === "y" ? true : false;
}

counter();
