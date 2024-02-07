import axios from "axios";

class GetPostLocalStorageDatas{
    static getData() {
        const datas = localStorage.getItem("tweeterLocalStorage")
        if (datas){
            const parseDatas = JSON.parse(datas);
            return parseDatas
        }
        return null
    }

    static postData(data) {
        const json = JSON.stringify(data);
        localStorage.setItem("tweeterLocalStorage", json);
    }

    static async getTweets(){
        try{
            const response = await axios.get("https://65bbaeb852189914b5bcdd06.mockapi.io/tweeter/tweets")
            return response.data
        }
        catch(error){
            console.log(error);
            return error
        }
    }

}

export default GetPostLocalStorageDatas
