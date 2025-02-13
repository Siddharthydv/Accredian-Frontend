import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/SignUpPage";
import ReferralPage from "./pages/ReferralPage";

 function App() {
  return ( <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/referrals" element={<ReferralPage/>} />
    </Routes>
  </Router>
  );
}


export default App;
