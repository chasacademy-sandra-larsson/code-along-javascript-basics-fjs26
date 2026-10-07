

const myArray = [2, 3, 4, 6, 78, 100];

// krångligt att läsa ut var värde för sig

// for loop
//.   start.    så länge sant?     hur vi räknar upp/ner
for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}


// while-loop
let j = 0;
while(j < myArray.length) {
    console.log(myArray[j]);
    j++;
}


let gameOver = false;
while(gameOver) {
    // spelet spelas

  gameOver = !gameOver;
  break;
}

console.log("Gameover")

// forEach-loop - förenkling av for. Den itererar varje värde i en array

// ITERERANDE ARRAY METODER - lite överkurs nu, men...

myArray.forEach(function(item, index) {
  console.log("foreach", item, index);
})

myArray.forEach((item, index) => {console.log("foreach med arrayfunction", item, index)})


// Lite överkurs.
//  Men map kan manipulera varje item
const mappedArray = myArray.map((item)  =>  item * 2);
console.log("mappedArray", mappedArray);


// Filter kan sortera ut. 
const filteredArrray = myArray.filter((item) => item > 10);
console.log("filteredArray", filteredArrray);
