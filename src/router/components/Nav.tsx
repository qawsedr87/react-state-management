import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/users">Users</Link>&nbsp;
        <Link to="/form">Form</Link>
        </>
    )
}

export default Nav;