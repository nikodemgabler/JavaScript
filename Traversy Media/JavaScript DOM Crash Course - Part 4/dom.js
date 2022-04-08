let form = document.getElementById('addForm');
let itemList = document.getElementById('items');



form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem)



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
























// function removeItem(e) {
//     if (e.target.classList.contains('delete')){
//         if(confirm('Are you sure')){
//             let li = e.target.parentElement;
//             itemList.removeChild(li)
            
//         }
//     }
// }