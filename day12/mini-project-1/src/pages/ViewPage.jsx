import { Link } from "react-router";

const ViewPage = () => {
    return (
        <div>
            <h1>View Page!</h1>
            {/* <a href="/">_HOME_anchor</a> */}
            {/* <br /> */}
            <Link to="/">_Home_link</Link>
        </div>
    );
};

export { ViewPage };
