// import { userTweetInformations } from '../../useFetch';
import ProfileComponent from "../components/profile-component/profileComponent";

function ProfileUsername({imageUrl,children}) { 
  return (
    <>

        <ProfileComponent profileName={"Bradley Ortiz"} bannerProfile={"src/images/paysages.jpg"} avatar={"src/images/profile-photo.png"} username={"@Bradley..."} />
        
    </> 
  );
}

export default ProfileUsername;