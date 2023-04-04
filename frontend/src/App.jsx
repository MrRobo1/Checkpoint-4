import { Routes, Route } from "react-router-dom";

import { useAuthContext } from "./contexts/authContext";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Navbar from "./components/Navbar.jsx";
import NavbarDesk from "./components/NavbarDesk.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Kingdoms from "./pages/Kingdoms";
import KingdomAsset from "./pages/KingdomAsset.jsx";
import CreateKingdom from "./pages/CreateKingdom";
import Footer from "./components/Footer.jsx";

function App() {

  const { user } = useAuthContext();

  return (
    <>
      <Header />
      <NavbarDesk />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/kingdoms" element={<Kingdoms />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/kingdom/asset" element={<KingdomAsset />} />
          <Route path="/kingdom/create" element={<CreateKingdom />} />
        </Route>
      </Routes>
      <Navbar />
      <Footer />
    </>
      )
}

export default App;
