import React from 'react';
import { Link } from 'react-router-dom';
import TweeterActions from "../twitter-actions/twitterActions"
import TweetTitle from '../tweet-title/tweetTitle';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import UsefulFeatures from '../../utils/utils';


function Tweet({username,profileName, avatar, tweetText, image, reply, retweet, react, time, tweetKey }) {

    UsefulFeatures.addLikersListFeature(tweetKey)
    
    const Curentuser = useContext(UserContext);

    return (
        <>
            <div className='flex justify-start items-start gap-5 px-4 py-6 border-b-[#2F3336] border-b border-solid;'> 
                <div className='tweet-avatar'>

                {
                    Curentuser.userName === username ? 
                        <Link to={"/profile"}>
                        <img src={avatar} alt="tweet avatar" />
                        </Link>
                    : 
                    <Link to={`/profile/${username}`}>
                        <img src={avatar} alt="tweet avatar" />
                    </Link>              
                
                }
                </div>
                <div className='tweet-content'>
                    <div className='tweet-body'>
                        <div className="tweet-title">
                            <TweetTitle author={profileName} username={username} time={time}/>
                        </div>
                        <p className="tweet-text">{tweetText}</p>
                        <div className="tweet-image">
                            {image ? <img src={image} alt="tweet image" /> : ""}
                        </div>
                    </div>
                    <div className='tweet-actions'>
                        <TweeterActions reply={reply} retweet={retweet} react={react} tweetKey={tweetKey}/>
                    </div>
                </div>
            </div>
        </> 
    );
}

export default Tweet;
