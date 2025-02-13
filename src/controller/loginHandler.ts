import axios from "axios";
import { FormEvent } from "react";
const API_URL = import.meta.env.VITE_BACKEND_URL; // For Vite



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
}

export default LoginHandler;