function SidebarItem({icon, description, destination}) {
    return (
      <>
        <div className="sidebar-item">
            <a href={destination}>
                <img src={icon} alt="icon" />
                <p>{description}</p>
            </a>
        </div>
      </>
    );
  }
  
  export default SidebarItem;