import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const stats = [
  {
    icon: "💰",
    percentage: "+23% vs last month",
    value: "₹15.3L+",
    label: "Total Earnings Distributed",
  },
  {
    icon: "👥",
    percentage: "+15% vs last month",
    value: "5,000+",
    label: "Active Referrers",
  },
  {
    icon: "✅",
    percentage: "+32% vs last month",
    value: "10,000+",
    label: "Successful Referrals",
  },
  {
    icon: "📈",
    percentage: "+18% vs last month",
    value: "₹1,000",
    label: "Average Reward Per Referral",
  },
];

const Footer = () => {
  return (
    <div className="bg-black text-white">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-12 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl text-center flex flex-col items-center"
          >
            <span className="text-3xl">{stat.icon}</span>
            <p className="text-sm text-purple-400">{stat.percentage}</p>
            <h3 className="text-2xl font-semibold mt-2">{stat.value}</h3>
            <p className="text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 py-8 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-lg font-semibold">ReferralRewards</h3>
          <p className="text-gray-400 mt-2">
            Join our community of successful referrers and start earning rewards
            today.
          </p>
          <div className="flex space-x-4 mt-3">
            <FaFacebook className="text-gray-400 hover:text-white cursor-pointer" />
            <FaTwitter className="text-gray-400 hover:text-white cursor-pointer" />
            <FaLinkedin className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="text-gray-400 mt-2 space-y-1">
            <li>Home</li>
            <li>How It Works</li>
            <li>Benefits</li>
            <li>Rewards</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Legal</h3>
          <ul className="text-gray-400 mt-2 space-y-1">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Stay Updated</h3>
          <p className="text-gray-400 mt-2">
            Subscribe to our newsletter for the latest updates and rewards.
          </p>
          <div className="mt-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none"
            />
            <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 mt-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-gray-500 py-6 border-t border-gray-800">
        © 2024 ReferralRewards. All rights reserved.
        <div className="flex justify-center space-x-4 mt-2 text-sm">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
