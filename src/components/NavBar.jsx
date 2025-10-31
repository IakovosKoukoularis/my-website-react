import { Link, useMatch, useResolvedPath } from "react-router-dom";
import LoginModal from "./LoginModal.jsx";
import "../styles/NavBar.css";

export default function NavBar(){

    const imageButton = <img src="login-icon.png" alt="" className="login-icon"/>;

    return(
        <nav className="nav">
            <Link to="/" className="site-title">Poke Valley</Link>
            <ul>
                <CustomLink to="/store">Store</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>  
                <LoginModal customButton={imageButton}></LoginModal>
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