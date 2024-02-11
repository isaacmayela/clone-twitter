import React from 'react';
import twitterLogo from '../images/Twitter_Logo_Blue.png'
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import UserInformations from '../components/user-informations/userInformations';
import Authentication from '../authentication/authentication';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {

    const { currentUser, setCurrentUser } = useContext(UserContext)

    const navigate = useNavigate();

    // useEffect(() => {
    //     Authentication.navigateHome(navigate) 
    // });

    useEffect(() => {
        Authentication.navigation(currentUser.isLogged, navigate) 
    }, [currentUser.isLogged, navigate]);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLoginSubmit = () =>{

        Authentication.useAuthenticated(username, password, navigate, currentUser, setCurrentUser)
        
    }

    // const handleLoginSubmit = () =>{

    //     Authentication.login(username, password, navigate)
        
    // }

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
                <a href='#' onClick={handleLoginSubmit}>Login</a>
            </div>

            <UserInformations/>

        </div>
        </main>
    );
}

export default Login;