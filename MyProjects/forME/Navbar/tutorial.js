const navToggle = document.querySelector('.burger');
const links = document.querySelector('ul');

// navToggle.addEventListener('click', function() {
    
//     if(links.classList.contains('active')) {
//         links.classList.remove('active');
//     } else {
//         links.classList.add('active');
//     };
// })

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    links.classList.toggle('active');
} );