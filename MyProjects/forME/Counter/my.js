const h2 = document.querySelector('h2');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');


let value = parseInt(h2.innerHTML);

    decrease.addEventListener('click', function(){
        value -= 1;
        h2.innerHTML = value;
        if(value < 0){
            h2.style.color = "red";
        }
    });

    increase.addEventListener('click', function(){
        value += 1;
        h2.innerHTML = value;
        if(value > 0){
            h2.style.color = "green";
        }
    });

    reset.addEventListener('click', function(){
        value = 0;
        h2.innerHTML = value;
        if(value == 0){
            h2.style.color = "blue";
        }
    })

























