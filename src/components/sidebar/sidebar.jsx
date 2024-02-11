import "./sidebar.css"
import { sidebarNavigationElements } from "./navigation-elements";
import SidebarItem from "../sidebar-item/sidebar-item";
import { NavLink, Link } from "react-router-dom";
import twitterLogo from "../../images/Twitter.png"
import moreIcon from "../../images/More-2.png"
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Authentication from "../../authentication/authentication";
import UsefulFeatures from "../../utils/utils";

function Sidebar() {

    // const user = useContext(UserContext);

    const { currentUser, setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogoutSubmit = () =>{
        Authentication.logout(navigate, currentUser, setCurrentUser)        
    }

    const user = UsefulFeatures.findUser(currentUser.username)

    return (
        <div className="sidebar">

           <div>
            <Link to="/home">
                <img src={twitterLogo} alt="twitter logo" />
            </Link>          

                {
                    sidebarNavigationElements.map((element) =>(
                        <SidebarItem icon={element.navIcon} description={element.navText} key={element.id} destination={element.destination}/>
                    ))
                }

                <div className="button-container">
                    <a href="#" className="tweet-button">Tweet</a>
                </div>

                <div className="button-container">
                    <a href="#" className="tweet-button color-green" onClick={handleLogoutSubmit}>Logout</a>
                </div>

           </div>

            <div className="profile-container">
                <div className="profile-container">
                    <Link to="/profile">
                        <img src={user.profile} alt="profile" className="profile-photo"/>
                    </Link>
                    <div className="profile">
                        <div className="editor">
                            <h6>{user.profileName}</h6>
                            <img src="src/images/Private.png" alt="" className="private"/>
                        </div>
                        <p>{user.username}</p>
                    </div>
                </div>
                <img src={moreIcon} alt="more icon" className="more-icon"/>
            </div>
        </div>
    );
  }
  
  export default Sidebar;