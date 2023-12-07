import { NavLink } from "react-router-dom";


function SidebarItem({icon, description, destination}) {
    return (
      <>
        <div className="sidebar-item">
            <NavLink to ={destination}>
                <img src={icon} alt="icon" />
                <p>{description}</p>
            </NavLink>
        </div>
      </>
    );
  }
  
  export default SidebarItem;