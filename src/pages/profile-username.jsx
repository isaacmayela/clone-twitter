import ProfileComponent from "../components/profile-component/profileComponent";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import UserModel from "../models/userModel";
import { useContext } from "react";
import Tweets from "../components/tweets/tweets";
import UsefulFeatures from "../utils/utils";

function ProfileUsername() { 

  // const user = useContext(UserContext);

  const { currentUser, setCurrentUser } = useContext(UserContext);


  const user = UsefulFeatures.findUser(currentUser.username)

  return (
    <>

        <ProfileComponent profileName={user.profileName} bannerProfile={user.bannerProfile} avatar={user.profile} username={user.username} />
        
        <Tweets username={user.username}/>
    </> 
  );
}

export default ProfileUsername;