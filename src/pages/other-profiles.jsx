import { useParams } from 'react-router-dom';
import ProfileComponent from '../components/profile-component/profileComponent';
import UserModel from '../models/userModel';
import Tweets from '../components/tweets/tweets';

function OtherProfiles({imageUrl,children}) {

  const {username} = useParams();

  const data = UserModel.getUsers();
  // console.log(data);

  const profile = data.find((profile) => profile.username === username )
  // console.log(profile);

  return (
    <>
      <ProfileComponent profileName={profile.profileName} bannerProfile={profile.bannerProfile} avatar={profile.profile} username={profile.username} />
      <Tweets username={null}/>      
    </> 
  );
}

export default OtherProfiles;