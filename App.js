// const heading = React.createElement("h1",{id:"heading",className:"myclass1 myclass2"},"This is Test Naukri");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// <div id="parent">
//     <div id="child">
//         <h1>Hello from child1</h1>
//          <h2>Hello from child1</h2>
//     </div>
// </div>

//nested element structure using React

const parent = React.createElement(
    "div",{id:"parent"},[
        React.createElement("div",{id:"child1"},[
                React.createElement("h1",{className:"h1Tag"},"Hello from child1"),
                React.createElement("h2",{className:"h1Tag1"},"Hello from child1")
            ]),
            React.createElement("div",{id:"child2"},[
                    React.createElement("h1",{className:"h1Tag"},"Hello from child2"),
                    React.createElement("h2",{className:"h1Tag1"},"Hello from child2")
                ])
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);