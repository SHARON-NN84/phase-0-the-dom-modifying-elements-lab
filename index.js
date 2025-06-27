// Write your code here!
// Step 1: Remove the <main> element
const main = document.getElementById("main");
main.remove();

// Step 2: Create a new <h1> element
const newHeader = document.createElement("h1");

// Step 3: Assign an id of 'victory' to the new <h1>
newHeader.id = "victory";

// Step 4: Set the text inside the <h1> element
newHeader.textContent = "sharon is the champion";

// Step 5: Append the new <h1> to the body
document.body.append(newHeader);
