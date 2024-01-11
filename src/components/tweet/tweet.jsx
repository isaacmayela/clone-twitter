import React from 'react';
// import { userTweetInformations } from '../../useFetch';
import { Link } from 'react-router-dom';
import ProfileService from '../../useFetch';
import jsonDatas from "../../data/initial-data.json";
import TweeterActions from "../twitter-actions/twitterActions"
import UserModel from '../../models/userModel';
import TweetTitle from '../tweet-title/tweetTitle';


function Tweet({imageUrl,children}) {

    const users = UserModel.getUsers()

    const tweetsData = jsonDatas.tweets

    function findUser(username) {
        const user = users.find((user) => user.username === username );
        return user
    }
    
  return (
    <>
        {
            tweetsData.map((tweetInfo) =>(
                <div className='tweet' key={tweetInfo.id}>
                    <div className='tweet-avatar'>
                        <Link to={`/profile/${findUser(tweetInfo.username).username}`}>
                            <img src={findUser(tweetInfo.username).profile} alt="tweet avatar" />
                        </Link>
                    </div>
                    <div className='tweet-content'>
                        <div className='tweet-body'>
                            <div className="tweet-title">
                                <TweetTitle author={findUser(tweetInfo.username).profileName} username={findUser(tweetInfo.username).username} time={tweetInfo.time}/>
                            </div>
                            <p className="tweet-text">{tweetInfo.tweetText}</p>
                            <div className="tweet-image">
                                {tweetInfo.tweetImageUrl ? <img src={tweetInfo.tweetImageUrl} alt="tweet image" /> : ""}
                            </div>
                        </div>
                        <div className='tweet-actions'>
                            <TweeterActions reply={tweetInfo.reply} retweet={tweetInfo.retweet} react={tweetInfo.react}/>
                        </div>
                    </div>
                </div>
            ))
        }
    </> 
  );
}

export default Tweet;