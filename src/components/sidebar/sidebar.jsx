import "./sidebar.css"
import { sidebarNavigationElements } from "./navigation-elements";
import SidebarItem from "../sidebar-item/sidebar-item";
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            {/* <NavLink to={"/"}> */}
            <img src="src/images/Twitter.png" alt="twitter logo" />
            {/* </NavLink> */}
            

            {
            sidebarNavigationElements.map((element) =>(
                <SidebarItem icon={element.navIcon} description={element.navText}/>
            ))
        }
        </div>
    );
  }
  
  export default Sidebar;