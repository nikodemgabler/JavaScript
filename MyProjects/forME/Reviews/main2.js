const left = document.querySelector('.arrow-left')
const right = document.querySelector('.arrow-right')
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const p = document.querySelector('.description')
const img = document.querySelector('img')
const btns = document.querySelectorAll('.btn')
const arrows = document.querySelectorAll('.arrow');

let val = 0;

const images = 
[
    img[-2] = "../Reviews/photos/photo2.jpeg",
    img[-1] = "../Reviews/photos/photo3.png",
    img[-3] = "../Reviews/photos/photo1.jpeg",
    img[0] = "../Reviews/photos/photo1.jpeg",
    img[1] = "../Reviews/photos/photo2.jpeg",
    img[2] = "../Reviews/photos/photo3.png"
]
const headers2 = 
[
    h2[-2] = "Selena Gomez",
    h2[-1] = "Mark Star",
    h2[-3] = "Susan Smith",
    h2[0] = "Susan Smith",
    h2[1] = "Selena Gomez",
    h2[2] = "Mark Star",
]
const headers3 =
[
    h3[-2] = "UX Designer",
    h3[-1] = "Business Analyst",
    h3[-3] = "Web Developer",
    h3[0] = "Web Developer",
    h3[1] = "UX Designer",
    h3[2] = "Business Analyst"
]
const information = 
[
    p[-2] = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem debitis ut excepturi neque beatae facilis, possimus tenetur dolorum minima ducimus nesciunt consectetur nam, dolorem molestias corporis aliquam! Omnis, blanditiis!",
    p[-1] = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, quos veniam quisquam cupiditate, ratione eius qui laborum dolorem maxime alias ullam? Distinctio architecto rerum mollitia quo aut. Illo, nesciunt similique?",
    p[-3] = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eaque cupiditate aliquam, mollitia, modi eos perspiciatis necessitatibus rem ratione repellat cumque! Qui accusamus laudantium itaque accusantium porro quae ipsa mollitia.",
    p[0] = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eaque cupiditate aliquam, mollitia, modi eos perspiciatis necessitatibus rem ratione repellat cumque! Qui accusamus laudantium itaque accusantium porro quae ipsa mollitia.",
    p[1] = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem debitis ut excepturi neque beatae facilis, possimus tenetur dolorum minima ducimus nesciunt consectetur nam, dolorem molestias corporis aliquam! Omnis, blanditiis!",
    p[2] = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, quos veniam quisquam cupiditate, ratione eius qui laborum dolorem maxime alias ullam? Distinctio architecto rerum mollitia quo aut. Illo, nesciunt similique?"
]

function randomRage(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}


btns.forEach(function (button) {
    button.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;

        if(styles.contains('arrow-right')) {
            val += 1;
    
            if (val === 0) {
               img.src = img[0];
               h2.innerHTML = h2[0];
               h3.innerHTML = h3[0];
               p.innerHTML = p[0];
           } else if(val === 1){
               img.src = img[1];
               h2.innerHTML = h2[1];
               h3.innerHTML = h3[1];
               p.innerHTML = p[1];
           } else if (val === 2){
               img.src = img[2];
               h2.innerHTML = h2[2];
               h3.innerHTML = h3[2];
               p.innerHTML = p[2];
               val = -1;
            }
        } else if (styles.contains('arrow-left')) {
            val -= 1;

            if (val === -1) {
                img.src = img[-1];
                h2.innerHTML = h2[-1];
                h3.innerHTML = h3[-1];
                p.innerHTML = p[-1];
            } else if(val === -2){
                img.src = img[-2];
                h2.innerHTML = h2[-2];
                h3.innerHTML = h3[-2];
                p.innerHTML = p[-2];
            } else if (val === -3){
                img.src = img[-3];
                h2.innerHTML = h2[-3];
                h3.innerHTML = h3[-3];
                p.innerHTML = p[-3];
                val = 0;
           }
        } else if (styles.contains('suprise')) {
            val = randomRage(0,2);

 
            if (val === -1) {
                img.src = img[-1];
                h2.innerHTML = h2[-1];
                h3.innerHTML = h3[-1];
                p.innerHTML = p[-1];
            }
            else if (val === 0) {
                img.src = img[0];
                h2.innerHTML = h2[0];
                h3.innerHTML = h3[0];
                p.innerHTML = p[0];
            } else if(val === 1){
                img.src = img[1];
                h2.innerHTML = h2[1];
                h3.innerHTML = h3[1];
                p.innerHTML = p[1];
            } else if (val === 2){
                img.src = img[2];
                h2.innerHTML = h2[2];
                h3.innerHTML = h3[2];
                p.innerHTML = p[2];
                val = -1;
             }
        }
    })
})