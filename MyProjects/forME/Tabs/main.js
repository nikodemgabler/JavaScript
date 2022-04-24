const bookmark = document.querySelectorAll('.bookmark');
const bookmarks = document.querySelector('.bookmarks')
const bookmarksHeader = document.querySelector('.bookmarks__header');
const bookmarksP = document.querySelector('.bookmarks__p');


const history = 
[
    h4 = "History",
    info = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, odio ratione, minima sunt mollitia doloribus omnis voluptatum quidem sapiente harum deserunt fuga aliquam asperiores quasi velit odit at delectus nihil odit at delectus nihil odit at delectus nihil. voluptatum quidem sapiente harum deserunt fuga aliquam asperiores quasi velit odit at delectus nihil odit at delectus nihil odit at delectus nihil."
];

const vision = [
    h4 = "Vision",
    info = "Vision aliquam asperiores Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, odio ratione, minima sunt mollitia doloribus omnis voluptatum quidem sapiente harum deserunt fuga  quasi velit odit at delectus nihil quidem sapiente"
]   

const goals = [
    h4 = "Goals",
    info = "Goals coup aliquam asperiores Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, odio ratione, minima sunt mollitia doloribus omnis voluptatum quidem sapiente harum deserunt fuga  quasi velit odit at delectus nihil quidem sapiente"
]   



for(i=0; i < bookmark.length; i++){

    bookmark[i].addEventListener('click', function(e){

        if(e.target == bookmark[0]){
            e.target.classList.add('active');
            bookmark[1].classList.remove('active');
            bookmark[2].classList.remove('active');
            bookmarksHeader.innerHTML = history[0];
            bookmarksP.innerHTML = history[1];
            bookmarks.style.background = "white";

        }
        else if (e.target == bookmark[1]){
            e.target.classList.add('active');
            bookmark[0].classList.remove('active');
            bookmark[2].classList.remove('active');
            bookmarksHeader.innerHTML = vision[0];
            bookmarksP.innerHTML = vision[1];
        }
        else {
            e.target.classList.add('active');
            bookmark[0].classList.remove('active');
            bookmark[1].classList.remove('active');
            bookmarksHeader.innerHTML = goals[0];
            bookmarksP.innerHTML = goals[1];
        }
        
        // bookmark[1].classList.add('active');
        
    })
}






// bookmark.forEach(function(item){

//     item.addEventListener('click', function(e){

//         item.classList.add('active');

//         console.log(item[0])
//         // if(item.classList.contains('active')){
//         //     bookmarks.classList.add('active');
//         // }

//     })


// })