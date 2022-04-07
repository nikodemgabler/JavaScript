// TRAVERSING THE DOM - przemierzanie
let itemList = document.querySelector('#items'); 

// parentNode
console.log(itemList.parentNode) // it gives us a parent of #items. It is div#main
itemList.parentNode.style.background = "#f4f4f4"

// parentNode.parentNode
console.log(itemList.parentNode.parentNode); // = .container

// parentElement
console.log(itemList.parentElement)
itemList.parentElement.style.background = "#f4f4f4"

// childNodes
console.log(itemList.childNodes); // text in console.log = white space between code. If code is inline, then it doesn't show.

// children
console.log(itemList.children); // IT'S BETTER THAN childNodes - it doesn't show "text"
console.log(itemList.children[1]);
itemList.children[1].style.color = "blue";

// firstChild
console.log(itemList.firstChild); // it's useless it shows #text

// firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.style.color = "green";

// lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.color = "orange"

// nextSibling
console.log(itemList.nextSibling); // useless (#text)

// nextElementSibling
console.log(itemList.nextElementSibling);

// previousElementSibling
console.log(itemList.previousElementSibling);



// HOW TO CREATE ELEMENTS ?

// Create a div
let newDiv = document.createElement('div');
console.log(newDiv);

// Add a class
newDiv.className = 'hello'

// Add an id
newDiv.id = 'mainHello'

// Add attr
newDiv.setAttribute('title', 'Hello Div')

// Create text node
let newDivText = document.createTextNode('Hello world');

// Add text to div
newDiv.appendChild(newDivText);
let newDivWithText = newDiv.appendChild(newDivText);


// Adding to our HTML an element
let header = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

header.insertBefore(newDiv, h1);
newDiv.style.color = "purple"