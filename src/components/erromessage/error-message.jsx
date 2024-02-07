import "./error-message.css"

function ErrorMessage({message}) {

    return (
        <div className='error-container'>
            <p>{message}</p>
        </div>
  );
}

export default ErrorMessage;