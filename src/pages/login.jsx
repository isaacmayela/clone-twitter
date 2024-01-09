import React from 'react';
import Header from '../components/header/header';
import TweetEditor from '../components/tweet-editor/tweetEditor';
import Tweets from '../components/tweets/tweets';
import twitterLogo from '../images/Twitter_Logo_Blue.png'

function Login() {
  return (
    <main className="login-container">
      <div className="element-container">
        <img src={twitterLogo} alt="twitter logo" />
        <h1>Log in to Twitter</h1>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Password'/>
        <div className='login-button-container'>
            <a href='#'>Login</a>
        </div>
      </div>
    </main>
  );
}

export default Login;