import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <Home />
    </Layout>

    // <Router>
    //   <Routes>
    //     <Route path={"/"} element={<Layout><Home /></Layout>} />

    //     {/* <Route path={"/providerList"} element={<ProviderListPage/>} />

    //     <Route exact path={"/ownerList"} element={<OwnerListPage/>} />

    //     <Route exact path={"/companyDetails"} element={<CompanyDetailsPage/>} /> */}

    //   </Routes>
    // </Router>
  );
}
