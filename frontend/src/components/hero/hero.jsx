import React from "react";

import {useNavigate} from "react-router-dom";

// import HeroImage1 from "../../assets/images/img (5).webp";
// import HeroImage2 from "../../assets/images/img (6).webp";
// import HeroImage3 from "../../assets/images/img (7).webp";
// import HeroImage4 from "../../assets/images/img (2).webp";

import HeroImage1 from "../../assets/images/hero/bitcoin.jpg";
import HeroImage2 from "../../assets/images/hero/ethereum.jpg";
import HeroImage4 from "../../assets/images/hero/blockchain-hand.jpg";
import HeroImage3 from "../../assets/images/hero/programming.png";




function Hero() {
  const navigate = useNavigate();
  return (
    <section className="mt-5 py-3 w-[85%] mx-auto flex sm:md:grid grid-cols-hero gap-x-8">
      <div className="sm:md:pr-8 sm:md:mt-[4rem] w-100 ">
        <h1 className="text-[2.4rem] dark:text-slate-200 sm:md:text-6.5xl text-blue-dark leading-none font-roboto font-black mb-4 tracking-tight">
          {/*Learn the latest in tech and <span className="text-blue-400">blockchain</span>*/}
          Welcome <br/>to Empowered Blockchain Firm.
        </h1>
        <p className="text-[1.06rem] mb-5 text-gray-600">
          Learn the latest in blockchain and cryptocurrency technology and other crypto related skills one might need to get started in the world of blockchain technology. Sign up now to get started
        </p>
        <button 
          className="bg-gradient-to-r from-blue to-blue-700 text-white shadow rounded py-2 px-4 text-[24px]"
          onClick={() => navigate("/register")}
          >Sign up Now</button>
      </div>

      {/* Hero Image */}
      <div className="image grid grid-cols-2 gap-x-2.5 hidden md:grid sm:grid">
        <div className="first mt-8 grid gap-y-2">
          <blockquote className="w-full h-60 rounded overflow-hidden">
            <img
              src={HeroImage1}
              alt="hero content 1"
              className="w-100 h-full object-cover"
            />
          </blockquote>

          <blockquote className="w-full h-60 rounded overflow-hidden">
            <img
              src={HeroImage4}
              alt="hero content 1"
              className="w-100 h-full object-cover"
            />
          </blockquote>
        </div>
        <div className="second mb-8 grid gap-y-2">
          <blockquote className="w-full h-60 rounded overflow-hidden">
            <img
              src={HeroImage3}
              alt="hero content 1"
              className="w-100 h-full object-cover"
            />
          </blockquote>
          <blockquote className="w-full h-60 rounded overflow-hidden">
            <img
              src={HeroImage2}
              alt="hero content 1"
              className="w-100 h-full object-cover"
            />
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default Hero;
