const randomLorem = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non turpis efficitur quam pellentesque finibus. Cras tristique at dui eu pellentesque. Sed eget faucibus diam. Sed a orci porttitor, scelerisque eros eget, vulputate sem. Integer tincidunt dui id lorem cursus, vel convallis orci mollis. Etiam vestibulum tincidunt purus, id sodales arcu fringilla ut. Fusce at facilisis mi. Nulla a nisi bibendum, porta tortor vel, euismod nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    'Etiam et iaculis dui. Sed maximus hendrerit porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sagittis elit metus, non pretium metus cursus ut. Vestibulum interdum, nisl in tincidunt mollis, felis orci maximus sem, ullamcorper accumsan purus enim ac urna. Etiam aliquam, mi ut accumsan laoreet, felis enim venenatis elit, sit amet hendrerit magna justo et dolor. Vestibulum vehicula quam sit amet placerat feugiat. Aliquam convallis, dolor sed pellentesque pellentesque, sapien velit dignissim nisi, a volutpat neque magna vel augue. Duis pretium purus pulvinar nisi porta lacinia. Fusce nec dapibus ligula. Pellentesque porta risus vel enim aliquet scelerisque.',
    'Pellentesque iaculis enim eget semper commodo. Donec sit amet pharetra elit. Vestibulum pulvinar dolor in libero lobortis ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec elit justo, convallis et vehicula id, accumsan eget arcu. Praesent volutpat ipsum vulputate pellentesque vestibulum. Vestibulum risus sem, consequat id viverra quis, iaculis nec lectus. In hendrerit quam eget placerat egestas. Maecenas efficitur erat vel sem vehicula interdum. Sed nisl odio, pellentesque eget erat venenatis, tempor luctus augue. Nullam aliquam ipsum nec diam dapibus, vel ullamcorper tellus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In aliquet est at libero varius laoreet. Duis velit orci, vulputate quis nunc id, ornare volutpat nisi. Vivamus non odio sollicitudin, tempus quam a, accumsan turpis. Praesent ut sollicitudin nibh, vel fringilla libero.',
    'Nulla massa sapien, ornare eu diam sit amet, blandit congue sem. Etiam elementum, quam id tempus semper, sapien augue scelerisque diam, in tempor dui diam id mauris. Ut non lacus tempor, imperdiet augue et, consectetur eros. Nullam imperdiet lectus arcu, vitae tristique velit facilisis ut. Aliquam quis odio ac enim varius porttitor eget eu velit. Etiam accumsan ante quis dolor rutrum scelerisque. Mauris id urna sit amet magna tincidunt consequat. Cras eu fermentum odio. Fusce rhoncus suscipit mi ut viverra. Nullam ultrices velit sed est faucibus bibendum ac eget enim. Cras pharetra erat sit amet justo porta blandit.',
    'In consectetur enim ac porta tempor. Fusce bibendum mauris quis ligula consequat tempor. Sed porttitor vel metus vitae egestas. Sed mattis sapien ante, quis hendrerit nulla scelerisque eu. Etiam et lacinia elit. Etiam ultrices, tellus id varius dignissim, nibh orci viverra lorem, vitae auctor dui magna ac libero. Quisque ac lacus nec orci euismod vestibulum. Nulla id magna eget velit tincidunt maximus a eget urna. Sed facilisis quis nulla pharetra luctus. Quisque at urna id dui aliquam tempus tristique ac orci.',
    'Nunc et porta nunc, eget porttitor justo. Proin sit amet turpis vel ex semper aliquam. Sed semper sem sit amet ligula eleifend gravida. Sed iaculis, nulla nec finibus faucibus, orci justo luctus elit, sed ultrices mi sapien quis urna. In hac habitasse platea dictumst. Donec eget tellus mattis, facilisis orci a, aliquet lacus. Donec vestibulum ex arcu, vel pulvinar dolor porttitor at. In non eleifend velit, ac egestas justo. Vivamus ultricies est a est molestie sagittis sit amet quis mi.',
    'Nunc pretium iaculis augue, id dictum felis ultrices nec. Mauris euismod egestas pretium. Nulla in dictum ipsum. Suspendisse volutpat fermentum eleifend. Fusce sollicitudin, nibh id vehicula volutpat, ligula ante convallis metus, vel pharetra orci felis vitae justo. Sed porta nec erat vel vestibulum. In hac habitasse platea dictumst. Donec feugiat, eros ut vestibulum pretium, felis enim pellentesque ligula, ut fermentum nibh risus sed diam. Nulla turpis velit, viverra eget leo sit amet, feugiat gravida sapien. Etiam sed euismod metus. Sed purus enim, fringilla sit amet bibendum et, fringilla sed libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique lacinia velit sit amet ultrices. Mauris non laoreet sapien, quis placerat neque. Integer mi odio, efficitur non mattis vel, ultricies sit amet tellus. Nulla non congue tellus.',
    'Sed vel sem a velit ornare venenatis. In tempus quis ex non imperdiet. Nullam vel est vel arcu lobortis tristique eu ac nulla. Nam vitae lectus lobortis, convallis arcu ac, commodo risus. In non metus quis nibh blandit gravida. Aliquam tempus ex sit amet justo bibendum, et sollicitudin libero tristique. Etiam mi elit, dapibus ut vestibulum nec, dapibus at ligula. Mauris sed varius lorem. Quisque at odio lacus. Integer vel dui mauris. Curabitur semper ipsum sed lorem laoreet auctor.',
    `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,
]
const btn = document.querySelector('.btn');
const loremText = document.querySelector('.lorem-text');
const input = document.querySelector('#amount');

btn.addEventListener('click', function(e){

    e.preventDefault();

    const inputValue = parseInt(input.value);
    const random = Math.floor(Math.random() * randomLorem.length) // pozwala umiescic w if-ie losowanie lorem z randomLorem

    if(inputValue <= 0 || inputValue > 9 || isNaN(inputValue)) {

        loremText.innerHTML = `<p>${randomLorem[random]}</p>`
    }
    else {
        let tempText = randomLorem.slice(0, inputValue) // wyciaga nam z tablicy taka liczbe jaka wpiszemy

        tempText = tempText.map(function(item){  // Map zwraca nam wartosc kazdego elementu tabicy pokolei w osobnych tablicach
            return `<p>${item}</p>`
        }) .join(" ") //.join() - mowi w jaki sposob kazdy kolejny element tablicy ma zosta?? przypisany (" ") oznacza puste pole
        loremText.innerHTML = tempText;
    }
})


// let test = [1, 2, 3, 4, 5]

// test = test.map(function(item){
//     console.log(item);
// })

// console.log(test);

// randomLorem = randomLorem.slice(0,9);
// console.log(randomLorem);