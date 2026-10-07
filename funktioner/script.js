
// Deklarerar en funktion 


function addTen(num1, num2) {
    return num1 + num2;
}

const result = addTen(2,4);
console.log(result);


// Med argument och return

function fruitJuicer(fruit) {
    console.log(fruit + "juice");
}

fruitJuicer("apple");


// Med argument men utan return

function doSomething() {
    console.log("en massa saker hädner");
}

doSomething();


// Functionsutryck (function expression)
const subtract = function(num1, num2) {
    return num1 - num2;
}

const diff = subtract(5,4);
console.log(diff);


// Skriva villkor i en funktion - return avslutar funtkion omedelbart

function checkAvailability(stock) {
    if(stock <= 0) {
       return "Varan är slut";
    } else if(stock <= 10) {
        return "Det finns få kvar";
    } else if (stock > 10) {
        return "Det finns många kvar";
    } else {
        return "Något gick fel";
    }
}

const tshirtsInstock = 5;
const message = `${checkAvailability(tshirtsInstock)} av t-shirts`;
console.log(message)

// Arrow-function - pilfunktioner - endast ett komprimerat skrivsätt!
// Varför pilfunktioner i JS? - allt kommer gå snabbare att skriva och läsa!

const myFunc1 = (num) => {
    const sum = num + 1;
    return sum;
}

const myFunc2 = (num) => num + 1;
