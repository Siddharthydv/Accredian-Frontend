import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import axios from "axios";
const API_URL = import.meta.env.VITE_BACKEND_URL;


export default function ReferralPage() {
    const {user}=useAuth();
    const [referrals,setreferrals]=useState<{
        referrerId :number    // Foreign key linking to User table
        refereeName:  String
        refereeEmail :String 
        courseInterested:String
        createdAt :string
    }[] | null>(null);

    useEffect(()=>{
        if(user)
        {
            async function getReferrals(){
            const res=await axios.get(`${API_URL}/referral/getReferrals`,{withCredentials:true})
            console.log(res.data)
            setreferrals(res.data.referrals)
            }
            getReferrals();
            
        }
    },[user])
    
    return (
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Your Referrals</h1>
        {referrals?.[0] ? (
          <ul className="space-y-4">
            {referrals.map((referral, index) => (
              <li key={index} className="p-4 bg-gray-100 rounded-lg shadow">
                <p className="text-lg font-semibold">RefereeName:-{referral.refereeName}</p>
                <p className="text-sm text-gray-600">RefereeEmail:-{referral.refereeEmail}</p>
                <p className={`text-sm font-medium ${referral.courseInterested === 'Accepted' ? 'text-green-500' : 'text-yellow-500'}`}>
                 CourseInterested:- {referral.courseInterested}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No referrals yet.</p>
        )}
      </div>
    );
  }