import "./chanels.css"
import ProfileService from "../../useFetch";
import { Link } from "react-router-dom";

function Chanels() {

    const data = ProfileService.getProfile()

    const dataSlice = data.slice(0,3)

    return (
      <>
        <div className="trends-container">
           <div className="trends-title">
            <h3>Who to follow</h3>
           </div>

            <div className="chanels-list">
                <ul>
                    {
                        dataSlice.map((element) =>(
                            <li key={element.id}>
                                <div className="chanel-profile">
                                    <Link to={`/profile/${element.profileUsername}`}>
                                        <img src={element.tweetAvatarUrl} alt="profile" />
                                    </Link>
                                    <div className="username">
                                        <div className="editor">
                                            <h6>{element.profileName}</h6>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.75 9.41667C17.75 8.1 17.0208 6.95833 15.96 6.41667C16.0883 6.05417 16.1583 5.6625 16.1583 5.25C16.1583 3.40833 14.7333 1.91833 12.9767 1.91833C12.585 1.91833 12.21 1.98833 11.8633 2.12667C11.3483 1.0125 10.2583 0.25 9.00001 0.25C7.74168 0.25 6.65334 1.01417 6.13584 2.125C5.79001 1.9875 5.41418 1.91667 5.02251 1.91667C3.26418 1.91667 1.84084 3.40833 1.84084 5.25C1.84084 5.66167 1.91001 6.05333 2.03834 6.41667C0.978343 6.95833 0.249176 8.09833 0.249176 9.41667C0.249176 10.6625 0.900843 11.7483 1.86751 12.3217C1.85084 12.4633 1.84084 12.605 1.84084 12.75C1.84084 14.5917 3.26418 16.0833 5.02251 16.0833C5.41418 16.0833 5.78918 16.0117 6.13501 15.875C6.65168 16.9867 7.74001 17.75 8.99918 17.75C10.2592 17.75 11.3475 16.9867 11.8633 15.875C12.2092 16.0108 12.5842 16.0817 12.9767 16.0817C14.735 16.0817 16.1583 14.59 16.1583 12.7483C16.1583 12.6033 16.1483 12.4617 16.1308 12.3208C17.0958 11.7483 17.75 10.6625 17.75 9.4175V9.41667ZM12.2367 6.63833L8.62501 12.055C8.50418 12.2358 8.30668 12.3333 8.10418 12.3333C7.98501 12.3333 7.86418 12.3 7.75751 12.2283L7.66168 12.15L5.64918 10.1375C5.40501 9.89333 5.40501 9.4975 5.64918 9.25417C5.89334 9.01083 6.28918 9.00917 6.53251 9.25417L8.00751 10.7267L11.195 5.94333C11.3867 5.65583 11.775 5.58 12.0617 5.77083C12.35 5.9625 12.4283 6.35083 12.2367 6.6375V6.63833Z" fill="#D9D9D9"/>
                                            </svg>
                                        </div>
                                        <p>{element.chanelUsername}</p>
                                    </div>
                                </div>
                                <a href="#" className="follow-button">Follow</a>
                            </li>
                        ))
                    }
                </ul>
                
            </div>

            <a href="#" className="see-more-button">Show more</a>

        </div>
      </>
    );
  }
  
  export default Chanels;