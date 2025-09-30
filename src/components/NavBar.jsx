import { Link} from "react-router-dom";

export default function NavBar() {

    return(
        <nav className="nav">
            <Link to="/" className="site-title">Poke Valley</Link>
            <ul>
                <li>
                    <CustomLink to="/about">About</CustomLink>
                </li>
                <li>
                    <CustomLink to="/contact">Contact</CustomLink>
                </li>
                <li>
                    <CustomLink to="/store">Store</CustomLink>
                </li>
                <img src="login-icon.png" alt="" className="login-icon"/>
            </ul>
        </nav>
    );
}

function CustomLink( { to, children, ...props } ) {
    const path = window.location.pathname;
    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}