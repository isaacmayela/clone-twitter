import Tweet from '../tweet/tweet';
import UsefulFeatures from '../../utils/utils';
import { useEffect, useState, useContext } from 'react';
import TweetContext from '../../context/tweet-context';


function Tweets({username}) {

  const { tweetArray, setTweetArray } = useContext(TweetContext)

  // const tweetsData = UsefulFeatures.getUpdateListOfTweet(useState, useEffect)

  // const filterTweets = UsefulFeatures.filterTweets(tweetsData, username)

  const filterTweets = UsefulFeatures.filterAndReverseTweets(tweetArray, username)


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
