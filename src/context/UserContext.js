import { createContext } from "react";

const UserContext = createContext({
    userName: null,
    isLogged: false
});

export default UserContext;