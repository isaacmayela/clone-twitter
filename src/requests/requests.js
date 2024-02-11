import axios from "axios";
import UsefulFeatures from "../utils/utils";

const fetchData = async (url) => {
    try {
    const response = await axios.get(url);
    return response.data
    } catch (error) {
        alert("Une erreur s'est produit lors de la récuperation des données.")
    }
};

const tweets = await fetchData('https://65bbaeb852189914b5bcdd06.mockapi.io/tweeter/tweets');

const getTweets = () => {
    return tweets
}

const postData = async (data, tweetArray, updateArray, username) =>{
    const id = tweetArray.length + 1
    const objectTobePosted = UsefulFeatures.getObjectTobePosted(data, username, id)
    try{
        const response = await axios.post("https://65bbaeb852189914b5bcdd06.mockapi.io/tweeter/tweets", objectTobePosted);
        objectTobePosted.id = `${id}`
        updateArray([...tweetArray, objectTobePosted])
        return false
    }catch(error){
        alert("Une erreur s'est produit lors de l'envoi des données.")
    }
}

const currentUser = await fetchData('https://65bbaeb852189914b5bcdd06.mockapi.io/tweeter/users/1');

const getCurrentUser = () =>{
    return currentUser
}

const updateCurrentUser = async (data, currentUser, setCurrentUser) =>{
    const objectTOBeUpdate = {username: data.username, isLogged: data.isLogged}

    setCurrentUser(objectTOBeUpdate)

    try{
        const response = await axios.put("https://65bbaeb852189914b5bcdd06.mockapi.io/tweeter/users/1", objectTOBeUpdate);
    }catch(error){
        alert("Une erreur s'est produit lors de la mise à jour.")
    }
}

const updateLike = async (username, tweetArray, setTweetArray, id) =>{

    const tweetToBeUpdate = UsefulFeatures.handleLike(id, tweetArray, username)

    const newArray = [...tweetArray];
    newArray[Number(id)-1] = tweetToBeUpdate;
    setTweetArray(newArray)

    try{
        const response = await axios.put(`https://65bbaeb852189914b5bcdd06.mockapi.io/tweeter/tweets/${id}`, tweetToBeUpdate);
    }catch(error){
        alert("Une erreur s'est produit lors de la mise à jour.")
    }
}

export {getTweets, postData, getCurrentUser,updateCurrentUser, updateLike}