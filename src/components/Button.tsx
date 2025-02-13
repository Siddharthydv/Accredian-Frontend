import { useState } from "react";
import Modal from "./modal";

function Button({text}:{text:string}){
  const [isOpen, setIsOpen] = useState(false);
    return <>
    <button onClick={() => setIsOpen(true)} className="bg-indigo-600 hover:bg-indigo-700 hover:scale-105 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 active:scale-110 ">
    {text}
    </button>
    {isOpen && <Modal setIsOpen={setIsOpen}/>}
  </> 
}

export default Button;