import React from 'react';
// import { userTweetInformations } from '../../useFetch';
import { Link } from 'react-router-dom';
import TweeterActions from "../twitter-actions/twitterActions"
import TweetTitle from '../tweet-title/tweetTitle';


function Tweet({username,profileName, avatar, tweetText, image, reply, retweet, react, time }) {
    
  return (
    <>
        <div className='tweet'>
            <div className='tweet-avatar'>
                <Link to={`/profile/${username}`}>
                    <img src={avatar} alt="tweet avatar" />
                </Link>
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
                    <TweeterActions reply={reply} retweet={retweet} react={react}/>
                </div>
            </div>
        </div>
    </> 
  );
}

export default Tweet;
