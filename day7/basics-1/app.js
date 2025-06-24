// console.log("Hello from day7!");

/*
// <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
// </ul>
*/

// const rootElem = document.getElementById("root");

// const item1 = document.createElement("li");
// item1.innerText = "Item 1";

// const item2 = document.createElement("li");
// item2.innerText = "Item 2";

// const list = document.createElement("ul");
// list.appendChild(item1);
// list.appendChild(item2);

// rootElem.appendChild(list);

// ------------------------------------------------

// const item1 = React.createElement("li", {}, "Item 1");
// console.log("🟡 : item1:", item1);
// const item2 = React.createElement("li", {}, "Item 2");
// const list = React.createElement("ul", {}, [item1, item2]);

// console.log("🟡 : list:", list);
// const rootElem = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(rootElem);

// reactRoot.render(list);

// ----------------------------------------------------

// const item01 = {
//     $$typeof: Symbol.for("react.element"),
//     type: "ul",
//     key: null,
//     ref: null,
//     props: {
//         children: [
//             {
//                 $$typeof: Symbol.for("react.element"),
//                 type: "li",
//                 key: null,
//                 ref: null,
//                 props: {
//                     children: "item 1",
//                 },
//                 _owner: null,
//                 _store: {},
//             },
//             {
//                 $$typeof: Symbol.for("react.element"),
//                 type: "li",
//                 key: null,
//                 ref: null,
//                 props: {
//                     children: "item 2",
//                 },
//                 _owner: null,
//                 _store: {},
//             },
//         ],
//     },
//     _owner: null,
//     _store: {},
// };

// const rootElem = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(rootElem);

// reactRoot.render(item01);

// ------------------------------------------------------

// const item1 = <li>Item 1</li>;
// const item2 = <li>Item 2</li>;
// const list = (
//     <ul>
//         {item1} {item2}
//     </ul>
// );

// const rootElem = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(rootElem);

// reactRoot.render(list);

// --------------------------------------

const list = (
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
); // React Element

const rootElem = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(rootElem);

reactRoot.render(list);
