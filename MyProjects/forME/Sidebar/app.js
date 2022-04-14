const burger = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector('.sidebar');

burger.addEventListener('click', function () {
    sidebar.classList.toggle("show-sidebar")
})

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove("show-sidebar");
})

// function burgerToggle () {
//     // burger.classList.toggle('close')

//     // if(burger.classList.contains('close')){
//     //     sidebar.style.display = "none";
//     // } else {
//     //     sidebar.style.display = "grid";
//     // }

//     sidebar.classList.toggle("show-sidebar")
// }