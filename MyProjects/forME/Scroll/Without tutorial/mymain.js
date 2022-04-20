const burger = document.querySelector('button');
const linksContainer = document.querySelector('.links-parent');
const links = document.querySelector('ul');




burger.addEventListener('click', function(){
    // linksContainer.classList.toggle('inactive');
    // links.classList.toggle('inactive');

    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    console.log(linksContainerHeight);
    console.log(linksHeight);

    if(linksContainerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
        links.classList.remove('inactive');
    }
    else {
        linksContainer.style.height = 0;
        links.classList.add('inactive');
    }
})



const navbar = document.querySelector('header');
const topBtn = document.querySelector('.top-link');

window.addEventListener('scroll', function(){

    if(window.pageYOffset > navbar.getBoundingClientRect().height){
        navbar.classList.add('fixed-header');
        topBtn.classList.add('show-link');
    }
    else {
        navbar.classList.remove('fixed-header');
        topBtn.classList.remove('show-link');
    }
})


