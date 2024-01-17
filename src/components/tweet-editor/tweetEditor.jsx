import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import UserModel from '../../models/userModel';
import TweetEditorButtons from '../tweet-editor-buttons/tweet-editor-buttons';
import { useState } from "react";
import GetPostLocalStorageDatas from '../../storage/localStorage';
import UsefulFeatures from '../../utils/utils';


function TweetEditor() {

  const [tweetMessage, setTweetMessage] = useState("");

  const user = useContext(UserContext);

  const currentUser = UsefulFeatures.findUser(user.userName)

  const handlePostInput = () => {

    const localStorageDatas = GetPostLocalStorageDatas.getData()

    if(localStorageDatas){

      if (tweetMessage) {
        const tweetObject = {
          "id":`${localStorageDatas.tweets.length + 1}`,
          "username":`${currentUser.username}`,
          "tweetText":`${tweetMessage}`,
          "tweetImageUrl":"",
          "reply":"0",
          "retweet":"0",
          "react":"0",
          "time": `${UsefulFeatures.getTodayDate()}`
        }

        localStorageDatas.tweets.push(tweetObject)

        GetPostLocalStorageDatas.postData(localStorageDatas)

      }

    }

    console.log(localStorageDatas.tweets);
    
  }

  return (
    <div className="tweet-editor">
      <div className='avatar'>
      <Link to="/profile">
        <img src={currentUser.profile} alt="profile photo"/>
      </Link>
      </div>
      <form className='tweet-editor-form'>
        <input type="text" placeholder="What's happening ?" className='tweet-editor-input'
          value={tweetMessage}
          onChange={
            (e) => setTweetMessage(e.target.value)
          }
        />
        <div className='tweet-editor-buttons'>
          <div className='tweet-editor-actions'>
            <TweetEditorButtons/>
          </div>
          <button className='button' onClick={handlePostInput}>Tweet</button>
        </div>
      </form>
    </div>
  );
}

export default TweetEditor;