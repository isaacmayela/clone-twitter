// import { userTweetInformations } from '../../useFetch';
// import { userTweetInformations } from '../useFetch';
import { useParams } from 'react-router-dom';
import ProfileService from '../useFetch';
import tweetAvatarUrl from "../images/image1.png"
import paysages from "../images/paysages2.jpeg"
import ProfileComponent from '../components/profile-component/profileComponent';

function OtherProfiles({imageUrl,children}) {

    const {username} = useParams();

    

    const data = ProfileService.getProfile();

    const profile = data.find((profile) => profile.profileUsername === username )

  return (
    <>

        <ProfileComponent profileName={profile.profileName} bannerProfile={profile.bannerProfile} avatar={profile.tweetAvatarUrl} username={profile.profileUsername} />
        
    </> 
  );
}

export default OtherProfiles;