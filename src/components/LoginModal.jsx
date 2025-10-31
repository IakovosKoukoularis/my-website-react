import React, {useState} from "react";
import { Link } from "react-router-dom";
import users from "../data/users.json";
import "../styles/LoginModal.css";

function LoginModal({customButton, children}) {

    const [modal, setModal] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const toggleModal = () => {
        setModal(!modal);
        setUsername("");
        setPassword("");
    }

    function handleUsername(event) {
        setUsername(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleLogin()  {
        if (username === "" || password === "") {
            alert("Please fill both to continue");
            return;
        }
        const userFound = users.find(
        (user) => user.username === username && user.password === password);
        userFound ? (toggleModal(), alert(`Welcome back, ${username}!`)) : alert(`Wrong username or password`);
    }

    return (
        <>  
            <div onClick={toggleModal}>{customButton}</div>
            {modal ? (
                <div className="modal">
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                    <h1>Login</h1>
                    <input type="text" placeholder="Username" onChange={handleUsername}></input>
                    <input type="password" placeholder="Password" onChange={handlePassword}></input>
                    <button className="close-modal" onClick={handleLogin}>submit</button>
                    <Link to="/register" onClick={toggleModal}>Don't have an account? Register</Link>
                </div>
            </div>
            ) : null}
            
        </>
    );
}

export default LoginModal;
