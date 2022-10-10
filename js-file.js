// Reference the body of the HTML file.
const body = document.querySelector('body');

// 1. a <p> with red text that says "Hey, I'm red!"

// Create the first paragraph element.
const par = document.createElement('p');

// Set the text content in the paragraph.
par.textContent = "Hey, I'm red!";

// Add a class to the first paragraph.
par.classList.toggle('first');

// Set the text color in the paragraph to red.
par.style.cssText = 'color: red;';

// Append the first paragraph to the body of the HTML.
body.appendChild(par);

// 2. h3 with blue text that says "I'm a blue h3!"
const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.cssText = 'color: blue;';
body.appendChild(h3);

/*
3. a <div> with a black border and pink background 
color with the following elements inside of it:

    1) another <h1> that says “I’m in a div”
    2) a <p> that says “ME TOO!”
    3) Hint for this one: after creating the <div> 
    with createElement, append the <h1> and <p> to 
    it before adding it to the container.
*/
// Create the div element
const div = document.createElement('div');
div.style.border = "black"
div.style.background = "pink"

// Create the h1 to be put in the div
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

// Append the h1 to the div
div.appendChild(h1);

// Create a paragraph to go in the div
const divPar = document.createElement('p');
divPar.textContent = "ME TOO!"

// Append the par to the div
div.appendChild(divPar);

// Append the div to the body
body.appendChild(div);




