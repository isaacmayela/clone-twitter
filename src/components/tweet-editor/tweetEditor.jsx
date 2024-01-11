import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { useNavigate } from "react-router-dom";

function TweetEditor() {

    const user = useContext(UserContext);
    const navigate = useNavigate();

    if (!user.isLogged) {
        navigate("/")
    }

  return (
    <div className="tweet-editor">
      <div className='avatar'>
      <Link to="/profile">
        <img src="src/images/profile-photo.png" alt="profile photo"/>
      </Link>
      </div>
      <form className='tweet-editor-form'>
        <input type="text" placeholder="What's happening ?" className='tweet-editor-input'/>
        <div className='tweet-editor-buttons'>
          <div className='tweet-editor-actions'>
            <button>
              <img src="src/images/Media.png" alt="screen image"/>
            </button>
            <button>
              <img src="src/images/Gif.png" alt="gif image"/>
            </button>
            <button>
              <img src="src/images/Poll.png" alt="screen image"/>
            </button>
            <button>
              <img src="src/images/Group.png" alt="screen image"/>
            </button>
            <button>
              <img src="src/images/Schedule.png" alt="screen image"/>
            </button>
          </div>
          <button className='button'>Tweet</button>
        </div>
      </form>
    </div>
  );
}

export default TweetEditor;