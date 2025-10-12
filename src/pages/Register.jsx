import { Link } from "react-router-dom";
import "../styles/RegisterStyle.css"

function Register() {

    return (
        <div className="page-container">
            <h1>Register</h1>
            <p>Create an account to access all features.</p>
            <form className="register-form">
                <input type="text" placeholder="Username" className="register-input"></input>
                <input type="email" placeholder="Email" className="register-input"></input>
                <input type="text" placeholder="Phone Number" className="register-input"></input>
                <input type="password" placeholder="Password" className="register-input"></input>
                <input type="password" placeholder="Confirm Password" className="register-input"></input>
                <button className="register-button"><Link to="/" className="register-text">submit</Link></button>
            </form>
        </div>
    );
}

export default Register;