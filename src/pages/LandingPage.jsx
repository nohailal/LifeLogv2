import React from "react";
import Header from "../component/Landing/Header";
import HeroSection from "../component/Landing/HeroSection";
import ShowcaseSection from "../component/Landing/ShowcaseSection"
import ContactSection from "../component/Landing/ContactSection";
import Footer from "../component/Landing/Footer";
function LandingPage() {
  return (
    <div className="bg-gradient-to-r from-[#FAACA8] to-[#DDD6F3] h-auto w-screen">
      <Header/>
      <HeroSection/>
      <ShowcaseSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default LandingPage;
