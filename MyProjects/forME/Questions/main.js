const buttons = document.querySelectorAll('.btn');
const p = document.querySelectorAll('p')

const texts =
[
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsum maiores beatae. Asperiores ad obcaecati cupiditate perspiciatis vel iste distinctio aperiam saepe, nulla suscipit neque quibusdam itaque natus molestias facere?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in, deleniti, inventore quaerat officiis architecto sint porro aliquam accusantium nam placeat. Natus quas, ducimus explicabo recusandae dignissimos corrupti impedit labore.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem est, sed culpa excepturi fuga nulla voluptatem doloribus itaque delectus maxime non quo adipisci similique, suscipit inventore tempora a nesciunt veniam."
]

let newDiv = document.createElement('div');

for (i=0; i < buttons.length; i++) {

    if(i == 0){
        buttons[i].addEventListener('click', function(e){
            p[0].innerHTML = texts[0];
            p[0].classList.toggle("active");
        })
    } else if(i == 1){
        buttons[i].addEventListener('click', function(e){
            p[1].innerHTML = texts[1];
            p[1].classList.toggle("active");
        })
    } else {
        buttons[i].addEventListener('click', function(e){
            p[2].innerHTML = texts[2];
            p[2].classList.toggle("active");
        }) 
    }
}

