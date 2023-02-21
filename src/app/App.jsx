import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Tournaments from "./pages/Tournaments/Tournaments";
import Admin from "./pages/Admin/Admin";
import Layout from "./Layout";
import SingleTournament from "./pages/SingleTournament/SingleTournament";

import "./css/reset.css";
import "./css/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/tournaments/:id" element={<SingleTournament />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
