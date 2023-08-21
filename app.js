const parent = React.createElement("div",
    { id: "heading" },
    [tReact.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "child-div" }, "Hi I am h1 tag"), React.createElement("h2", { id: "child-siblings" }, "Hi I am h2 tag")]

    ),
    React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "child-div2" }, "Hi I am h1 tag"), React.createElement("h2", { id: "child-siblings" }, "Hi I am h2 tag")]

    )
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);