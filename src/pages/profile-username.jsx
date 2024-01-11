import ProfileComponent from "../components/profile-component/profileComponent";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import UserModel from "../models/userModel";
import { useContext } from "react";

function ProfileUsername({imageUrl,children}) { 

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
    <>

        <ProfileComponent profileName={currentUser.profileName} bannerProfile={currentUser.bannerProfile} avatar={currentUser.profile} username={currentUser.username} />
        
    </> 
  );
}

export default ProfileUsername;