import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {

    const loggedIn = false;

    return(
        <nav className="nav">
            <Link to="/" className="site-title">Poke Valley</Link>
            <ul>
                <CustomLink to="/store">Store</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
                <img src={!loggedIn ?"login-icon.png" : "logged-in.png"} alt="" className="login-icon"/>
            </ul>
        </nav>
    );
}

function CustomLink( { to, children, ...props } ) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true }); // entire path must march end: true

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}