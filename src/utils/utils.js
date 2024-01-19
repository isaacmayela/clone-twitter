import GetPostLocalStorageDatas from "../storage/localStorage";
import UserModel from "../models/userModel";

class UsefulFeatures{
    static getTodayDate() {

        let options = { month: 'short', day: '2-digit' };
        let today = new Date ();
        const todayData = today.toLocaleDateString ("en-US", options);

        return todayData
    
    }

    static addNewTweet(message, currentUser) {
        const localStorageDatas = GetPostLocalStorageDatas.getData()

        if(localStorageDatas){

        if (message) {
            const tweetObject = {
            "id":`${localStorageDatas.tweets.length + 1}`,
            "username":`${currentUser.username}`,
            "tweetText":`${message}`,
            "tweetImageUrl":"",
            "reply":"0",
            "retweet":"0",
            "react":"0",
            "time": `${UsefulFeatures.getTodayDate()}`
            }

            localStorageDatas.tweets.push(tweetObject)

            GetPostLocalStorageDatas.postData(localStorageDatas)

        }

        }
    
    }

    static getTweets(username){
        const listOfTweets = GetPostLocalStorageDatas.getData().tweets
        // console.log(listOfTweets);

        if (username){
            return listOfTweets.filter((tweets) => tweets.username === username)
        }
      
        return listOfTweets
    }

    static findUser(username){
        const users = UserModel.getUsers()
        const user = users.find((user) => user.username === username );
        return user
    }

    static findTweet(tweets, tweetKey){
        const tweet = tweets.find((tweet) => tweet.id === tweetKey );
        return tweet
    }

    static removeUserToLikeersList(array, user){
        let index = array.indexOf(user);
        if (index > -1) {
            array.splice(index, 1);
        }
    }

    static addLikersListFeature(tweetKey){
        const storageDatas = GetPostLocalStorageDatas.getData()
        const tweets = storageDatas.tweets

        const tweet = UsefulFeatures.findTweet(tweets, tweetKey)

        const likers = tweet.likeersList

        if((likers === undefined) || (likers === null)){
            tweet.likeersList = []
            GetPostLocalStorageDatas.postData(storageDatas)
        }
    }

    static likeTweet(tweetKey, username){
        const storageDatas = GetPostLocalStorageDatas.getData()
        const listOfTweets = storageDatas.tweets
        const tweet  = UsefulFeatures.findTweet(listOfTweets,tweetKey)
        const likeersList = tweet.likeersList

        const liker = likeersList.includes(username)

        if (!liker){
            tweet.likeersList.push(username)
            tweet.react = `${Number(tweet.react) + 1}`
            GetPostLocalStorageDatas.postData(storageDatas)
        }

        if (liker){
            UsefulFeatures.removeUserToLikeersList(tweet.likeersList, username)
            if (Number(tweet.react) > 0){
                tweet.react = `${Number(tweet.react) - 1}`
            }
            GetPostLocalStorageDatas.postData(storageDatas)
        }

    }

}

export default UsefulFeatures