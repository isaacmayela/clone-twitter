import ProfileComponent from "../components/profile-component/profileComponent";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import UserModel from "../models/userModel";
import { useContext } from "react";
import Tweets from "../components/tweets/tweets";
import UsefulFeatures from "../utils/utils";

function ProfileUsername() { 

  const user = useContext(UserContext);

  const currentUser = UsefulFeatures.findUser(user.userName)

  return (
    <>

        <ProfileComponent profileName={currentUser.profileName} bannerProfile={currentUser.bannerProfile} avatar={currentUser.profile} username={currentUser.username} />
        
        <Tweets username={user.userName}/>
    </> 
  );
}

export default ProfileUsername;