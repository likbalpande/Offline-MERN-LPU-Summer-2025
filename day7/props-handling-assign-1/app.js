const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const arr = [
    {
        name: "Prabjyot",
        score: 29,
    },
    {
        name: "Rakesh",
        score: 21,
    },
    {
        name: "Mohan",
        score: 16,
    },
    {
        name: "Anurag",
        score: 39,
    },
    {
        name: "Priyansh",
        score: 47,
    },
];

const styleObj = {
    color: "purple",
    fontSize: "1.5rem",
    fontWeight: "600",
};

const Card = (props) => {
    const { score, title } = props;
    return (
        <div className="card">
            <h3 style={{ color: "red" }}>{title}</h3>
            <p style={styleObj}>{score}</p>
        </div>
    );
};

const App = () => {
    return (
        <div className="parent">
            {arr.map((elem) => {
                return <Card title={elem.name} score={elem.score} key={elem.name} />;
            })}
        </div>
    );
};

reactRoot.render(App());
// reactRoot.render(<App />);
