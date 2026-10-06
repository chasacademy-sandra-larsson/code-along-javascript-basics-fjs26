/* 1. Boolean (sant eller falskt, true eller false)*/
let myBool = true;


// 2. Jämförelseoperatorer 
// - Likhet (==): Används för att kontrollera om två värden är lika.
// - Olikhet (!=): Används för att kontrollera om två värden inte är lika.
// - Strikt likhet (===): Kontrollerar likhet, men inkluderar även datatypskontroll.
// - Strikt olikhet (!==): Kontrollerar olikhet, inklusive datatypskontroll.
// - Större än (>): Används för att kontrollera om ett värde är större än ett annat.
// - Mindre än (<): Används för att kontrollera om ett värde är mindre än ett annat.
// - Större än eller lika med (>=): Används för att kontrollera om ett värde är större än eller lika med ett annat.
// - Mindre än eller lika med (<=): Används för att kontrollera om ett värde är mindre än eller lika med ett annat.



// == ger lika även om datatyperna inte är samma
const age = 70; 

const isSenior = age >= 65;
console.log("isSenior", isSenior);

const isJunior = age < 18;
console.log("isJunior", isJunior);


// 3. Strikt likhet === . Både värdet och dataypen ska vara samma!
let is50 = (age === 67);
console.log("is 50", is50);

// Best practice är att använda strikt likhet === i JS!


// 4. Logiska operatorer 
// - Och, AND (&&): Används för att kontrollera om båda uttrycken är sanna.
// - Eller, OR (||): Används för att kontrollera om minst ett av uttrycken är sant.
// - Inte (!): Används för att invertera ett booleskt värde (sant blir falskt och vice versa).

// Är kunden medlem? 
let isMember = true;

// Kunden har seniorrabatt om den är medlem och över 65 - isSenior
const isSeniorDiscount = isMember && isSenior;
console.log("isSeniosDiscount", isSeniorDiscount);
const isJuniorDiscount = isMember && isJunior;
console.log("isJuniorDiscount", isJuniorDiscount);

// Är man kvalificerad för någon rabatt? 
const qualifiedForDiscount = isSeniorDiscount || isJuniorDiscount; // | - pipe - mac option + 7
console.log("qualifiedForDisccount", qualifiedForDiscount);


// Negation NOT med !
isMember = !isMember;
console.log("isMember", isMember);

// Villkor if/else, if/else if/else
if(isSeniorDiscount) {
    console.log("Du får seniorrabatt");
} else if(isJuniorDiscount) {
    console.log("Du får juniorrabatt")
} 
else {
    console.log("Du har ingen kundrabatt");
}


// Kontrollflöde - hur programmet styrs, i vilken ordning och på vilket sätt olika delar av koden körs
// Programmet flyttar sug från en instruktion till en annan beroende på villkor och andra strukturer.

// Testa kontrollflöde genom att använda debugger i consolen