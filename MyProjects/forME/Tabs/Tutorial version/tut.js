const about = document.querySelector('.about');
const buttons = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){

    const id = e.target.dataset.id;

    if(id){  // if id exists

        // remove active from other buttons
        buttons.forEach(function(button) {
            button.classList.remove('active');
            e.target.classList.add('active');
        });
        // hide other articles
        articles.forEach(function(article){
            article.classList.remove('active')
        })
        const element = document.getElementById(id);
        element.classList.add('active')
    }
})

// Podsumowanie
// Warto zamiast tablic tworzyć po prostu elementy w htmlu
// zamiast duzej ilosci ifow, mozna zrobic tak jak tutaj, czyli aktywowac active tylko dla dataset.id 