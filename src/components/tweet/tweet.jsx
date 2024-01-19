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
            <div className='flex justify-start items-start gap-5 px-4 py-6 border-b-[#2F3336] border-b border-solid'> 
                <div className='flex-[0_0_70px]'>

                {
                    Curentuser.userName === username ? 
                        <Link to={"/profile"}>
                        <img src={avatar} alt="tweet avatar" className='max-w-full max-h-[100px] rounded-[100%]' />
                        </Link>
                    : 
                    <Link to={`/profile/${username}`}>
                        <img src={avatar} alt="tweet avatar" className='max-w-full max-h-[100px] rounded-[100%]'/>
                    </Link>              
                
                }
                </div>
                <div className='flex flex-col items-start justify-start gap-[30px] w-full'>
                    <div className='flex flex-col gap-2'>
                        <div className="flex justify-start items-start gap-2.5 text-base">
                            <TweetTitle author={profileName} username={username} time={time}/>
                        </div>
                        <p className="text-[#D9D9D9] text-base">{tweetText}</p>
                        <div className="w-full pt-[0.3rem] pb-0 px-0">
                            {image ? <img src={image} alt="tweet image" className='w-full max-w-full h-auto border rounded-[50px] border-[#2F3336] border-solid'/> : ""}
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-20 text-[grey] text-base'>
                        <TweeterActions reply={reply} retweet={retweet} react={react} tweetKey={tweetKey}/>
                    </div>
                </div>
            </div>
        </> 
    );
}

export default Tweet;
