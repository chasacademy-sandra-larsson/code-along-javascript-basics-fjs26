// Variabler - behållare för data i Javascript och alla andra programmeringspråk

// 1. Deklarera en variabel gör med antingen "const" eller "let" 
let name;
// console.log(name);

// 2. Tilldela variabeln ett värde
name = "Sandra";
// console.log(name);

// 3. Tilldela en variabel en annan variabels värde
let anotherName = name;
// console.log("anotherName", anotherName);
// console.log("name", name);


// 4. Uppdatear variablens värde
let num = 0;
// console.log("num", num);
num = num + 1;
// console.log("num", num);  


// 5. Ta bort variabelns värde
num = null;
// console.log(num);


// 6. Att skriva variabelnamn 
// - var deskriptiv
// - använd engelska
// - konvention camelCase

// 7. Variabler kan deklareras med let eller const (ES6), var är old school 
// en let går att förändra
// en const går inte att förändra (förutom i array och objekt, då det är referensvärden)
// TIPS: Börja att deklarera en variable med const. Om du märker att variabelns värde kommer behöva att ändras, ändra då till let
const secretNumber = 1234;
// console.log("secretNumber", secretNumber);
//secretNumber = 3423;
// console.log("secretNumber", secretNumber);
 

// 8. Datatyper. Javascript är ett löst typat språk. Det innebär att man inte behöver sätta datatyp från början. JS listar datatypen. (sen ska vi köra Typescript ;-)

// String - text 
const message = "Viktigt meddelande";
// Nummbers
const temperature = 37.9;
// Boolean
const isGameOver = true;
// Undefined
let nothing;
// Null 
const something = null;
// Objekt
const arr = [1,2,3]
const obj = {}


// 9. Kolla datatyp med typeof
console.log("message", typeof message);
console.log("temperature", typeof temperature)
console.log("isGameover", typeof isGameOver);
console.log("nothing", typeof nothing);
console.log("something", typeof something);
console.log("arr", typeof arr);
console.log("obj", typeof obj);

// 10. Matematisk operatorer (de som man räknar med)
// +, -, *, /, ()
let sum = 1 + 120 - 3;
let prod = 5 * 5; 
let antoherProd = (1 + 5) * (2 - 3);


// 11. Öka eller minska något med ett tal
let counter = 0;
//counter = counter + 2;
counter += 2; // samma sak



// 12. Modulo % - beräknar resten
let remainder = 10 % 4;
console.log("remainder", remainder);



// Är detta tal jämnt?
let numX = 34;
const remain = numX % 2;
console.log("remain", remain);

if(remain === 0) {
    console.log("isEven");
} else {
    console.log("isOdd");
}
