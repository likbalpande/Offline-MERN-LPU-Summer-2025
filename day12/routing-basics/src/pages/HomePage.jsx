import { Link } from "react-router";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            {/* <a href="/view">_View Page_anchor</a> */}
            {/* <br /> */}
            <Link to="/view">_View Page_link</Link>
        </div>
    );
};

export { HomePage };
