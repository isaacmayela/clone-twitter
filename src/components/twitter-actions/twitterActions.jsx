import React from 'react';

function TweeterActions({viewOne, viewTwo, viewThree}) {
  return (
    <>
        <div className="tweet-action">
          <img src="src/images/Reply.png" alt="React icon" />
          <p>{viewOne}</p>
        </div>
        <div className="tweet-action">
          <img src="src/images/Retweet.png" alt="Retweet icon" />
          <p>{viewTwo}</p>
        </div>
        <div className="tweet-action">
          <img src="src/images/React.png" alt="React icon" />
          <p>{viewThree}</p>
        </div>
        <div className="tweet-action">
          <img src="src/images/Share.png" alt="Share icon" />
        </div>
    </>
  );
}

export default TweeterActions;