import React from 'react';
import Sidebar from './sidebar/sidebar';
import Trends from './trends/trends';
import { Outlet } from 'react-router-dom';
import UserContext from '../context/UserContext';
import GetPostDatas from '../storage/localStorage';


function Layout({children}) {

    const newLocalStorageDatas = GetPostDatas.getData();

    const currentUser = newLocalStorageDatas.currentUser;

    return (
        <UserContext.Provider value={{ isLogged: currentUser.isLogged, userName: currentUser.username }} >
            <>
                <Sidebar />
                
                <Outlet />

                <Trends />
        
            </>
        </UserContext.Provider>
    );
}

export default Layout;