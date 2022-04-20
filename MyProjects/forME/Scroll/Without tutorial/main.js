// .getBoundingClientRect() method - returns the size of an element and its position relative to the viewport
// .pageYoffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
// .offsetTop - a number, representing the top position of the element, in pixels






// btn.addEventListener('click', function() {
//     linksParent.classList.toggle('inactive');
//     ul.classList.toggle('inactive');
// })



    // ******* SET DATE *******

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear(); 


    // ******* CLOSE LINKS *******

const navToggle = document.querySelector('button');
const linksContainer = document.querySelector('.links-parent');
const links = document.querySelector('ul');

navToggle.addEventListener('click', function() {
    // linksContainer.classList.toggle('inactive');
    // links.classList.toggle('inactive');
    

    // TWORZĄC W TAKI SPOSÓB ZWIJANE MENU, JEST ONO DYNAMICZNE I ŁADNIE SIĘ ROZWIJA

    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
        links.classList.remove("inactive")
    }
    else {
        linksContainer.style.height = 0;
        links.classList.add("inactive")
    }
    console.log(linksHeight);
})


    // ******* FIXED NAVBAR *******

const navBar = document.querySelector('header');
const topBtn = document.querySelector('.top-link');

window.addEventListener('scroll', function(){

    if(window.pageYOffset > navBar.getBoundingClientRect().height){
        navBar.classList.add('fixed-header');
        topBtn.classList.add('show-link')
    }
    else {
        navBar.classList.remove('fixed-header');
        topBtn.classList.remove('show-link')
    }
});


    // ******* SMOOTH SCROLL *******
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click', function (e){
        //prevent default
        e.preventDefault(); // Teraz link na który klikamy, nigdzie nas nie przeniesie

        // Navigate to specific spot
        // Chcemy pobrać konkretny atrybut href z naszego wewnętrznego linku i usunąć '#' za pomocą .slice(1)
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id); // dzięki poprzednim działaniom mogliśmy łatwo pozyskać id do naszego consta

        // calculate the heights
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains('fixed-header');

        if(!fixedNav){
            position = position - navHeight;
        }

        let position = element.offsetTop - navHeight; // Wskazuje nam w pixelach górę elementu
        
        window.scrollTo({ // Sprawia, ze okno przeglądarki zjezdza gdzie wyznaczymy
            left: 0,
            top: position // Okno zjezdza w dol od topu o tyle, o ile obnizony jest element, do ktorego chcemy dotrzec
        })
        linksContainer.style.height = 0; // zamyka container ul
        links.classList.add("inactive") // zamyka linki




    })
})