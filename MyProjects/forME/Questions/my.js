const btns = document.querySelectorAll('.btn');
const informations = document.querySelectorAll('.information')

let remove0 = false;
let remove1 = false;
let remove2 = false;

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        
        if (e.target === btns[0] && remove0) {
            informations[0].classList.remove('active');
            remove0 = false;
        }
        else if (e.target === btns[0] && !remove0) {
            informations[0].classList.add('active');
            remove0 = true;
            informations[1].classList.remove('active');
            informations[2].classList.remove('active');
            remove1 = false;
            remove2 = false;
        }

        if (e.target === btns[1] && remove1){
            informations[1].classList.remove('active');
            remove1 = false;
        }
        else if(e.target === btns[1] && !remove1) {
            informations[1].classList.add('active');
            remove1 = true;
            informations[0].classList.remove('active');
            informations[2].classList.remove('active');
            remove0 = false;
            remove2 = false;
        }

        if(e.target === btns[2] && remove2) {
            informations[2].classList.remove('active');
            remove2 = false;
        }
        else if(e.target === btns[2] && !remove2) {
            informations[2].classList.add('active');
            remove2 = true;
            informations[0].classList.remove('active');
            informations[1].classList.remove('active');
            remove0 = false;
            remove1 = false;
        }
    })
})











// 1. czysci wszystkie elementy z 'active'
// 2. dodaje 'active' do elementu na ktory klikamy
// 3. gdy chcemy zamknac otwarte juz pytanie, nie jest to mozliwe, bo: pomimo tego, ze czyscyci wszystkie elementy, to zaraz je dodaje.
// 4. Musze zrobic tak, ze gdy dany element ma 'active' to funkcja go usunie i ominie zapetlanie efektu

