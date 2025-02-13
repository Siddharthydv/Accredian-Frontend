// import LoginHandler from "../controller/loginHandler";
import { useAuth } from "../AuthContext";
import axios from "axios";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_BACKEND_URL;
export default function LoginPage() {
  const {setData}=useAuth();
  const navigate=useNavigate();

  async function LoginHandler(event: FormEvent<HTMLFormElement>) {

    event.preventDefault(); // Prevent page reload
  
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    console.log("Email:", email);
    const res=await axios.post(`${API_URL}/user/signin`,{
      email:email,
      password:password
    },{withCredentials:true})
    console.log(res.data)
    setData(res.data.user)
    navigate('/')

  }
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
  
          <form className="space-y-4" onSubmit={LoginHandler}>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border rounded-md text-black"
                placeholder="Enter your email"
              />
            </div>
  
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                className="w-full p-2 border rounded-md text-black"
                placeholder="Enter your password"
              />
            </div>
  
            <div className="flex justify-between items-center text-sm text-blue-600">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>
  
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </form>
  
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    );
  }
  
 
  