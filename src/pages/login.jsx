import React from 'react';
import twitterLogo from '../images/Twitter_Logo_Blue.png'
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import UserModel from '../models/userModel';
import GetPostLocalStorageDatas from '../storage/localStorage'
import jsonDatas from "../data/initial-data.json"
import UserInformations from '../components/user-informations/userInformations';
import Authentication from '../authentication/authentication';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    const handleLoginSubmit = () =>{

        Authentication.login(username, password, navigate)
        
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

            <UserInformations/>

        </div>
        </main>
    );
}

export default Login;