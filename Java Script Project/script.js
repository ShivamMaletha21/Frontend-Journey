// Step1
//creating an empty array to store the elemtns

let elements = [];

// function to create a new elements
function createElement(type) {
    const id = 'emp_' + Date.now(); // unique id

    const newELement = {
        id: id,
        type: type, // box or text
        x:50,       // starting x postion
        y:50,       // starting y position
        width:100,  // default width
        height:100, // default height
        rotation: 0, // default rotation angle
        color:'#00aaff',  // box color
        text: type === 'text' ? 'New Text' : '', // text content if type is text
        zindex: elements.length + 1 // top layer by default

    };

    // Add the new element to the array
    elements.push(newELement);

    console.log('Element Created:', newELement);
    console.log('All elements:', elements);

    return newELement; // use to display outside

};




// Step 2: CREATE renderElement function
const canvas = document.querySelector('.canvas');

function renderElement(element) {

// render element on canvas
const el = document.createElement('div');

// styling

el.style.position = 'absolute';
el.style.left = element.x + 'px';
el.style.top = element.y + 'px';
el.style.width = element.width + 'px';
el.style.height = element.height + 'px';
el.style.zIndex = element.zindex;

// if element is a box
if (element.type === 'box') {
    el.style.backgroundColor = element.color;
}

// if element is text

if(element.type === 'text') {
    el.textContent = element.text;
    el.style.padding = '8px';
    el.style.background = '#fff';
    el.style.border = '1px solid #ccc';
}
canvas.appendChild(el);
}
const box = createElement('box');
box.x = 50;
box.y = 50;
renderElement(box);

const text = createElement('text');
text.x = 200;
text.y = 80;
renderElement(text);









