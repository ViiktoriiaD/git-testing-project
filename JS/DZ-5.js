/* Угадывать число, пока не угадаешь */
var numS = 0;
var gen = Math.floor(Math.random() * 5 + 1);
do {
    var num = +prompt("Введи число от 1 до 5");
    num === gen ?  console.log("А у меня " + gen + " Угадал!") : console.log("А у меня " + gen + " Не угадал!");  
    var errorN = num === gen;
    numS++;
} while (!errorN);
console.log ("Количество проб " + numS);