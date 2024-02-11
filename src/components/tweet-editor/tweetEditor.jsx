import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import TweetEditorButtons from '../tweet-editor-buttons/tweet-editor-buttons';
import UsefulFeatures from '../../utils/utils';
import TweetForm from '../tweetform/tweet-form';


function TweetEditor() {

  const { currentUser, setCurrentUser } = useContext(UserContext);
  const user = UsefulFeatures.findUser(currentUser.username)

  return (
    <div className="tweet-editor">
      <div className='avatar'>
        <Link to="/profile">
          <img src={user.profile} alt="profile photo"/>
        </Link>
      </div>
      <TweetForm/>
    </div>
  );
}

export default TweetEditor;