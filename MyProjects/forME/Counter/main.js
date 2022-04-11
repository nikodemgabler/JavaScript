let h2 = document.querySelector('h2').innerHTML;
let h2Text = document.querySelector('h2');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

h2 = 0;

if (h2 === 0) {
    h2Text.style.color = "blue"
}

decrease.addEventListener('click', decreasing)
function decreasing() {
    h2 -= 1;   
    h2Text.innerHTML = h2;
    if (h2 <= -1) {
        h2Text.style.color = "red";
    }
}

reset.addEventListener('click', resetting)
function resetting () {
    h2 = 0
    h2Text.innerHTML = h2;

    if (h2 === 0) {
        h2Text.style.color = "blue"
    }
}

increase.addEventListener('click', increasing)
function increasing() {
    h2 += 1;   
    h2Text.innerHTML = h2;

    if (h2 >= 1) {
        h2Text.style.color = "green";
    }
}




