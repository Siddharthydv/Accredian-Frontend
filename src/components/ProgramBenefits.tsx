import { FaDollarSign, FaBolt, FaUsers, FaShieldAlt, FaClock, FaChartPie } from "react-icons/fa";

export default function ProgramBenefits() {
  const benefits = [
    { icon: <FaDollarSign />, title: "Cash Rewards", desc: "Earn up to ₹1000 for each successful referral. The more you refer, the more you earn!" },
    { icon: <FaBolt />, title: "Instant Payouts", desc: "Get your rewards instantly credited to your account once your referral is successful." },
    { icon: <FaUsers />, title: "Unlimited Referrals", desc: "No cap on the number of referrals. Keep sharing and keep earning without limits!" },
    { icon: <FaShieldAlt />, title: "Secure Platform", desc: "Your referrals and rewards are tracked securely with our advanced tracking system." },
    { icon: <FaClock />, title: "24/7 Support", desc: "Get assistance anytime with our dedicated support team ready to help you." },
    { icon: <FaChartPie />, title: "Real-time Analytics", desc: "Track your referrals and earnings in real-time through our dashboard." },
  ];

  return (
    <section className="py-16 bg-black text-white text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold">Program Benefits</h2>
      <p className="text-gray-400 mt-2">
        Discover the amazing rewards and benefits of our referral program
      </p>

      {/* Benefits Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800"
          >
            {/* Icon */}
            <div className="text-indigo-400 text-3xl">{benefit.icon}</div>

            {/* Title & Description */}
            <h3 className="mt-4 text-lg font-semibold">{benefit.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
