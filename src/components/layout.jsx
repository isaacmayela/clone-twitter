import React from 'react';
import Sidebar from './sidebar/sidebar';
import Trends from './trends/trends';
import { Outlet, useNavigate } from 'react-router-dom';
import { getTweets } from '../requests/requests';
import TweetContext from '../context/tweet-context';
import { useState, useEffect } from 'react';
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import Authentication from '../authentication/authentication';

function Layout({children}) {

    const { currentUser, setCurrentUser } = useContext(UserContext)
    const navigate = useNavigate();

    const [tweetArray, setTweetArray] = useState(getTweets())

    return (
        <TweetContext.Provider value={{tweetArray, setTweetArray}}>
            <>
                <Sidebar />
                
                <Outlet />

                <Trends />
        
            </>
        </TweetContext.Provider>
    );
}

export default Layout;