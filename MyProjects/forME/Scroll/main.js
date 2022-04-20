// .getBoundingClientRect() method - returns the size of an element and its position relative to the viewport
// .pageYoffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
// .offsetTop - a number, representing the top position of the element, in pixels

const btn = document.querySelector('button')
const ul = document.querySelector('ul');

btn.addEventListener('click', function(){
    ul.classList.toggle('active');
    const containerHeight = ul.getBoundingClientRect().height;

    if(containerHeight === 0) {
        ul.style.height = `${ul}px`
    }
    else {
        ul.style.height = containerHeight + 'px';
    }
})




    // ************ FIXED NAVBAR *********
const header = document.querySelector('header');
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const headerHeight = header.getBoundingClientRect().height;

    if(scrollHeight > headerHeight){
        header.classList.add('fixed-nav');
        topLink.classList.add('show-link');
    }
    else {
        header.classList.remove('fixed-nav');
        topLink.classList.remove('show-link');
    }
})


    // ************ Smooth scrolling *********
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        //prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1); //slice(1) is removing the '#' before ID name
        const element = document.getElementById(id);

        // calculate the heights
        const navHeight = header.getBoundingClientRect().height;
        const containerHeight = ul.getBoundingClientRect.height;
        const fixedNav = header.classList.contains('fixed-nav')
        let position = element.offsetTop - navHeight;

        if(!fixedNav){ //if navbar is in the static position
            position = position - navHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        })

        ul.style.height = 0;

    })
})







// SET DATE
const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear();