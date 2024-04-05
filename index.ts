#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
 
const currency: any = {
    USD: 1, // Base Currency
    Euro:0.91,
    GDP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
     name:'from',  
     message: chalk.greenBright('Enter From Currency'),
     type:'list',
     choices: ['USD', 'Euro', 'GDP', 'INR', 'PKR'] 

},
{
     name:'to',  
     message: chalk.redBright('Enter to Currency'),
     type:'list',
     choices: ['USD', 'Euro', 'GDP', 'INR', 'PKR'],
},
{
     name:'amount',  
     message: chalk.yellowBright('Enter From Amount'),
     type: 'number'


    }
   ]
 ) 
 let fromAmount = currency[user_answer.from]
 let toAmount = currency[user_answer.to]
 let amount = parseFloat(user_answer.amount)
 let baseAmount = amount / fromAmount //Usd Base Currency//
 let convertedAmount = baseAmount * toAmount
 console.log(chalk.magentaBright`The Converted Amount is: ${convertedAmount}`);
 
 