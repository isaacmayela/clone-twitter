import TweetTitle from "./components/tweet-title/tweetTitle"
import TweeterActions from "./components/twitter-actions/twitterActions"
import cnnBanner from "./images/paysages2.jpeg"
import cnnLogo from "./images/image1.png"
import nytBanner from "./images/paysages3.jpeg"
import nytLogo from "./images/image11.png"
import noProfileLogo from "./images/image12.png"
import twitter1Banner from "./images/paysages4.jpeg"
import twitter2Banner from "./images/paysages5.jpeg"
import twitter3Banner from "./images/paysages6.jpeg"


class ProfileService {
    static getProfile() {
        const userTweetInformations = [
            {
                id:"1",
                profileName:'CNN',
                tweetAvatarUrl:`${cnnLogo}`,
                tweetTitle: <TweetTitle author='CNN' username="@CNN" time="7m"/>,
                tweetText:"President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis.",
                tweetImageUrl:"",
                tweetActions:<TweeterActions viewOne={"19"} viewTwo={"48"} viewThree={"482"}/>,
                profileUsername: "@CNN",
                bannerProfile: `${cnnBanner}`
            },
            {
                id:"2",
                profileName:'The New York Times',
                usename: "@nytimes",
                tweetAvatarUrl:`${nytLogo}`,
                tweetTitle: <TweetTitle author='The New York Times' usename="@nytimes" time="2h"/>,
                tweetText:"Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
                tweetImageUrl:"src/images/image3.png",
                tweetActions:<TweeterActions viewOne={"6.8K"} viewTwo={"36.6K"} viewThree={"267.1K"}/>,
                profileUsername: "@nytimes",
                bannerProfile: `${nytBanner}`,
            },
            {
                id:"3",
                profileName:'Twitter',
                tweetAvatarUrl:`${noProfileLogo}`,
                tweetTitle: <TweetTitle author='Twitter' usename="@twitter" time="Oct 29"/>,
                tweetText:"BIG NEWS lol jk still Twitter",
                tweetImageUrl:"",
                tweetActions:<TweeterActions viewOne={"118.7K"} viewTwo={"785.4K"} viewThree={"3.3M"}/>,
                profileUsername: "@Twitter1",
                bannerProfile: `${twitter1Banner}`,
            },
            {
                id:"4",
                profileName:'Twitter',
                tweetAvatarUrl:`${noProfileLogo}`,
                tweetTitle: <TweetTitle author='Twitter' usename="@twitter" time="Oct 4"/>,
                tweetText:"hello literally everyone",
                tweetImageUrl:"",
                tweetActions:<TweeterActions viewOne={"118.7K"} viewTwo={"785.4K"} viewThree={"3.3M"}/>,
                profileUsername: "@Twitter2",
                bannerProfile: `${twitter2Banner}`,
            },
            {
                id:"5",
                profileName:'Twitter',
                tweetAvatarUrl:`${noProfileLogo}`,
                tweetTitle: <TweetTitle author='Twitter' usename="@twitter" time="Oct 4"/>,
                tweetText:"hello literally everyone",
                tweetImageUrl:"",
                tweetActions:<TweeterActions viewOne={"57"} viewTwo={"144"} viewThree={"184"}/>,
                profileUsername: "@Twitter3",
                bannerProfile: `${twitter3Banner}`,
            }
        ]
        return userTweetInformations;
    }
 }

export default ProfileService



// export { userTweetInformations }