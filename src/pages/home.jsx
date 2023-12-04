import React from 'react';
import Header from '../components/header/header';
import TweetEditor from '../components/tweet-editor/tweetEditor';
import Tweets from '../components/tweets/tweets';

function Home() {
  return (
    <main className="timeline">
      <Header/>
      <TweetEditor/>
      <Tweets/>
    </main>
  );
}

export default Home;