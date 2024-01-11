import Tweet from '../tweet/tweet';
import jsonDatas from "../../data/initial-data.json";
import UserModel from '../../models/userModel';


function Tweets({username}) {

  const users = UserModel.getUsers()

  function tweetFilter(username) {
    if (username){
      return jsonDatas.tweets.filter((tweets) => tweets.username === username)
    }

    return jsonDatas.tweets
    
  }

  const tweetsData = tweetFilter(username)

  function findUser(username) {
      const user = users.find((user) => user.username === username );
      return user
    }

  return (
      <div className='tweets'>
        {
          tweetsData.map((tweetInfo) =>(
            <Tweet username={findUser(tweetInfo.username).username} profileName={findUser(tweetInfo.username).profileName} avatar={findUser(tweetInfo.username).profile} tweetText={tweetInfo.tweetText} image={tweetInfo.tweetImageUrl} reply={tweetInfo.reply} retweet={tweetInfo.retweet} react={tweetInfo.react} time={tweetInfo.time} key={tweetInfo.id}/>
          ))
        }

      </div>
  );
}

export default Tweets;
