
// Varför arrayer?

// Istället för att ha flera variabler...
// const fruit1 = "apple";
// const fruit2 = "banana";
// const fruit3 = "orange";

// Så kan vi ha alla värden kopplade till en array. Och man kan enkelt iterera kring en array! (vi ska kolla på det strax)
//const fruit = ["apple", "banana", "orange"];
//Index           0.        1.       2


// CRUD - CREATE, READ, UPDATE, DELETE 


// CREATE 
// med fördefinierade värden
const fruit = ["apple", "banana", "orange"];
console.log(fruit);

// Tom array
const myArr = [];


// READ 
// Att access index för arrayen
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);


// ES6 Desctructering är också ett sätt - men vi tar senare! Överkurs nu..
const [apple, banana, orange] = fruit
console.log(apple);
console.log(banana);
console.log(orange);

// UPDATE 
fruit.push("kiwi"); // lägger till sist i arrayen
console.log(fruit);
fruit.push("pear");
console.log(fruit);
fruit.pop(); // tar bort sista elementet
console.log(fruit);
fruit.shift();
console.log(fruit);
fruit.unshift("apple");
console.log(fruit);


// DELETE

// Ta bort specifikt värde eller värden med splice
// [ 'apple', 'banana', 'orange', 'kiwi' ]
//      0.       1.       2.         3

const slicedFruits = fruit.slice(0, 1); // plockar ut en del element men ändrar inte orginalet
console.log(slicedFruits);

const splicedFruits = fruit.splice(0, 1); // tar bort och eller lägger till men ändrar orginalet
console.log(splicedFruits);

// Den viktigaste skillnaden: slice ändrar inte originalet, splice gör det.
// SLICE är mycket vanligare då man inte vill ändra orginalet



// Ta bort en array med null
let numbers = [1,2,3];
numbers = null;
console.log(null);
