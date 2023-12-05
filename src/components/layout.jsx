import React from 'react';
import Sidebar from './sidebar/sidebar';
import Trends from './trends/trends';

function Layout({children}) {
    return (
        <>
            <Sidebar />
            
            {children}

            <Trends />
    
        </>
    );
}

export default Layout;