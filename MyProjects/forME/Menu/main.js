const buttons = document.querySelectorAll('button')
const dishes = document.querySelectorAll('.dish')
let i = 0;


// const breakfast = dishes.c;


    


        for(i = 0; i < buttons.length; i++) {

        if (i == 0){
            buttons[i].addEventListener('click', function(e) {
                for(i = 0; i < dishes.length; i++){
                    if(dishes[i].classList.contains('dish')){
                        dishes[i].style.display = "grid"
                    }
                }
            })
        } else if (i == 1) {
            buttons[i].addEventListener('click', function(e) {
                for(i = 0; i < dishes.length; i++){
                    if(dishes[i].classList.contains('breakfast')){
                        dishes[i].style.display = "grid";
                    } else {
                        dishes[i].style.display = "none";
                    }
                }
            })
        } 
        else if (i == 2) {
            buttons[i].addEventListener('click', function(e) {
                for(i = 0; i < dishes.length; i++){
                    if(dishes[i].classList.contains('lunch')){
                        dishes[i].style.display = "grid";
                    } else {
                        dishes[i].style.display = "none";
                    }
                }
            })
         }  
        else if (i == 3) {
            buttons[i].addEventListener('click', function(e) {
                for(i = 0; i < dishes.length; i++){
                    if(dishes[i].classList.contains('shakes')){
                        dishes[i].style.display = "grid";
                    } else {
                        dishes[i].style.display = "none";
                    }               
                }
            })
        }
    }

        


