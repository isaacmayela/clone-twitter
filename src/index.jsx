// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import Layout from './components/layout';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './pages/home';
// import Profile from './pages/profile/profile';
// import ProfileUsername from './pages/profile-username';
// import OtherProfiles from './pages/other-profiles';
// import Login from './pages/login';
// import('./style/reset.css');
// import('./style/App.css');

// let router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },

//       {
//         path: "/profile",
//         element: <Profile />,
//         children: [
//           {
//             path: "",
//             element: <ProfileUsername />,
//           },
//           {
//             path: ":username",
//             element: <OtherProfiles />,
//           },
//         ],
//       },

//     ]
//   },
  
//  ]);
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// );


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

