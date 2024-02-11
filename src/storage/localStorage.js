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
}

export default GetPostLocalStorageDatas
