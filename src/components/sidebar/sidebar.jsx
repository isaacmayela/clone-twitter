import "./sidebar.css"
import { sidebarNavigationElements } from "./navigation-elements";
import SidebarItem from "../sidebar-item/sidebar-item";
import { NavLink, Link } from "react-router-dom";
import twitterLogo from "../../images/Twitter.png"
import bradleyLogo from "../../images/profile-photo.png"
import moreIcon from "../../images/More-2.png"
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import UserModel from "../../models/userModel";

function Sidebar() {

    const user = useContext(UserContext);
    const navigate = useNavigate();

    const users = UserModel.getUsers()

    if (!user.isLogged) {
        navigate("/")
    }

    function findUser(username) {
        const user = users.find((user) => user.username === username );
        return user
    }

    const currentUser = findUser(user.userName)

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
           </div>

            <div className="profile-container">
                <div className="profile-container">
                    <Link to="/profile">
                        <img src={currentUser.bannerProfile} alt="profile" className="profile-photo"/>
                    </Link>
                    <div className="profile">
                        <div className="editor">
                            <h6>Bradley Ortiz</h6>
                            <img src="src/images/Private.png" alt="" className="private"/>
                        </div>
                        <p>Bradley...</p>
                    </div>
                </div>
                <img src={moreIcon} alt="more icon" className="more-icon"/>
            </div>
        </div>
    );
  }
  
  export default Sidebar;