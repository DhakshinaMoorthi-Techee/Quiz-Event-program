
var readlinesync = require("readline-sync");
const chalk = require('chalk');

var score = 0 ;

var questions =[
{
 question: chalk.blue("1.Largest State in terms of Area ?"), 
 Answer:"rajasthan"
}, 
{
 question: chalk.blue("2.Smallest district in Tamilnadu by area ?"), 
 Answer:"chennai"
}, 
{
 question: chalk.blue("3.Total international airports in India ?"), 
 Answer:"34"
}, 
{
 question: chalk.blue("4.Primeminister of India ?"), 
 Answer:"narenderamodi"
}, 
{
 question: chalk.blue("5.First women IPS in india ?"), 
 Answer:"Kiranbedi"
}, 
{
 question: chalk.blue("6.God of Cricket ?"), 
 Answer:"sachin"
}, 
{
 question: chalk.blue("7.Manchester of Tamilnadu ?"), 
 Answer:"coimbatore"
}, 
{
 question: chalk.blue("8.Symbol of india ?"), 
 Answer:"tigerface"
}, 
{
 question: chalk.blue("9.Capital of india ?"), 
 Answer:"delhi"
}, 
{
 question: chalk.blue("10.ex primeminister of india ?"), 
 Answer:"manmohansingh"
}, 

]

function Welcome(){
var userName = readlinesync.question(chalk.green("what is your name?"));
console.log("Hiii " + chalk.blue.bold(userName) + ", You are kindly Welcomed by" + chalk.white.bold(" Dhakshina Moorthi B ") + "for this Quiz Event");
}

function quiz(question, Answer){
var userAnswer = readlinesync.question(question);
  if(userAnswer == Answer){
 console.log(chalk.green("you are correct")
 );
 console.log("---------------");
score = score + 1;
}
else{
console.log(chalk.red("you are incorrect"));
console.log("---------------");
}
console.log("your score:" + score);
console.log("-----------------------------------");
}

function play(){
for(var i =0; i<questions.length; i++){
var currentQuestion= questions [i];
 quiz(currentQuestion.question,currentQuestion.Answer);
}
console.log(chalk.magenta.bgWhite("your final score is ") + score);
}

Welcome();

play();