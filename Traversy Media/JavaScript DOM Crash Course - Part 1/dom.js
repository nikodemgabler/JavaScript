        // EXAMIN THE DOCUMENT OBJECT // 

// it's gonna show uw all of the different properties and methods attached to the document object 
// console.dir(document);

// console.log(document.URL);
// // document.title = 123;
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// // document.all[10].textContent="Hello";
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);



        // SELECTORS - FEW METHODS THAT WE USE TO QUERY THE DOM

// GET-ELEMENT-BY-ID
let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
console.log(headerTitle);

// GET-ELEMENTS-BY-CLASSNAME
let items = document.getElementsByClassName('list-group-item')
console.log(items)
console.log(items[0])
items[0].textContent = "Hello 1";
items[1].style.fontWeight = "bold";
items[1].style.background = "yellow";

// It gives console error
// items.style.background = "grey"; // it won't work because it's an HTML collection or it's an array. We have to loop through this.
for (i = 0; i < items.length; i++) {
    items[i].style.background = "grey";
}

//GET-ELEMENT-BY-TAG-NAME
let li = document.getElementsByTagName('li');
li[0].style.color = "white";


// QUERYSELECTOR - we can use it only for one selector
let header = document.querySelector('#main-header');
header.style.borderTop = "solid 4px purple";

let input = document.querySelector('input'); // It will take first input from the page
input.value = "Hello World"

let sumbit = document.querySelector('input[type="submit"]')
sumbit.value = "SEND"

let item = document.querySelector('.list-group-item');
item.style.color = "red";

let lastItem = document.querySelector('.list-group-item:last-child')
lastItem.style.color = "blue";

let secondItem = document.querySelector('.list-group-item:nth-child(2)')
secondItem.style.color = "yellow";


// QUERYSELECTORALL

let titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].style.color = "purple"

let lisOdd = document.querySelectorAll('li:nth-child(odd)')
for (var i = 0; i < lisOdd.length; i++) {
    lisOdd[i].style.background = "aqua";
}

let lisEven = document.querySelectorAll('li:nth-child(even)')
for (var i = 0; i < lisEven.length; i++) {
    lisEven[i].style.background = "black";
}

// CHANGING-ELEMENT-TEXT
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye"; // The difference is that this one pays attention to the styling
//Item Lister<span style = "display: none;"> 123</span><
//console.log(headerTitle.textContent) - It shows <span> despite display: none
//console.log(headerTitle.innerText) - It doesn't
//  headerTitle.innerHTML = '<h3>Hello</h3>'; // Now in code it looks like: <h1><h3>Hello</h3></h1>

// CHANGING-ELEMENT-STYLES
//  header.style.borderBottom = "solid 3px black";
 

//