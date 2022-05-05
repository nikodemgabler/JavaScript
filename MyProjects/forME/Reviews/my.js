const profiles =
[{
    src: 'photos/photo1.jpeg',
    name: 'Susan Smith',
    profession: 'Web Developer',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
},
{
  src: 'photos/photo2.jpeg',
  name: 'Selena Ramirez',
  profession: 'UX Designer',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem debitis ut excepturi neque beatae facilis, possimus tenetur dolorum minima ducimus nesciunt consectetur nam, dolorem molestias corporis aliquam! Omnis, blanditiis!'
},
{
    src: 'photos/photo3.png',
    name: 'Mark Star',
    profession: 'Business Analyst',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, quos veniam quisquam cupiditate, ratione eius qui laborum dolorem maxime alias ullam? Distinctio architecto rerum mollitia quo aut. Illo, nesciunt similique?'
}]

const arrows = document.querySelectorAll('.btn');
const names = document.querySelector('h2');
const professions = document.querySelector('h3');
const descriptions = document.querySelector('.description');
const image = document.querySelector('img');

let profileNumber = 0;
names.textContent = profiles[profileNumber].name
professions.textContent = profiles[profileNumber].profession
descriptions.textContent = profiles[profileNumber].description



arrows.forEach(function(arrow){
    const value = arrow.classList;
    arrow.addEventListener('click', function(){
        
        if (value.contains('arrow-left')){
            profileNumber--
            if (profileNumber < 0){
                profileNumber = profiles.length-1;
            }
        }
        else if (value.contains('arrow-right')){
            profileNumber++
            if (profileNumber == profiles.length){
                profileNumber = 0;
            }
        }
        else {
            profileNumber = Math.floor(Math.random() * profiles.length);
        }

        image.src = profiles[profileNumber].src;
        names.textContent = profiles[profileNumber].name
        professions.textContent = profiles[profileNumber].profession
        descriptions.textContent = profiles[profileNumber].description
    })
})