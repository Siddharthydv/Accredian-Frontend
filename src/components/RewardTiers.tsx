import { FaStar, FaLock, FaSlidersH, FaCheck } from "react-icons/fa";

const RewardTiers = () => {
  const tiers = [
    {
      name: "Bronze",
      price: "₹300",
      referrals: "1-5 Referrals",
      features: ["Basic Reward Points", "Standard Support"],
      bgColor: "bg-yellow-100",
      icon: <FaStar className="text-brown-700" />,
    },
    {
      name: "Silver",
      price: "₹500",
      referrals: "6-15 Referrals",
      features: ["Enhanced Reward Points", "Priority Support", "Monthly Bonus"],
      bgColor: "bg-gray-200",
      icon: <FaLock className="text-gray-700" />,
    },
    {
      name: "Gold",
      price: "₹1000",
      referrals: "15+ Referrals",
      features: [
        "Premium Reward Points",
        "24/7 VIP Support",
        "Quarterly Bonus",
        "Exclusive Events Access",
      ],
      bgColor: "bg-yellow-200",
      icon: <FaSlidersH className="text-yellow-700" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12">
      <h2 className="text-3xl font-semibold text-center">Rewards Tiers</h2>
      <p className="text-center text-gray-600 mb-8">
        Unlock higher rewards as you refer more friends
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg ${tier.bgColor} flex flex-col items-center`}
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md">
              {tier.icon}
            </div>
            <h3 className="mt-4 text-xl font-semibold">{tier.name}</h3>
            <p className="text-2xl font-bold">{tier.price}</p>
            <p className="text-sm text-gray-600">{tier.referrals}</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewardTiers;
