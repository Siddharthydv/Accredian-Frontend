import Button from "./Button";

export default function Hero(){
    return <> <section className="bg-black text-white py-24 ">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">Share & Earn Rewards</h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Refer your friends and earn exciting rewards with every successful referral. Join
        our community of happy referrers today!
      </p>
      <div className="mt-6">
       <Button text={"Refer Now"}/>
      </div>
    </div>
  </section>
   <section className="relative bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-24">
   {/* Background Circles */}
   <div className="absolute inset-0 overflow-hidden">
     <div className="absolute top-10 left-10 w-72 h-72 bg-purple-900 opacity-20 rounded-full blur-3xl"></div>
     <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-900 opacity-20 rounded-full blur-3xl"></div>
   </div>

   <div className="relative container mx-auto px-6 text-center">
     {/* Heading */}
     <h1 className="text-5xl font-bold leading-tight">
       Share Success, <br />
       <span className="text-indigo-400">Earn Rewards</span>
     </h1>

     {/* Subtext */}
     <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
       Join our referral program and earn exciting rewards for every friend you bring on
       board. The more you share, the more you earn!
     </p>

     {/* Buttons */}
     <div className="mt-6 flex justify-center gap-4">
     <Button text={"Refer Now"}/>
       <button className="text-white flex items-center gap-1 border-b border-transparent hover:border-gray-300 transition">
         Learn More <span className="text-xl">▼</span>
       </button>
     </div>

     {/* Stats */}
     <div className="mt-12 flex flex-col sm:flex-row justify-center gap-10 text-gray-300">
       <div>
         <h2 className="text-3xl font-bold text-white">₹1000+</h2>
         <p className="text-sm">Average Earnings</p>
       </div>
       <div>
         <h2 className="text-3xl font-bold text-white">5000+</h2>
         <p className="text-sm">Happy Referrers</p>
       </div>
       <div>
         <h2 className="text-3xl font-bold text-white">10k+</h2>
         <p className="text-sm">Successful Referrals</p>
       </div>
     </div>
   </div>
 </section>
 </>
}