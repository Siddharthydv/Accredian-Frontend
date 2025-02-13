import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How does the referral program work?",
    answer:
      "You can refer your friends using a unique referral link. When they sign up and complete an eligible action, you earn rewards.",
  },
  {
    question: "How much can I earn per referral?",
    answer:
      "Earnings depend on the referral tier. You can earn up to ₹500 per successful referral.",
  },
  {
    question: "When will I receive my rewards?",
    answer:
      "Rewards are processed within 7 days after the referred user completes the required action.",
  },
  {
    question: "Is there a limit to how many people I can refer?",
    answer:
      "No, you can refer as many people as you want and earn rewards for each successful referral.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white text-black py-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
        <p className="text-gray-500">
          Find answers to common questions about our referral program
        </p>
      </div>
      <div className="max-w-3xl mx-auto mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left text-lg font-medium bg-gray-100"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <FaChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-600 bg-white">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
