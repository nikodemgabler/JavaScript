let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.querySelector('#search')


form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem)

filter.addEventListener('keyup', filterItems)


function addItem(e) {
    e.preventDefault();

    let newItem = document.createElement('li') // making new li
    newItem.className = "list-group-item" // adding class to li

    let inputText = document.getElementById('inputText') // grabbing input

    itemList.appendChild(newItem); // adding li to ul

    // ADDING BUTTON
    let newButton = document.createElement('button')
    newButton.className = "btn-danger delete";
    newButton.innerHTML = "X";
    

    if('click', inputText){
        newItem.innerHTML = inputText.value;
        newItem.appendChild(newButton);
        
        inputText.value = "";
    }
}




function removeItem(e) {
    
    if(e.target.classList.contains('delete')) {
        let removingItem = e.target.parentNode;
        itemList.removeChild(removingItem);
    }
}


function filterItems(e) {

    let filterText = e.target.value.toLowerCase();
    
    let items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;

        if (itemName.toLowerCase().indexOf(filterText) != -1) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    })
    
}





















// function removeItem(e) {
//     if (e.target.classList.contains('delete')){
//         if(confirm('Are you sure')){
//             let li = e.target.parentElement;
//             itemList.removeChild(li)
            
//         }
//     }
// }