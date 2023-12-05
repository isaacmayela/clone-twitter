import TweetTitle from "./components/tweet-title/tweetTitle"
import TweeterActions from "./components/twitter-actions/twitterActions"


const userTweetInformations = [
    {
        id:1,
        tweetAvatarUrl:'src/images/image1.png',
        tweetTitle: <TweetTitle author='CNN' usename="@CNN" time="7m"/>,
        tweetText:"President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis.",
        tweetImageUrl:"",
        tweetActions:<TweeterActions viewOne={"19"} viewTwo={"48"} viewThree={"482"}/>
    },
    {
        id:2,
        tweetAvatarUrl:'src/images/image11.png',
        tweetTitle: <TweetTitle author='The New York Times' usename="@nytimes" time="2h"/>,
        tweetText:"Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
        tweetImageUrl:"src/images/image3.png",
        tweetActions:<TweeterActions viewOne={"6.8K"} viewTwo={"36.6K"} viewThree={"267.1K"}/>
    },
    {
        id:3,
        tweetAvatarUrl:'src/images/image12.png',
        tweetTitle: <TweetTitle author='Twitter' usename="@twitter" time="Oct 29"/>,
        tweetText:"BIG NEWS lol jk still Twitter",
        tweetImageUrl:"",
        tweetActions:<TweeterActions viewOne={"118.7K"} viewTwo={"785.4K"} viewThree={"3.3M"}/>
    },
    {
        id:4,
        tweetAvatarUrl:'src/images/image12.png',
        tweetTitle: <TweetTitle author='Twitter' usename="@twitter" time="Oct 4"/>,
        tweetText:"hello literally everyone",
        tweetImageUrl:"",
        tweetActions:<TweeterActions viewOne={"118.7K"} viewTwo={"785.4K"} viewThree={"3.3M"}/>
    },
    {
        id:5,
        tweetAvatarUrl:'src/images/image12.png',
        tweetTitle: <TweetTitle author='Twitter' usename="@twitter" time="Oct 4"/>,
        tweetText:"hello literally everyone",
        tweetImageUrl:"",
        tweetActions:<TweeterActions viewOne={"57"} viewTwo={"144"} viewThree={"184"}/>
    }
]

export { userTweetInformations }