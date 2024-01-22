import GetPostLocalStorageDatas from "../storage/localStorage";
import UserModel from "../models/userModel";

class UsefulFeatures{
    static getTodayDate() {

        let options = { month: 'short', day: '2-digit' };
        let today = new Date ();
        const todayData = today.toLocaleDateString ("en-US", options);

        return todayData
    
    }

    // static getRalativeDate(time){
    //     let today = new Date ();

    //     const differenceEnSecondes = Math.floor((today - time) / 1000);

    //     let tempsRelatif = '';

    //     if (differenceEnSecondes < 60) {
    //     tempsRelatif = 'Now';
    //     } else if (differenceEnSecondes < 3600) {
    //     const minutes = Math.floor(differenceEnSecondes / 60);
    //     tempsRelatif = `Il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
    //     } else if (differenceEnSecondes < 86400) {
    //     const heures = Math.floor(differenceEnSecondes / 3600);
    //     tempsRelatif = `Il y a ${heures} heure${heures > 1 ? 's' : ''}`;
    //     } else {
    //     const jours = Math.floor(differenceEnSecondes / 86400);
    //     tempsRelatif = `Il y a ${jours} jour${jours > 1 ? 's' : ''}`;
    //     }
    //     }

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

            localStorageDatas.tweets.unshift(tweetObject)

            const event = new CustomEvent("tweetChanged", {
                detail: localStorageDatas,
            });

            GetPostLocalStorageDatas.postData(event.detail)

            window.dispatchEvent(event);
        }

        }
    
    }

    static filterTweets(listOfTweets, username){

        if (username){
            return listOfTweets.filter((tweets) => tweets.username === username)
        }
      
        return listOfTweets
    }

    static getUpdateListOfTweet(useState, useEffect){
        const [tweetsData, setTweetsData] = useState(
            GetPostLocalStorageDatas.getData() || ""
        );
        
        useEffect(() => {
            function handleTweetChange(e) {
            setTweetsData(e.detail);
            }
            window.addEventListener("tweetChanged", handleTweetChange);
            return () => {
            window.removeEventListener("tweetChanged", handleTweetChange);
            };
        }, []);

        return tweetsData.tweets
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
            const event = new CustomEvent("tweetChanged", {
                detail: storageDatas,
            });
            GetPostLocalStorageDatas.postData(event.detail)

            window.dispatchEvent(event);
        }

        if (liker){
            UsefulFeatures.removeUserToLikeersList(tweet.likeersList, username)
            if (Number(tweet.react) > 0){
                tweet.react = `${Number(tweet.react) - 1}`
            }

            const event = new CustomEvent("tweetChanged", {
                detail: storageDatas,
            });
            GetPostLocalStorageDatas.postData(event.detail)

            window.dispatchEvent(event);

        }

    }

    static checkIfCurrentUserHaveTweet(tweetKey, username){
        const storageDatas = GetPostLocalStorageDatas.getData()
        const listOfTweets = storageDatas.tweets
        const tweet  = UsefulFeatures.findTweet(listOfTweets,tweetKey)
        const likeersList = tweet.likeersList

        const liker = likeersList.includes(username)

        if (liker){
            return true
        }
        return false
    }

    static updateLike(){
        const [tweetsData, setTweetsData] = useState(
            GetPostLocalStorageDatas.getData() || ""
        );
        
        useEffect(() => {
            function handleTweetChange(e) {
            setTweetsData(e.detail);
            }
            window.addEventListener("tweetChanged", handleTweetChange);
            return () => {
            window.removeEventListener("tweetChanged", handleTweetChange);
            };
        }, []);

        return tweetsData.tweets
    }

}

export default UsefulFeatures