import GetPostLocalStorageDatas from "../storage/localStorage";
import UserModel from "../models/userModel";

class UsefulFeatures{
    static getTodayDate() {

        let options = { month: 'short', day: '2-digit' };
        let today = new Date ();
        const todayData = today.toLocaleDateString ("en-US", options);

        return todayData
    
    }

    static addNewTweet() {
        return
    
    }

    static getTweets(username){
        const listOfTweets = GetPostLocalStorageDatas.getData().tweets

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

}

export default UsefulFeatures