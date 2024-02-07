import { useState } from "react";
import TweetEditorButtons from "../tweet-editor-buttons/tweet-editor-buttons";
import { useForm } from "react-hook-form";
import ErrorMessage from "../erromessage/error-message";
import UsefulFeatures from "../../utils/utils";
import axios from "axios";

function TweetForm() {

    const [formData, setFormData] = useState({
        tweet: ""
    })

    const {register, handleSubmit, watch, formState:{errors}} = useForm({defaultValues: formData, mode: 'onChange'});

    const onSubmit = async (data) =>{

        const objectTobePosted = UsefulFeatures.getObjectTobePosted(data)

        try{
            const response = await axios.post("https://65bbaeb852189914b5bcdd06.mockapi.io/tweeter/tweets", objectTobePosted);
            console.log(response);
            alert("Donées envoyés avec succès");
        }catch(error){
            alert("Une erreur s'est produit")
        }
    }

    const inputValue = watch("tweet")

    console.log(inputValue.length);

    const buttonState = UsefulFeatures.disableSubmitButton(inputValue)

    console.log(buttonState.state);

    console.log(buttonState.style);

    const validations = UsefulFeatures.validations()



  // const user = useContext(UserContext);

  // const currentUser = UsefulFeatures.findUser(user.userName)

  // const handlePostInput = (e) => {
  //   e.preventDefault()
  //   UsefulFeatures.addNewTweet(tweetMessage, currentUser)
  //   setTweetMessage("")
  // }

    return (
        <form className='tweet-editor-form' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="What's happening ?" className='tweet-editor-input'
            name="tweet"
            {
                ...register("tweet",validations)
            }
            />
            {
                (errors.tweet && inputValue.length > 0) ?(
                    <ErrorMessage message={errors.tweet.message}/>
                ):""
                // errors.tweet &&(
                //     <ErrorMessage message={errors.tweet.message}/>
                // )
            }
            {/* <textarea type="text" placeholder="What's happening ?" className='tweet-editor-input'
            value={tweetMessage}
            onChange={
                (e) => setTweetMessage(e.target.value)
            }>
            </textarea> */}

            <div className='tweet-editor-buttons'>
                <div className='tweet-editor-actions'>
                    <TweetEditorButtons/>
                </div>
                <button className='button' type="submit" style={buttonState.style} disabled={buttonState.state}>Tweet</button>
            </div>
        </form>
  );
}

export default TweetForm;