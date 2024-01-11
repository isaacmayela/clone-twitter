import React from 'react';
import Sidebar from './sidebar/sidebar';
import Trends from './trends/trends';
import { Outlet } from 'react-router-dom';

function Layout({children}) {

    return (
        <>
            <Sidebar />
            
            <Outlet />

            <Trends />
    
        </>
    );
}

export default Layout;