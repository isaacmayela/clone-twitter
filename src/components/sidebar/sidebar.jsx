import "./sidebar.css"
import { sidebarNavigationElements } from "./navigation-elements";
import SidebarItem from "../sidebar-item/sidebar-item";
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
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
    );
  }
  
  export default Sidebar;