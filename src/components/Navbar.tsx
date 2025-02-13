import axios from "axios";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_BACKEND_URL;

export default function Navbar() {
  const {user,clearData,setData}=useAuth();
  const navigate=useNavigate();
  const logoutHandler=async()=>{
    clearData();
    const res=await axios.get(`${API_URL}/user/logout`,{withCredentials:true})
    console.log(res.data)
  }

  const guestLogin=async ()=>{
      const res=await axios.post(`${API_URL}/user/signin/guest`,{},{withCredentials:true})
      console.log(res.data)
      setData(res.data.user)
      navigate('/')
  }
    return (
      <nav className="bg-black text-white py-4 h">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h2 className="text-xl font-bold">ReferralRewards</h2>
          <ul className="flex space-x-6 text-gray-300">
            {/* <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#howItWorks" className="hover:text-white">How It Works</a></li>
            <li><a href="#benefits" className="hover:text-white">Benefits</a></li>
            <li><a href="#rewards" className="hover:text-white">Rewards</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li> */}
            {!user && <li><a href="/login" className="hover:text-white">Login</a></li>}
            {!user && <li><button onClick={guestLogin} className="hover:text-white">GuestLogin</button></li>}
            {user && <li><button onClick={logoutHandler} className="hover:text-white">Logout</button></li>}
            {!user && <li><a href="/signup" className="hover:text-white">Signup</a></li>}
            <li><a href="/referrals" className="hover:text-white">Referrals</a></li>
          </ul>
        </div>
      </nav>
    );
  }