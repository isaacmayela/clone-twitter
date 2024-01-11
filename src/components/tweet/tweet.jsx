import React from 'react';
// import { userTweetInformations } from '../../useFetch';
import { Link } from 'react-router-dom';
import ProfileService from '../../useFetch';
import jsonDatas from "../../data/initial-data.json";
import TweeterActions from "../twitter-actions/twitterActions"
import UserModel from '../../models/userModel';
import TweetTitle from '../tweet-title/tweetTitle';


function Tweet({username,profileName, avatar, tweetText, image, reply, retweet, react, time }) {

    const users = UserModel.getUsers()

    const tweetsData = jsonDatas.tweets

    function findUser(username) {
        const user = users.find((user) => user.username === username );
        return user
    }
    
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
