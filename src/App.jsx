import {BrowserRouter, Routes, Route, Link, NavLink, Outlet, useParams} from 'react-router-dom';
import { useState } from 'react';
import UserContext from './context/UserContext';
import Layout from './components/layout';
import Home from './pages/home';
import Profile from './pages/profile/profile';
import ProfileUsername from './pages/profile-username';
import OtherProfiles from './pages/other-profiles';
import Login from './pages/login';
import('./style/reset.css');
import('./style/App.css');
import GetPostLocalStorageDatas from './storage/localStorage';
import jsonDatas from './data/initial-data.json'

function App() {

  const twitterLocalstorage = GetPostLocalStorageDatas.getData()

  if (!twitterLocalstorage){
    const JsonDatasCopy = JSON.parse(JSON.stringify(jsonDatas));
    GetPostLocalStorageDatas.postData(JsonDatasCopy);
  }

  return (
    <BrowserRouter>
        <Routes>             
            <Route path="/" element={<Login />} />
            <Route path="/" element={<Layout />}>
              <Route path='/home' element={<Home/>} />
              <Route path='/profile' element={<Profile/>}>
                  <Route path='' element={<ProfileUsername/>} />
                  <Route path=':username' element={<OtherProfiles/>} />
              </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
