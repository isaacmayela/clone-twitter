import GetPostLocalStorageDatas from "../storage/localStorage";
import UserModel from "../models/userModel";

class Authentication{
    static login(username, password, navigate) {

        const localStorageDatas = GetPostLocalStorageDatas.getData()

        const users = UserModel.getUsers();

        const hisUsername = users.find((user) => user.username === username );
        const hisPassword = users.find((user) => user.password === password );

        if (!localStorageDatas.currentUser.isLogged) {
            if (hisUsername && (hisUsername === hisPassword)){

                localStorageDatas.currentUser.username = username
                localStorageDatas.currentUser.password = password
                localStorageDatas.currentUser.isLogged = true

                GetPostLocalStorageDatas.postData(localStorageDatas)

                navigate('/home');
            }
        }

        if (localStorageDatas.currentUser.isLogged === true) {
            navigate('/home');
        }
    
    }

    static logout(navigate) {

        const localStorageDatas = GetPostLocalStorageDatas.getData()

        localStorageDatas.currentUser.username = ""
        localStorageDatas.currentUser.password = ""
        localStorageDatas.currentUser.isLogged = false

        GetPostLocalStorageDatas.postData(localStorageDatas)

        navigate('/');

    }
}

export default Authentication