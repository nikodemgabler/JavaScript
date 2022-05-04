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







































// action.forEach(function(e){

//     let x = 0;

//     e.addEventListener('click', function(e){
//         if(e.target.classList.contains('increase')){
//             h2.innerHTML = value + 1;
//             let x = value + 1;
//             return x;
//         } 
//         else if(e.target.classList.contains('decrease')){
//             h2.innerHTML = value - 1;
//             let x = value - 1;
//             return x;
//         }
//         else {
//             h2.innerHTML = 0;
//             value = 0;
//             let x = value;
//             return x;
//         }
//     })

//     return x;
// }) 





// for(i = 0; i < )
