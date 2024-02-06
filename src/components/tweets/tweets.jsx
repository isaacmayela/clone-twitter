import Tweet from '../tweet/tweet';
import UsefulFeatures from '../../utils/utils';
import { useEffect } from 'react';
import { useState } from 'react';
import GetPostLocalStorageDatas from '../../storage/localStorage';
import axios from "axios";


function Tweets({username}) {

  const [tweetss, setTweetss] = useState([])

  const tweetsData = UsefulFeatures.getUpdateListOfTweet(useState, useEffect)

  const filterTweets = UsefulFeatures.filterTweets(tweetsData, username)


  // on work 


  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await axios.get('https://65bbaeb852189914b5bcdd06.mockapi.io/tweeter/tweets');
          setTweetss(response.data);
      } catch (error) {
          console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, []);


  // on work 




  // const tweets = async ()=>{
  //   return await GetPostLocalStorageDatas.getTweets()
  // }

  // async function fetchData() {
  //   try {
  //       const response = await GetPostLocalStorageDatas.getTweets();
  //       return response.data
  //       // console.log(response.data);
  //   } catch (error) {
  //       // return error
  //       console.log("Erreur lors de la récupération des données :", error);
  //   }
  // }

  // function fetchData() {
  //   GetPostLocalStorageDatas.getTweets()
  //   .then(response => {
  //       return response.data
  //       // console.log(response.data); // Accédez aux données de la réponse ici
  //   })
  //   .catch(error => {
  //       return error
  //       // console.error("Erreur lors de la récupération des données :", error);
  //   });
  // }


  // const listdata = tweets()


  // const listdatas = fetchData();
  // console.log(listdatas);

  console.log(tweetss);


  return (
      <div className='tweets'>
        {
          tweetss.map((tweetInfo) =>(
          <Tweet username={UsefulFeatures.findUser(tweetInfo.username).username} profileName={UsefulFeatures.findUser(tweetInfo.username).profileName} avatar={UsefulFeatures.findUser(tweetInfo.username).profile} tweetText={tweetInfo.tweetText} image={tweetInfo.tweetImageUrl} reply={tweetInfo.reply} retweet={tweetInfo.retweet} react={tweetInfo.react} time={tweetInfo.time} key={tweetInfo.id} tweetKey={tweetInfo.id}/>
          ))
        }

      </div>
  );
}

export default Tweets;
