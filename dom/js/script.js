// ===== COUNTER =====

// 1. Hämta element i DOMen
const countElement = document.getElementById("count");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");

// 2. Variabler som lver i JS - STATE
let count = 0;


// 3. Lägg till eventlisteners och koppla till funktion
plusBtn.addEventListener("click", function() {
    // Öka count, ändra state
    count++;
    render();
});

minusBtn.addEventListener("click", function() {
    // Minska count, ändra state
    count--;
    render()
});

resetBtn.addEventListener("click", function() {
    // Reset till 0, ändra state
    count = 0;
    render();
})

// Funktion som ändrar vad som ska visas på html-sidan.
function render() {
     console.log(`Count ${count}`);
    // Elemetet uppdateras i DOM
     countElement.textContent = count;;

}


// ===== TOGGLE ===== // 
const toggleBtn = document.getElementById("toggle");
const secretElement = document.getElementById("secret");
console.log(toggleBtn, secretElement)

toggleBtn.addEventListener("click", toggleFn);

function toggleFn() {
    const isHidden = secretElement.classList.toggle("hidden")

    let showText = "";
    if(isHidden) {
        showText = "Visa text";
    } else {
        showText = "Hej! Nu syns jag 👋. Dölj mig"
    }

    secretElement.textContent = showText;

    // Alternativ med ternary operator 
    //secretElement.textContent = isHidden ? "Visa text" : "Hej! Nu syns jag 👋. Dölj mig";
    //                            villkor   om sant.     om falskt
}




// ===== FORM ===== 
const form = document.getElementById("myForm");
const sumEl = document.getElementById("sum")

form.addEventListener("submit", getFormValues) 

function getFormValues(event) {
    // GÖr så formuläret in skickas
    event.preventDefault();

    const value1Str = form["value1"].value;
    const value2Str = form["value2"].value;

    console.log(value1Str, typeof value1Str);
    console.log(value2Str, typeof value2Str);

  // Typkonvertera
  const value1 = Number(value1Str);
  const value2 = Number(value2Str)

  const sum = value1 + value2;
  sumEl.textContent = sum;

}
