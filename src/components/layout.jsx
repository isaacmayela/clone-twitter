import React from 'react';
import Sidebar from './sidebar/sidebar';

function Layout({children}) {
    return (
        <>
            <Sidebar />
            <div className="sidebar">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illum possimus officia reprehenderit minus in, est a! Nulla quam quas, sint eius repellat, magni tenetur quo animi quae, minima veritatis.</p>
            </div>
            {children}
            <div className="trends">

            </div>
        </>
    );
}

export default Layout;