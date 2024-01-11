function TweetEditorButton({buttonIcon, altText}) {

    return (
      <>
          <button>
              <img src={buttonIcon} alt={altText}/>
          </button>
      </>
    );
  }
  
  export default TweetEditorButton;