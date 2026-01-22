// creating an empty array to store the elemtns

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

// example usage
createElement('box');
createElement('text');








