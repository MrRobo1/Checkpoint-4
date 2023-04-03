import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Kingdoms from "./pages/Kingdoms";
import KingdomAsset from "./pages/KingdomAsset.jsx";

function App() {

  const { user } = useAuthContext();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/kingdoms" element={<Kingdoms />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/kingdom/asset" element={<KingdomAsset />} />
        </Route>
      </Routes>
      <Navbar />
    </>
      )
}

export default App;
