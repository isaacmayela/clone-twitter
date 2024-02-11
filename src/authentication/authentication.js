// import GetPostLocalStorageDatas from "../storage/localStorage";
import UserModel from "../models/userModel";
import { updateCurrentUser } from "../requests/requests";

class Authentication{

    // Old

    // static login(username, password, navigate) {

    //     const localStorageDatas = GetPostLocalStorageDatas.getData()

    //     const users = UserModel.getUsers();

    //     const hisUsername = users.find((user) => user.username === username );
    //     const hisPassword = users.find((user) => user.password === password );

    //     if (!localStorageDatas.currentUser.isLogged) {
    //         if (hisUsername && (hisUsername === hisPassword)){

    //             localStorageDatas.currentUser.username = username
    //             localStorageDatas.currentUser.password = password
    //             localStorageDatas.currentUser.isLogged = true

    //             GetPostLocalStorageDatas.postData(localStorageDatas)

    //             navigate('/home');
    //         }
    //     }

    //     // if (localStorageDatas.currentUser.isLogged === true) {
    //     //     navigate('/home');
    //     // }
    
    // }

    // static logout(navigate) {

    //     const localStorageDatas = GetPostLocalStorageDatas.getData()

    //     localStorageDatas.currentUser.username = ""
    //     localStorageDatas.currentUser.password = ""
    //     localStorageDatas.currentUser.isLogged = false

    //     GetPostLocalStorageDatas.postData(localStorageDatas)

    //     navigate('/');

    // }

    // static navigateHome(navigate){
    //     const localStorageDatas = GetPostLocalStorageDatas.getData()
    //     if (localStorageDatas.currentUser.isLogged === true) {
    //         navigate('/home');
    //     }
    // }




    // New

    static logout(navigate, currentUser, setCurrentUser) {
        const current = {username:"", isLogged:false};
        updateCurrentUser(current, currentUser, setCurrentUser);
        navigate('/');
    }

    static navigation(isLogged,navigate){
        if (isLogged) {
            navigate('/home');
        }else if (!isLogged) {
            navigate('/'); 
        }
    }

    static useAuthenticated(username, password, navigate, currentUser, setCurrentUser ){
        const users = UserModel.getUsers();

        const hisUsername = users.find((user) => user.username === username );
        const hisPassword = users.find((user) => user.password === password );

        if (hisUsername && (hisUsername === hisPassword)){

            const current = {username:username, isLogged:true}

            updateCurrentUser(current, currentUser, setCurrentUser)
            setCurrentUser(current)
            navigate('/home');

        }
    }

}

export default Authentication