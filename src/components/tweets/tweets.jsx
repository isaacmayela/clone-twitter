import Tweet from '../tweet/tweet';
import UsefulFeatures from '../../utils/utils';

function Tweets({username}) {

  const tweetsData = UsefulFeatures.getTweets(username)

  return (
      <div className='tweets'>
        {
          tweetsData.map((tweetInfo) =>(
            <Tweet username={UsefulFeatures.findUser(tweetInfo.username).username} profileName={UsefulFeatures.findUser(tweetInfo.username).profileName} avatar={UsefulFeatures.findUser(tweetInfo.username).profile} tweetText={tweetInfo.tweetText} image={tweetInfo.tweetImageUrl} reply={tweetInfo.reply} retweet={tweetInfo.retweet} react={tweetInfo.react} time={tweetInfo.time} key={tweetInfo.id} tweetKey={tweetInfo.id}/>
          ))
        }

      </div>
  );
}

export default Tweets;
