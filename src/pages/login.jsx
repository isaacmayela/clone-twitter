import React from 'react';
import twitterLogo from '../images/Twitter_Logo_Blue.png'
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import UserModel from '../models/userModel';

function Login({onLoginSubmit}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLoginSubmit = () => {
        const users = UserModel.getUsers();

        const hisUsername = users.find((user) => user.username === username );
        const hisPassword = users.find((user) => user.password === password );

        if (hisUsername && (hisUsername === hisPassword)){
            onLoginSubmit(username);
            navigate('/home');
        }

    }

    return (
        <main className="login-container">
        <div className="element-container">
            <img src={twitterLogo} alt="twitter logo" />
            <h1>Log in to Twitter</h1>
            <input type="text" placeholder='Username' 
                value={username}
                onChange={
                    (e) => setUsername(e.target.value)
                }
            
            />
            <input type="text" placeholder='Password'
                value={password}
                onChange={
                    (e) => setPassword(e.target.value)
                }
            
            />
            <div className='login-button-container'>
                <a href='#'onClick={handleLoginSubmit}>Login</a>
            </div>
        </div>
        </main>
    );
}

export default Login;