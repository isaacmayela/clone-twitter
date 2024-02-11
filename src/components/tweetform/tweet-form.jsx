import { useState, useContext, useEffect, useRef } from "react";
import TweetEditorButtons from "../tweet-editor-buttons/tweet-editor-buttons";
import { useForm } from "react-hook-form";
import ErrorMessage from "../erromessage/error-message";
import UsefulFeatures from "../../utils/utils";
import TweetContext from "../../context/tweet-context";
import { postData } from "../../requests/requests";
import UserContext from "../../context/UserContext";


function TweetForm() {

    const{ tweetArray, setTweetArray } = useContext(TweetContext)

    const{ currentUser, setCurrentUser } = useContext(UserContext)

    const [formData, setFormData] = useState({
        tweet: ""
    })

    const {register, handleSubmit, watch, formState:{errors}, reset} = useForm({defaultValues: formData, mode: 'onChange'});

    const onSubmit = async (data) =>{

        postData(data, tweetArray, setTweetArray, currentUser.username)

        reset();
    }

    const inputValue = watch("tweet")

    const buttonState = UsefulFeatures.disableSubmitButton(inputValue)

    const validations = UsefulFeatures.validations()


    return (
        <form className='tweet-editor-form' onSubmit={handleSubmit(onSubmit)}>
            
            <textarea type="text" placeholder="What's happening ?" className='tweet-editor-input' name="tweet"
            style={{ resize: 'none'}}
            {
                ...register("tweet",validations)
            }>
            </textarea>

            {
                (errors.tweet && inputValue.length > 0) ?(
                    <ErrorMessage message={errors.tweet.message}/>
                ):""
            }

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