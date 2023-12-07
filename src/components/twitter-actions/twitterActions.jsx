import React from 'react';

function TweeterActions({viewOne, viewTwo, viewThree}) {
  return (
    <>
        <div className="tweet-action hover-reply">
        <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.5" width="34" height="34" rx="17" fill="black"/>
          <path d="M18.705 9.36833L15.2483 9.36H15.2467C11.6017 9.36 8.74667 12.2158 8.74667 15.8617C8.74667 19.2767 11.4017 21.8667 14.9675 22.0033V25.1933C14.9675 25.2833 15.0042 25.4317 15.0675 25.5292C15.1858 25.7167 15.3875 25.8183 15.5942 25.8183C15.7092 25.8183 15.825 25.7867 15.9292 25.72C16.1492 25.58 21.3233 22.27 22.6692 21.1317C24.2542 19.79 25.2025 17.8233 25.205 15.8717V15.8575C25.2 12.2183 22.3467 9.36833 18.705 9.3675V9.36833ZM21.8608 20.1783C20.9158 20.9783 17.8092 23.0158 16.2175 24.0475V21.3917C16.2175 21.0467 15.9383 20.7667 15.5925 20.7667H15.2625C12.2125 20.7667 9.99751 18.7033 9.99751 15.8617C9.99751 12.9167 12.3042 10.61 15.2475 10.61L18.7033 10.6183H18.705C21.6483 10.6183 23.955 12.9233 23.9567 15.865C23.9542 17.4567 23.1717 19.0683 21.8617 20.1783H21.8608Z" fill="#6E767D"/>
          </svg>
          <p>{viewOne}</p>
        </div>
        <div className="tweet-action hover-retweet">
          <img src="src/images/Retweet.svg" alt="Retweet icon" />
          <p>{viewTwo}</p>
        </div>
        <div className="tweet-action hover-react">
          <img src="src/images/React.svg" alt="React icon" />
          <p>{viewThree}</p>
        </div>
        <div className="tweet-action">
          <img src="src/images/Share.svg" alt="Share icon" />
        </div>
    </>
  );
}

export default TweeterActions;