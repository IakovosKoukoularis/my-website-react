import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Modal from "./Modal";


export default function NavBar(){

    const customButton = <img src="login-icon.png" alt="" className="login-icon"/>;

    return(
        <nav className="nav">
            <Link to="/" className="site-title">Poke Valley</Link>
            <ul>
                <CustomLink to="/store">Store</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>  
                <Modal customButton={customButton}></Modal>
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