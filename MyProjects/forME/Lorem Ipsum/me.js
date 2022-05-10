const paragraphs = 
[
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam ligula, finibus id fringilla quis, finibus fringilla ligula. Donec accumsan efficitur efficitur. Donec hendrerit lacus sed faucibus pretium. Curabitur et nisl et dui lobortis vehicula at quis neque. Donec at iaculis risus. Duis quis vestibulum nunc. Aliquam porttitor dolor quis semper volutpat. Nullam auctor aliquet tellus, vitae fermentum nunc accumsan eget. Nullam rutrum quis nisl id varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum enim vitae laoreet elementum. Sed iaculis fringilla nisi eu semper. Etiam eu neque at risus condimentum imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas ultricies velit et aliquam venenatis. Mauris aliquet, ipsum vel aliquam elementum, lectus metus porttitor enim, eu tempor quam lectus ac ipsum.',

'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer id nunc fringilla, scelerisque tellus a, ullamcorper tortor. Fusce dictum facilisis ante, ut fringilla purus dignissim at. Proin ac varius arcu. Sed ligula eros, tempus at nulla eu, blandit finibus neque. Etiam tellus tortor, scelerisque ac justo non, volutpat eleifend dolor. Sed in convallis purus. Pellentesque sed dui eu sapien molestie fringilla et eget ex. Curabitur vitae maximus velit. Donec blandit bibendum est vel tempor. Suspendisse luctus magna et ligula fringilla, sit amet suscipit dolor hendrerit. Nam sit amet congue augue. Proin sed imperdiet odio. Nullam justo purus, sollicitudin volutpat enim a, pellentesque aliquam metus. Aliquam ut velit turpis.',

'Etiam vel ornare lectus. In et lacus a leo ullamcorper facilisis. Nulla eu augue ut tellus iaculis ultrices. Integer massa metus, varius in varius et, feugiat a lorem. Aliquam lacus lacus, congue at pulvinar in, pharetra aliquam elit. Sed sagittis massa ac libero blandit, vel tincidunt lacus vehicula. Etiam posuere convallis nisl, eu pulvinar lectus pharetra quis. Sed imperdiet augue non ornare consectetur. Praesent ac feugiat ligula. Nam sit amet malesuada libero, id fringilla tellus. Aenean nec lorem tortor.',

'Cras viverra gravida pellentesque. Nam feugiat sapien congue libero rhoncus, sit amet ultrices sem ornare. Vivamus in varius neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi id mi non justo lacinia maximus vel ullamcorper neque. Mauris augue tortor, feugiat ut quam id, scelerisque aliquam leo. Sed non purus quam. Mauris tincidunt ante nunc, at tempus ante dictum vitae. Suspendisse potenti. In volutpat orci vitae turpis ultrices, quis mattis odio pharetra. Aliquam erat volutpat. Nullam maximus, neque eget lobortis sodales, urna metus volutpat lorem, suscipit varius velit arcu at sapien.',

'Vestibulum porttitor ipsum est, sit amet semper sapien volutpat non. Integer et leo vitae urna pulvinar blandit. Pellentesque euismod justo nulla, quis eleifend elit tempor ut. Mauris vehicula rutrum metus, id efficitur tellus congue at. Pellentesque a eros lacus. Donec viverra erat dolor, ut laoreet nisl mollis non. Vestibulum in ipsum et erat euismod vestibulum vitae at mi. Nunc pretium, eros quis eleifend hendrerit, nisl arcu maximus tortor, a cursus libero odio eget libero. Donec volutpat ligula turpis, non ornare risus lobortis sed. Morbi facilisis tempor nulla a finibus.',

'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer blandit eleifend tortor non accumsan. Aliquam imperdiet tempus neque eget molestie. Quisque vestibulum ornare urna sed egestas. Integer venenatis est ac venenatis convallis. Fusce non tincidunt lorem. Donec a tempor risus. Sed condimentum bibendum quam, nec mollis magna. Pellentesque molestie justo diam, eu bibendum sapien mollis in. Nulla lectus ipsum, tincidunt id diam sit amet, facilisis congue dui.',

'Sed rutrum turpis justo, sit amet auctor dolor accumsan nec. Phasellus at suscipit nisl. Nullam ante tortor, scelerisque vitae justo ut, condimentum vulputate urna. Integer at blandit lectus, malesuada faucibus sapien. Cras feugiat ultricies rutrum. Nam lobortis a libero id gravida. Praesent rhoncus feugiat enim quis congue. Aenean tincidunt ut sem at vestibulum. Aliquam sit amet risus interdum, suscipit libero nec, luctus nisi. Etiam ornare sollicitudin congue. Duis porta, elit eu bibendum ultrices, urna neque posuere tellus, tempor faucibus nibh sem in orci. Sed vulputate purus lacus, et mattis lorem ultrices vitae.',

'Donec bibendum bibendum tempor. Sed scelerisque at dolor eget accumsan. In hac habitasse platea dictumst. Donec porttitor lectus at orci congue pulvinar. Nulla facilisi. Nullam vel condimentum libero, ac cursus ipsum. Phasellus suscipit justo turpis, et euismod massa vestibulum et. Integer et blandit enim, in interdum arcu. Nunc in odio vitae orci consectetur rutrum. In dictum justo vel mi tempor imperdiet eu vel neque. Nulla finibus ipsum nibh, at hendrerit magna feugiat ac. Fusce nisi nisi, dignissim vel interdum at, scelerisque ut eros.',

'Vestibulum mattis nulla vel euismod scelerisque. Suspendisse ipsum massa, commodo sed malesuada vitae, maximus dapibus ante. Pellentesque vitae mollis arcu, et facilisis tortor. Donec ullamcorper finibus mi, vitae efficitur elit rhoncus nec. Curabitur id quam sed ligula dictum sagittis et nec diam. Integer convallis vitae sem ut eleifend. Maecenas pulvinar, nisl non rhoncus semper, dui lectus consequat urna, faucibus cursus neque nibh a orci. Sed libero diam, sollicitudin ac ultricies at, faucibus non diam. Duis tristique in mi et lacinia. Cras at ipsum nisl. Aenean posuere, lacus vitae iaculis condimentum, augue elit eleifend augue, at vehicula lacus sapien eu mauris.',
]

const btn = document.querySelector('.btn');
const lorem = document.querySelector('.lorem-text')
const addP = document.createElement('p');

btn.addEventListener('click', function(e){
    e.preventDefault();

    const amount = parseInt(document.querySelector('#amount').value);
    
    if (isNaN(amount) || amount <= 0){
        lorem.appendChild(addP)
        lorem.appendChild(addP).innerHTML = paragraphs[0];
    }

    for (i=0; i < amount; i++) {
        
    }





    // if()

})
