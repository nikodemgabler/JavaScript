const burger = document.querySelector('.burger')
const ul = document.querySelector('ul')
const body = document.querySelector('body')

burger.addEventListener('click', function(e){
    const btn = e.target;
    btn.classList.toggle('active')

    if (btn.classList.contains('active')){
        ul.classList.add('active')
    } else {
        ul.classList.remove('active')
    }
})

function menuDesktop(x) {
    if(body.matches) {
        ul.classList.add('active')
        burger.classList.add('active')
    } else {
        ul.classList.remove('active')
        ul.classList.remove('active')
    }
}

const x = window.matchMedia("(min-width: 700px)")
menuDesktop(x);
x.addListener(menuDesktop);