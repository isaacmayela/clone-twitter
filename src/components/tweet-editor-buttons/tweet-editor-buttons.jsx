import media from "../../images/Media.png"
import gif from "../../images/Gif.png"
import poll from "../../images/Poll.png"
import group from "../../images/Group.png"
import schedule from "../../images/Schedule.png"
import TweetEditorButton from "../tweet-editor-button/tweet-editor-button"


function TweetEditorButtons() {

  const buttonInformations = [
    {
      id: "1",
      icon: media,
      altText: "Media image"
    },
    {
      id: "2",
      icon: gif,
      altText: "Gif image"
    },
    {
      id: "3",
      icon: poll,
      altText: "Poll image"
    },
    {
      id: "4",
      icon: group,
      altText: "Group image"
    },
    {
      id: "5",
      icon: schedule,
      altText: "Schedule image"
    }
  ]

  return (
    <>
      {
        buttonInformations.map((button) =>(
          <TweetEditorButton buttonIcon={button.icon} altText={button.altText} key={button.id}/>
        ))
      }
    </>
  );
}

export default TweetEditorButtons;