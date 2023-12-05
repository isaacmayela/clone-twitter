import "./sidebar.css"
import { sidebarNavigationElements } from "./navigation-elements";
import SidebarItem from "../sidebar-item/sidebar-item";

function Sidebar() {
    return (
      <>
        <div className="sidebar">
            <img src="src/images/Twitter.png" alt="twitter logo" />
        </div>

        {
            sidebarNavigationElements.map((element) =>(
                <SidebarItem icon={element.navIcon} description={element.navText}/>
            ))
        }

      </>
    );
  }
  
  export default Sidebar;