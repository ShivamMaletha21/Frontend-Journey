// Step 1: Create an empty array to store elements
let elements = [];

// Step 5: Variable to store currently selected element id
let selectedElementId = null;

// Step 2: Function to create a new element
function createElement(type) {
    const id = 'emp_' + Date.now(); // unique id using timestamp

    const newElement = {
        id: id,
        type: type,       // 'box' or 'text'
        x: 50,            // starting x position
        y: 50,            // starting y position
        width: 100,       // default width
        height: 100,      // default height
        rotation: 0,      // default rotation angle
        color: '#00aaff', // default box color
        text: type === 'text' ? 'New Text' : '', // text content for text elements
        zindex: elements.length + 1 // top layer by default
    };

    // Add the new element to the array
    elements.push(newElement);

    console.log('Element Created:', newElement);
    console.log('All elements:', elements);

    return newElement; // return for rendering
}

// Step 3: Function to render element on canvas
const canvas = document.querySelector('.canvas');

function renderElement(element) {
    // Create a div to represent the element
    const el = document.createElement('div');

    // Add classes and data attributes
    el.className = 'element';
    el.dataset.id = element.id;

    // Basic styling
    el.style.position = 'absolute';
    el.style.left = element.x + 'px';
    el.style.top = element.y + 'px';
    el.style.width = element.width + 'px';
    el.style.height = element.height + 'px';
    el.style.zIndex = element.zindex;
    el.style.cursor = 'pointer';

    // If element is a box
    if (element.type === 'box') {
        el.style.backgroundColor = element.color;
    }

    // If element is text
    if (element.type === 'text') {
        el.textContent = element.text;
        el.style.padding = '8px';
        el.style.background = '#fff';
        el.style.border = '1px solid #ccc';
        el.style.boxSizing = 'border-box';
    }

    // Click event to select element
    el.addEventListener('click', function (e) {
        e.stopPropagation(); // prevent click from bubbling to canvas
        selectElement(element.id);
    });

    // Append element to canvas
    canvas.appendChild(el);
}

// Step 4: Function to handle selection
function selectElement(id) {
    // Remove selection from all elements
    document.querySelectorAll('.element').forEach(item => {
        item.classList.remove('selected');
    });

    // Select clicked element
    const selectedDiv = document.querySelector(`[data-id='${id}']`);
    if (selectedDiv) {
        selectedDiv.classList.add('selected');
        selectedElementId = id; // store currently selected element
        console.log('Selected element:', id);
    }
}

// Step 6: Click on canvas to deselect any element
canvas.addEventListener('click', function () {
    document.querySelectorAll('.element').forEach(item => {
        item.classList.remove('selected');
    });
    selectedElementId = null;
});

// Step 7: Create and render some initial elements
const box = createElement('box');
box.x = 50;
box.y = 50;
renderElement(box);

const text = createElement('text');
text.x = 200;
text.y = 80;
renderElement(text);
