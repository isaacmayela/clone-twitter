import "./sidebar.css"
import { sidebarNavigationElements } from "./navigation-elements";
import SidebarItem from "../sidebar-item/sidebar-item";
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">

           <div>
            <a href="/">
                    <img src="src/images/Twitter.png" alt="twitter logo" />
                </a>          

                {
                    sidebarNavigationElements.map((element) =>(
                        <SidebarItem icon={element.navIcon} description={element.navText} key={element.id}/>
                    ))
                }

                <div className="button-container">
                    <a href="#" className="tweet-button">Tweet</a>
                </div>
           </div>

            <div className="profile-container">
                <div className="profile-container">
                    <img src="src/images/profile-photo.png" alt="profile" className="profile-photo"/>
                    <div className="profile">
                        <div className="editor">
                            <h6>Bradley Ortiz</h6>
                            <img src="src/images/Private.png" alt="" className="private"/>
                        </div>
                        <p>Bradley...</p>
                    </div>
                </div>
                <img src="src/images/More-2.png" alt="more icon" className="more-icon"/>
            </div>
        </div>
    );
  }
  
  export default Sidebar;