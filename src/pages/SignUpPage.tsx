import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_BACKEND_URL;

export default function Signup() {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    try{
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log({ fullName, email, password }); // Process the form data]
    const res=await axios.post(`${API_URL}/user/signup`,{name:fullName,email:email,password:password})
    console.log(res.data)
    navigate('/')
    }catch(error){
      alert(error)
    }

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
      <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Create an Account</h2>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            <span className="text-gray-700">Full Name</span>
            <input type="text" name="fullName" placeholder="John Doe" className="w-full p-2 border rounded-md text-black" />
          </label>

          <label className="block mb-2">
            <span className="text-gray-700">Email</span>
            <input type="email" name="email" placeholder="john@example.com" className="w-full p-2 border rounded-md text-black" />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Password</span>
            <input type="password" name="password" placeholder="••••••••" className="w-full p-2 border rounded-md text-black" />
          </label>

          <button type="submit" className="w-full p-2 bg-green-600 rounded-md">Sign Up</button>
        </form>

        <p className="text-center text-gray-400 mt-4">
          Already have an account? <Link to="/login" className="text-blue-400">Login</Link>
        </p>
      </div>
    </div>
  );
}
