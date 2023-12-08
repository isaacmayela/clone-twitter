import homeImage from "../../images/Home-Fill.png"
import exploreImage from "../../images/Explore.png"
import notificationsImage from "../../images/Notifications.png"
import messageImage from "../../images/Messages.png"
import bookmarksImage from "../../images/Bookmarks.png"
import listsImage from "../../images/Lists.png" 
import profileImage from "../../images/profile.png"
import moreImage from "../../images/More.png"

// src/images/Home-Fill.png



const sidebarNavigationElements = [
    {
        id:1,
        navIcon: `${homeImage}`,
        navText: "Home",
        destination: "/",
    },
    {
        id:2,
        navIcon: `${exploreImage}`,
        navText: "Explore",
        destination: "",
    },
    {
        id:3,
        navIcon: `${notificationsImage}`,
        navText: "Navigations",
        destination: "",
    },
    {
        id:4,
        navIcon: `${messageImage}`,
        navText: "Messages",
        destination: "",
    },
    {
        id:5,
        navIcon: `${bookmarksImage}`,
        navText: "Booksmarks",
        destination: "",
    },
    {
        id:6,
        navIcon: `${listsImage}`,
        navText: "Lists",
        destination: "",
    },
    {
        id:7,
        navIcon: `${profileImage}`,
        navText: "Profile",
        destination: "/profile",
    },
    {
        id:8,
        navIcon: `${moreImage}`,
        navText: "More",
        destination: "",
    }
]


export { sidebarNavigationElements }