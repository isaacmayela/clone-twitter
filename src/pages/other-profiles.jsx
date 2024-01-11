import { useParams } from 'react-router-dom';
import ProfileService from '../useFetch';
import ProfileComponent from '../components/profile-component/profileComponent';
import UserModel from '../models/userModel';

function OtherProfiles({imageUrl,children}) {

  const {username} = useParams();

  const data = UserModel.getUsers();

  const profile = data.find((profile) => profile.username === username )

  return (
    <>
        <ProfileComponent profileName={profile.profileName} bannerProfile={profile.bannerProfile} avatar={profile.profile} username={profile.username} />        
    </> 
  );
}

export default OtherProfiles;