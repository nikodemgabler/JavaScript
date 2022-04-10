const square = document.querySelector('.square')
const container = document.querySelector('.container')


square.addEventListener('mousedown', createClass);
square.addEventListener('mouseup', removeClass);
container.addEventListener('mousemove', movingSquare);


// ADDING CLASS 'ACTIVE'
function createClass(e) {
    e.target.className = "square active";
}

// MOVING SQUARE
function movingSquare (e) {

        if (square.classList.contains('active')) {
        square.style.transform = `translate(${e.offsetX}px, ${e.offsetY}px)`;
        // square.style.left = e.offsetX + 'px';
        // square.style.top = e.offsetY + 'px';
    }   
}

// REMOVING CLASS 'ACTIVE'
function removeClass(e) {
    e.target.className = "square"
}



