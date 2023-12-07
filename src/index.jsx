// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



// import Home from "./pages/home.jsx";
// import Layout from "./components/layout.jsx";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import('./style/reset.css');
// import('./style/App.css');

// export default function App() {
//   return (
//     <Layout>
//       <Home />
//     </Layout>

//     // <Router>
//     //   <Routes>
//     //     <Route path={"/"} element={<Layout><Home /></Layout>} />

//     //     {/* <Route path={"/providerList"} element={<ProviderListPage/>} />

//     //     <Route exact path={"/ownerList"} element={<OwnerListPage/>} />

//     //     <Route exact path={"/companyDetails"} element={<CompanyDetailsPage/>} /> */}

//     //   </Routes>
//     // </Router>
//   );
// }

import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import('./style/reset.css');
import('./style/App.css');

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ]
  },
  // {
  //   path: "/explore",
  //   element: <Explore/>,
  // },
  // {
  //   path: "/notification",
  //   element: <NotiFication/>,
  // },
  // {
  //   path: "/messages",
  //   element: <Messages/>,
  // },
  // {
  //   path: "/bookmarks",
  //   element: <BookMarks/>,
  // },
  // {
  //   path: "/lists",
  //   element: <Lists/>,
  // },
  // {
  //   path: "/profile",
  //   element: <Profile/>,
  // },
  // {
  //   path: "/more",
  //   element: <More/>,
  // }
  
 ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
