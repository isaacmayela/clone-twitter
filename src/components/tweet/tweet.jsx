import React from 'react';
import { userTweetInformations } from '../../useFetch';


function Tweet({imageUrl,children}) {
  return (
    <>
        {
            userTweetInformations.map((tweetInfo) =>(
                <div className='tweet' key={tweetInfo.id}>
                    <div className='tweet-avatar'>
                        <img src={tweetInfo.tweetAvatarUrl} alt="tweet avatar" />
                    </div>
                    <div className='tweet-content'>
                        <div className='tweet-body'>
                            <div className="tweet-title">{tweetInfo.tweetTitle}</div>
                            <p className="tweet-text">{tweetInfo.tweetText}</p>
                            <div className="tweet-image">
                                {tweetInfo.tweetImageUrl ? <img src={tweetInfo.tweetImageUrl} alt="tweet image" /> : ""}
                            </div>
                        </div>
                        <div className='tweet-actions'>{tweetInfo.tweetActions}</div>
                    </div>
                </div>
            ))
        }
    </> 
  );
}

export default Tweet;