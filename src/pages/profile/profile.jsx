import React from 'react';
import "./profile.css"
import { Outlet } from 'react-router-dom';

function Profile() {

    
  return (
    <main className="timeline">

      <Outlet />

    </main>
  );
}

export default Profile;