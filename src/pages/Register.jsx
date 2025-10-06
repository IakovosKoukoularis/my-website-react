import { Link } from "react-router-dom";

function Register() {

    return (
        <div className="page-container">
            <h1>Register</h1>
            <p>Create an account to access all features.</p>
            <form className="register-form">
                <input type="text" placeholder="Username"></input>
                <input type="email" placeholder="Email"></input>
                <input type="text" placeholder="Phone Number"></input>
                <input type="password" placeholder="Password"></input>
                <input type="password" placeholder="Confirm Password"></input>
                <button><Link to="/" className="register-submit">submit</Link></button>
            </form>
        </div>
    );
}

export default Register;