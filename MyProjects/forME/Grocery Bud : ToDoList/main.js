// ********* SELECT ITEMS *********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.querySelector('#grocery');
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ********* EVENT LISTENERS *********
// submit form
form.addEventListener('submit', addItem);

// ********* FUNCTIONS *********
// addItem
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString(); // we won't use it in professional projects - zmienna nadajaca unikalne ID


    if(value) {
        console.log("value is truthy")
    } else {
        console.log("value is falsy")
    }

    // Submitujac button mamy 3 mozliwosci:
    // 1. Dodanie itemu do listy - jezeli nie edytujemy 
    if (value && !editFlag) {
        const element = document.createElement('article');
        element.classList.add('grocery-item');
        // add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        console.log(element)
    }
    // 2. Edytowanie itemu
    else if(value && editFlag) {
        console.log('editing');
    }
    // 3. Puste pole
    else {
        displayAlert("please enter value", "danger")
        }
}

// displayAlert
function displayAlert(text, action) { // text = to co chcemy pokazac // action = jaki będzie kolor (danger or sucess)
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // remove alert
    setTimeout(function() {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1700)
}


// ********* LOCAL STORAGE *********




// 6:49