                // EVENTS


    // addEventListener

// #1 - first way
// let button = document.getElementById('button').addEventListener('click', function(){
//         console.log('Button clicked')
//     })

// #2 - second way
// let button = document.getElementById('button').addEventListener('click', clickButton);
// function clickButton(e) {
    // console.log('Button clicked');
    // document.getElementById('header-title').textContent = "Changed";
    // document.querySelector('#main').style.background = "black";


    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);

    // CHANGING-OTHER-ELEMENTS
    // let output = document.getElementById('output');
    // output.innerHTML = '<h3>'+e.target.id +'<h3>'

    // X / Y
    // console.log(e.clientX); // it works for the html window
    // console.log(e.clientY);

    // OFFSET
    // console.log(e.offsetX);  // it works for position inside the parent
    // console.log(e.offsetY);

    // ALTKEY
    // console.log(e.altKey); // when we click without alt === false
    // console.log(e.altKey); // when we click with alt === true

    // CTRLKEY
    // console.log(e.ctrlKey);

    // SHIFTKEY
    // console.log(e.shiftKey);
// }


    // runEvent
    let button = document.getElementById('button')
    let box = document.getElementById('box')

    let itemInput = document.querySelector('input[type="text"]')
    let form = document.querySelector('form')



    let newDiv = document.createElement('div');
    box.appendChild(newDiv).style.width = "40px";
    box.appendChild(newDiv).style.height = "40px";
    box.appendChild(newDiv).style.background = "black";

    let select = document.querySelector('select');


                    // MOUSE ACTIONS
//click
// button.addEventListener('click', runEvent);

// double click
// button.addEventListener('dblclick', runEvent);

// mousedown
// button.addEventListener('mousedown', runEvent); - it running function before lifting up the element

// mouseup
// button.addEventListener('mouseup', runEvent); 

// mouseenter
// box.addEventListener('mouseenter', runEvent) it's turn on when we hovering the element

// mouseleave
// box.addEventListener('mouseleave', runEvent)
// it's turn on when we hovering the element

// mouseover
// box.addEventListener('mouseover', runEvent) it's turn on when we hovering the element

// mouseout
// box.addEventListener('mouseout', runEvent)
// it's turn on when we hovering the element

// mouseenter, mouseleave VS mouseover, mouseout 
// if this element has something in it, the mouseover / out react on this element

// mousemove
box.addEventListener('mousemove', runEvent)



        // KEYBOARD ACTIONS

// keydown
itemInput.addEventListener('keydown', runEvent) // it works, when we put a key

// keyup
itemInput.addEventListener('keyup', runEvent) // it works, when we put a key

// keypress
itemInput.addEventListener('keypress', runEvent) // it works, when we put a key



// FOCUS
itemInput.addEventListener('focus', runEvent);

// BLUR
itemInput.addEventListener('blur', runEvent); // when we stop focusing on element

// CUT
itemInput.addEventListener('cut', runEvent); // 
// PASTE
itemInput.addEventListener('paste', runEvent); // 

// INPUT
itemInput.addEventListener('input', runEvent); // everything what we do is going to fire off


// CHANGE for <select></select> - it gives us a value
// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);


// form.addEventListener('submit', runEvent)




function runEvent(e) {
    e.preventDefault();
    console.log('EVENT TYPE: '+e.type)
    console.log(e.target.value); // it shows us what are we typing

    output.innerHTML = '<h3>MouseX: '+e.offsetX +' </h3><h3>Mouse Y:' +e.offsetY + '</h3>'
    // box.style.background = "rgb("+e.offsetX+`,`+e.offsetY+`,10`+")";

    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'

    // newDiv.style.transform = "translateX"+"("+e.offsetX+"px"+")";
    // newDiv.style.transform = "translateY"+"("+e.offsetY+"px"+")";

    
}


