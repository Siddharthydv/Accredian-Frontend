import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    tier: "Gold Tier Referrer",
    review:
      "I've earned over ₹10,000 in just two months by referring my friends. The process is super smooth and the rewards are credited instantly!",
    rating: 5,
    initial: "R",
  },
  {
    name: "Priya Patel",
    tier: "Silver Tier Referrer",
    review:
      "The referral tracking system is fantastic. I can see all my referrals and earnings in real-time. Best referral program ever!",
    rating: 5,
    initial: "P",
  },
  {
    name: "Amit Kumar",
    tier: "Bronze Tier Referrer",
    review:
      "Started just a month ago and already earned ₹3000. The support team is very helpful and responsive!",
    rating: 5,
    initial: "A",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-black text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Success Stories</h2>
        <p className="text-gray-400">Hear from our happy referrers</p>
      </div>
      <div className="max-w-4xl mx-auto mt-8 space-y-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg flex gap-4 shadow-lg"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full text-lg font-bold">
              {testimonial.initial}
            </div>
            <div>
              <h3 className="font-bold">{testimonial.name}</h3>
              <p className="text-gray-400 text-sm">{testimonial.tier}</p>
              <p className="mt-2 text-gray-300">"{testimonial.review}"</p>
              <div className="flex mt-2 text-yellow-400">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
