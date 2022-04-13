const burger = document.querySelector('.burger')
const ul = document.querySelector('ul');
const mediaQuery = window.matchMedia('(min-width: 768px)')


burger.addEventListener('click', function(e){

    if(burger.classList.contains('inactive')){
        burger.className = "burger active"
        ul.className = "active";
    }
    else if (burger.classList.contains('active') || ul.classList.contains('active')){
            burger.className = "burger inactive"
            ul.className = "inactive";
    }
})

function tabletQuery(e) {
    if (e.matches) {
        ul.className = "active";
    } else if(!e.matches) {
        ul.className = "inactive";
    }
}
mediaQuery.addListener(tabletQuery);
tabletQuery(mediaQuery);
