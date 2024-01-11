import media from "../../images/Media.png"
import gif from "../../images/Gif.png"
import poll from "../../images/Poll.png"
import group from "../../images/Group.png"
import schedule from "../../images/Schedule.png"
import TweetEditorButton from "../tweet-editor-button/tweet-editor-button"


function TweetEditorButtons() {

  const buttonInformations = [
    {
      icon: media,
      altText: "Media image"
    },
    {
      icon: gif,
      altText: "Gif image"
    },
    {
      icon: poll,
      altText: "Poll image"
    },
    {
      icon: group,
      altText: "Group image"
    },
    {
      icon: schedule,
      altText: "Schedule image"
    }
  ]

  return (
    <>
      {
        buttonInformations.map((button) =>(
          <TweetEditorButton buttonIcon={button.icon} altText={button.altText}/>
        ))
      }
    </>
  );
}

export default TweetEditorButtons;