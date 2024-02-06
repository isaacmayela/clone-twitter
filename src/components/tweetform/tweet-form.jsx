import { useState } from "react";
import TweetEditorButtons from "../tweet-editor-buttons/tweet-editor-buttons";
import { useForm } from "react-hook-form";
import ErrorMessage from "../erromessage/error-message";

function TweetForm() {

    const [formData, setFormData] = useState({
        tweet: ""
    })

    const {register, handleSubmit, formState:{errors}} = useForm({defaultValues: formData})

    const onSubmit = (data) =>{
        
    }

    const [tweetMessage, setTweetMessage] = useState("");

  // const user = useContext(UserContext);

  // const currentUser = UsefulFeatures.findUser(user.userName)

  // const handlePostInput = (e) => {
  //   e.preventDefault()
  //   UsefulFeatures.addNewTweet(tweetMessage, currentUser)
  //   setTweetMessage("")
  // }

    return (
        <form className='tweet-editor-form'>
            <input type="text" placeholder="What's happening ?" className='tweet-editor-input'
            value={tweetMessage}
            onChange={
                (e) => setTweetMessage(e.target.value)
            }
            />
            {/* <textarea type="text" placeholder="What's happening ?" className='tweet-editor-input'
            value={tweetMessage}
            onChange={
                (e) => setTweetMessage(e.target.value)
            }>
            </textarea> */}

            <div>My paragraph</div>

            <ErrorMessage/>

            <div className='tweet-editor-buttons'>
                <div className='tweet-editor-actions'>
                    <TweetEditorButtons/>
                </div>
                <button className='button' type="submit">Tweet</button>
            </div>
        </form>
  );
}

export default TweetForm;