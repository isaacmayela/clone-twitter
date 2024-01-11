import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { useNavigate } from "react-router-dom";
import UserModel from '../../models/userModel';
import TweetEditorButtons from '../tweet-editor-buttons/tweet-editor-buttons';

function TweetEditor() {

    const user = useContext(UserContext);
    const navigate = useNavigate();

    if (!user.isLogged) {
        navigate("/")
    }

    const users = UserModel.getUsers()

    function findUser(username) {
      const user = users.find((user) => user.username === username );
      return user
    }

    const currentUser = findUser(user.userName)

  return (
    <div className="tweet-editor">
      <div className='avatar'>
      <Link to="/profile">
        <img src={currentUser.profile} alt="profile photo"/>
      </Link>
      </div>
      <form className='tweet-editor-form'>
        <input type="text" placeholder="What's happening ?" className='tweet-editor-input'/>
        <div className='tweet-editor-buttons'>
          <div className='tweet-editor-actions'>
            <TweetEditorButtons/>
          </div>
          <button className='button'>Tweet</button>
        </div>
      </form>
    </div>
  );
}

export default TweetEditor;