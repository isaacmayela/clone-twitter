import Tweet from '../tweet/tweet';
import UsefulFeatures from '../../utils/utils';
import { useEffect } from 'react';
import { useState } from 'react';


function Tweets({username}) {

  const tweetsData = UsefulFeatures.getUpdateListOfTweet(useState, useEffect)

  const filterTweets = UsefulFeatures.filterTweets(tweetsData, username)


  return (
      <div className='tweets'>
        {
          filterTweets.map((tweetInfo) =>(
            <Tweet username={UsefulFeatures.findUser(tweetInfo.username).username} profileName={UsefulFeatures.findUser(tweetInfo.username).profileName} avatar={UsefulFeatures.findUser(tweetInfo.username).profile} tweetText={tweetInfo.tweetText} image={tweetInfo.tweetImageUrl} reply={tweetInfo.reply} retweet={tweetInfo.retweet} react={tweetInfo.react} time={tweetInfo.time} key={tweetInfo.id} tweetKey={tweetInfo.id}/>
          ))
        }

      </div>
  );
}

export default Tweets;
