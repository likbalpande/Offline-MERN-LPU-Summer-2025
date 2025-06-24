// const domRoot = document.getElementById("root");
// const reactRoot = ReactDOM.createRoot(domRoot);

// const Card1 = (
//     <div className="card">
//         <h1>Invitation</h1>
//         <p>Description</p>
//     </div>
// );

// const Card2 = (
//     <div className="card">
//         <h1>Warning!!</h1>
//         <p>Description</p>
//     </div>
// );

// const Card3 = (
//     <div className="card">
//         <h1>Notification...</h1>
//         <p>Description</p>
//     </div>
// );

// const Container = (
//     <div>
//         {Card1}
//         {Card2}
//         {Card3}
//     </div>
// );

// reactRoot.render(Container);

// ----------------------------------------------------

const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const Card1 = () => {
    return (
        <div className="card">
            <h1>Invitation</h1>
            <p>Description</p>
        </div>
    );
};

const Container = (
    <div>
        {Card1}
        {Card2}
        {Card3}
    </div>
);

reactRoot.render(Container);
