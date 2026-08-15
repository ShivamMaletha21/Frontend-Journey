// const { createElement } = require("react");

console.log(React);
console.log(ReactDOM);

// real dom
let h1D = document.createElement("h1");
console.log(h1D);

// creating copy (light weight DOM using React)
let h1R = React.createElement("h1",null,"hello this is from react");
console.log(h1R);



// creating virtual elements <div> 
/* <h1>hey</h1>
<h1>bye</h1>
</div> */

let ui = React.createElement("div",{}, 
    [
        React.createElement("h1",{},"hey"),
        React.createElement("h1",{},"bye"),
    ]
);

// how to show ths in real
ReactDOM.createRoot(document.getElementById("root")).render(ui);