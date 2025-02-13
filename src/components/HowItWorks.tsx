import Button from "./Button";



export default function HowItWorks() {
    return (
      <section className="py-16 bg-white text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
        <p className="text-gray-600 mt-2">
          Follow these simple steps to start earning rewards through our referral program
        </p>
  
        {/* Steps */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 px-6">
          {[
            { id: 1, title: "Sign Up", desc: "Create your account and verify your details to get started with the referral program" },
            { id: 2, title: "Share Your Link", desc: "Get your unique referral link and share it with friends through social media or email" },
            { id: 3, title: "Earn Rewards", desc: "Get rewarded when your friends sign up using your referral link" },
          ].map((step) => (
            <div
              key={step.id}
              className="relative bg-white shadow-lg rounded-lg p-6 w-full sm:w-80 border border-gray-200"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-indigo-600 text-white text-lg font-bold rounded-full">
                {step.id}
              </div>
  
              {/* Step Content */}
              <h3 className="mt-6 text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
  
        {/* Button */}
        <div className="mt-10">
        <Button text={"Start Referring Now"}/>
        </div>
      </section>
    );
  }
  