import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import TweetEditorButtons from '../tweet-editor-buttons/tweet-editor-buttons';
import { useState } from "react";
import UsefulFeatures from '../../utils/utils';


function TweetEditor() {

  const [tweetMessage, setTweetMessage] = useState("");

  const user = useContext(UserContext);

  const currentUser = UsefulFeatures.findUser(user.userName)

  const handlePostInput = () => {

    UsefulFeatures.addNewTweet(tweetMessage, currentUser)
    
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