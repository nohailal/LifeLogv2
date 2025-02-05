import React from "react";
import Navbar from './navbar';
import Footer from "../component/Landing/Footer";
import About from './About'
function Home() {
  return (
    <div className="bg-gradient-to-r from-[#FAACA8] to-[#DDD6F3] h-auto w-screen">
      <Navbar/>
      <About/>
      <Footer/>
    </div>
  );
}

export default Home;
