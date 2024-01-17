import cnnBanner from "../images/paysages2.jpeg"
import cnnLogo from "../images/image1.png"
import nytBanner from "../images/paysages3.jpeg"
import nytLogo from "../images/image11.png"
import noProfileLogo from "../images/image12.png"
import twitter1Banner from "../images/paysages4.jpeg"
import twitter2Banner from "../images/paysages5.jpeg"
import twitter3Banner from "../images/paysages6.jpeg"
import bradleyProfile from "../images/profile-photo.png"
import bradleyBanner from "../images/paysages.jpg"

class UserModel {
    static getUsers() {
        const userInformations = [
            {
                id:"1",
                profileName:'CNN',
                username: "@CNN",
                password: "1234",
                profile:`${cnnLogo}`,
                bannerProfile: `${cnnBanner}`,
                isCertified: true
            },
            {
                id:"2",
                profileName:'The New York Times',
                username: "@nytimes",
                password: "5236",
                profile:`${nytLogo}`,
                bannerProfile: `${nytBanner}`,
                isCertified: true
            },
            {
                id:"3",
                profileName:'Twitter',
                username: "@Twitter1",
                password: "7896",
                profile:`${noProfileLogo}`,
                bannerProfile: `${twitter1Banner}`,
                isCertified: false
            },
            {
                id:"4",
                profileName:'Twitter',
                username: "@Twitter2",
                password: "5698",
                profile:`${noProfileLogo}`,
                bannerProfile: `${twitter2Banner}`,
                isCertified: false
            },
            {
                id:"5",
                profileName:'Twitter',
                username: "@Twitter3",
                password: "2589",
                profile:`${noProfileLogo}`,
                bannerProfile: `${twitter3Banner}`,
                isCertified: true
            },
            {
                id:"6",
                profileName:'Bradley Ortiz',
                username: "@Bradley",
                password: "0258",
                profile:`${bradleyProfile}`,
                bannerProfile: `${bradleyBanner}`,
                isCertified: true
            }
        ]
        return userInformations;
    }
 }

export default UserModel



// export { userTweetInformations }