
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import ProgramBenefits from "../components/ProgramBenefits";
import RewardTiers from "../components/RewardTiers";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/Faq";
import Footer from "../components/Footer";
import { useAuth } from "../AuthContext";


function Home() {
  const {user}=useAuth();
  console.log(user)
    return (<div className="flex-col">
      <Navbar/>
     <Hero/>
     <HowItWorks/>
     <ProgramBenefits/>
     <RewardTiers/>
     <Testimonials/>
     <FAQ/>
     <Footer/>
     </div>
    );
  }

  export default Home;