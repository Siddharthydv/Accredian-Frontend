import axios from "axios";
import { useNavigate } from "react-router-dom";

 const API_URL = import.meta.env.VITE_BACKEND_URL;

export default function Modal({ setIsOpen }: { setIsOpen: (val: boolean) => void }) {
  const navigate=useNavigate();
  const registerReferral = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("Form submitted:", data);
    // Call API to register referral
    try{
      const res=await axios.post(`${API_URL}/referral/createReferral`,{refereeName:data.friendName, refereeEmail:data.friendEmail, courseInterested:data.course},{withCredentials:true})
      setIsOpen(false);
    }catch(error)
    {
      alert(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Refer a Friend</h2>

        <form onSubmit={registerReferral}>
          <label className="block mb-2">
            <span className="text-gray-700">Your Email</span>
            <input type="email" name="yourEmail" className="w-full p-2 border rounded-md text-black" required />
          </label>

          <label className="block mb-2">
            <span className="text-gray-700">Friend's Email</span>
            <input type="email" name="friendEmail" className="w-full p-2 border rounded-md text-black" required />
          </label>

          <label className="block mb-2">
            <span className="text-gray-700">Friend's Name</span>
            <input type="text" name="friendName" className="w-full p-2 border rounded-md text-black" required />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Select Course</span>
            <select name="course" className="w-full p-2 border rounded-md text-black">
              <option>Web Development</option>
              <option>Data Science</option>
              <option>Machine Learning</option>
              <option>Cyber Security</option>
            </select>
          </label>

          <div className="flex justify-end space-x-3">
            <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gray-300 rounded-md">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
              Submit Referral
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
