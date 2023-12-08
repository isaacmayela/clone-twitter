import React from 'react';
// import { userTweetInformations } from '../../useFetch';
import { Link } from 'react-router-dom';
import ProfileService from '../../useFetch';


function Tweet({imageUrl,children}) {

    const data = ProfileService.getProfile();

  return (
    <>
        {
            data.map((tweetInfo) =>(
                <div className='tweet' key={tweetInfo.id}>
                    <div className='tweet-avatar'>
                        <Link to={`/profile/${tweetInfo.profileUsername}`}>
                            <img src={tweetInfo.tweetAvatarUrl} alt="tweet avatar" />
                        </Link>
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