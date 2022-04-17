const btn = document.querySelector('button');
const video = document.querySelector('video')









btn.addEventListener('click', function(e){

    if(btn.classList.contains('inactive')){
        btn.classList = "active";
        video.pause();
    } else {
        btn.classList = "inactive";
        video.play();
    }
    
})