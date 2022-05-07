const btns = document.querySelectorAll('.btn');
const informations = document.querySelectorAll('.information')


function closeInformations() {
    informations.forEach(function(information){
        information.classList.remove('active')
    })
}

function closeBtns() {
    btns.forEach(function(btn){
        btn.classList.remove('active')
    })
}

// btns.forEach(function(e){
//     e.addEventListener('click', function(e){
//         // closeInformations();

//         if (e.target === btns[0] && !btns[0].classList.contains('active')) {
//             informations[0].classList.add('active');
//         } 
//         else if (e.target === btns[1]) {
//             informations[1].classList.toggle('active');
//         }
//         else if (e.target === btns[2]) {
//             informations[2].classList.toggle('active');
//         }
//         else if (btns[0].classList.contains('active')){
//             informations[0].classList.remove('active');
//         }
//     }) 
// })

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        
        closeInformations();
        if (e.target === btns[0]) {
            informations[0].classList.add('active');
        } 
        else if (e.target === btns[1]) {
            informations[1].classList.add('active');
        }
        else if (e.target === btns[2]) {
            informations[2].classList.add('active');
        }
        btn.classList.toggle('active');

        //     if(btn.target.classList.contains('active')){
        //         for(i=0; i < btns.length; i++){
        //         console.log('elo');
        //     }
        // }
    })

    btns.forEach(function(btn) {
        btn.addEventListener('click', function(e){
            if (btn.classList.contains('active')) {
                informations[0].classList.remove('active');
            } 
        })
    })
    // if (btn.classList.contains('active')){
    //     btn.classList.remove('active');
    //     closeInformations();
    // }
    
})


// 1. czysci wszystkie elementy z 'active'
// 2. dodaje 'active' do elementu na ktory klikamy
// 3. gdy chcemy zamknac otwarte juz pytanie, nie jest to mozliwe, bo: pomimo tego, ze czyscyci wszystkie elementy, to zaraz je dodaje.
// 4. Musze zrobic tak, ze gdy dany element ma 'active' to funkcja go usunie i ominie zapetlanie efektu