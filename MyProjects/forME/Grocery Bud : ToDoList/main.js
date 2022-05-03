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
// clear items
clearBtn.addEventListener('click', clearItems)

const deleteBtn = document.querySelector('.delete-btn');
console.log(deleteBtn);

// ********* FUNCTIONS *********
// addItem
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString(); // we won't use it in professional projects - zmienna nadajaca unikalne ID


    if(value) {
        // console.log("value is truthy")
    } else {
        // console.log("value is falsy")
    }

    // Submitujac button mamy 3 mozliwosci:
    // 1. Dodanie itemu do listy - jezeli nie edytujemy 
    if (value && !editFlag) {
        const element = document.createElement('article');
        // add class
        element.classList.add('grocery-item');
        // add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = 
        `<p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">
                <div class="edit-icon">E</div>
            </button>
            <button type="button" class="delete-btn">
                <div class="delete-icon">X</div>
            </button>
        </div>`
        // append child
        list.appendChild(element)
        // display alert
        displayAlert('item added to the list', 'success');
        // show container
        container.classList.add('show-container')
        //add to local storage
        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault()
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
    }, 1000)
}

// clear items
function clearItems() {
    const items = document.querySelectorAll('.grocery-item');

    if(items.length > 0) {
        items.forEach(function(item) {
            list.removeChild(item);
        })
    }
    container.classList.remove('show-container');
    displayAlert('empty list', 'danger');
    setBackToDefault();
    localStorage.removeItem('list');
}

//set back to default
function setBackToDefault() {
    grocery.value = '';
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}
// ********* LOCAL STORAGE *********
function addToLocalStorage(id, value) {
    console.log('added to local storage');
}



// 6:49