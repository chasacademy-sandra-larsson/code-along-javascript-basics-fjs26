// Strängar i Javascript - 3 olika sätt
const s1 = "FJS26";
const s2 = 'FJS26';
const s3 = `FJS26`; // Backticks Shift + `(bredvid +)



// Konkatinera strängar (lägga ihop stränger) på 2 olika sätt


// 1. Strängkonkatinering
const name = "Sandra";
const hobby = "music"
const greeting1 = "Hello my name is " + name + "and I like " + hobby;
console.log("greeting 1", greeting1);


// 2. Template strings (ES6)
const greeting2 = `Hello my name is ${name} and I like ${hobby}`;
console.log("greeting 2", greeting2);