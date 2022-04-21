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




const ulLinks = document.querySelectorAll('.scroll-link');


ulLinks.forEach(function(link){

    link.addEventListener('click', function(e){
        e.preventDefault();

        const id = e.target.getAttribute('href').slice(1);
        const position = document.getElementById(id).offsetTop;

        let navHeight =  navbar.getBoundingClientRect().height;

        // if(navbar.classList.contains('fixed-header')){
        //     navHeight = navbar.
        // }
    
        

        window.scrollTo({
            left: 0,
            top: position-navHeight,
        })

        linksContainer.style.height = 0;
        links.classList.add('inactive');
    })
})
