// import TweetTitle from "./components/tweet-title/tweetTitle"
// import TweeterActions from "./components/twitter-actions/twitterActions"
import cnnBanner from "../images/paysages2.jpeg"
import cnnLogo from "../images/image1.png"
import nytBanner from "../images/paysages3.jpeg"
import nytLogo from "../images/image11.png"
import noProfileLogo from "../images/image12.png"
import twitter1Banner from "../images/paysages4.jpeg"
import twitter2Banner from "../images/paysages5.jpeg"
import twitter3Banner from "../images/paysages6.jpeg"

// import cnnBanner from "../images/paysages2.jpeg"
// import cnnLogo from "../images/image1.png"
// import nytBanner from "./images/paysages3.jpeg"
// import nytLogo from "./images/image11.png"
// import noProfileLogo from "./images/image12.png"
// import twitter1Banner from "./images/paysages4.jpeg"
// import twitter2Banner from "./images/paysages5.jpeg"
// import twitter3Banner from "./images/paysages6.jpeg"


class UserModel {
    static getUsers() {
        const userInformations = [
            {
                id:"1",
                profileName:'CNN',
                username: "@CNN",
                password: "1234",
                profile:`${cnnLogo}`,
                bannerProfile: `${cnnBanner}`
            },
            {
                id:"2",
                profileName:'The New York Times',
                username: "@nytimes",
                password: "5236",
                profile:`${nytLogo}`,
                bannerProfile: `${nytBanner}`,
            },
            {
                id:"3",
                profileName:'Twitter',
                username: "@Twitter1",
                password: "7896",
                profile:`${noProfileLogo}`,
                bannerProfile: `${twitter1Banner}`,
            },
            {
                id:"4",
                profileName:'Twitter',
                username: "@Twitter2",
                password: "5698",
                profile:`${noProfileLogo}`,
                bannerProfile: `${twitter2Banner}`,
            },
            {
                id:"5",
                profileName:'Twitter',
                username: "@Twitter3",
                password: "2589",
                profile:`${noProfileLogo}`,
                bannerProfile: `${twitter3Banner}`,
            }
        ]
        return userInformations;
    }
 }

export default UserModel



// export { userTweetInformations }