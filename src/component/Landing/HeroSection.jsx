import React from "react";
import Art from "../../assets/Humaaans - Research.png";
import { useNavigate } from "react-router";
function HeroSection() {
  const navigate = useNavigate();
  const handlSignUp = () => {
    navigate("/SignIn");
  }
  const handlLogin = () => {
    navigate("/login");
  }
  return (
    <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
      <div className="space-y-4 flex-1 sm:text-center lg:text-left">
        <h1 className="text-black font-bold text-4xl xl:text-5xl">
          Your Life, Your Story.
        </h1>
        <p className="text-gray-800 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
          "Preserve your journey, one moment at a time." </p>
        <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <button onClick={handlSignUp} className="px-7 py-3 bg-pink-600 w-full text-gray-100 text-center rounded-md shadow-md block sm:w-auto">
                Get started
            </button>
            <button onClick={handlLogin} className="px-7 py-3 w-full bg-rose-700 text-gray-200 text-center rounded-md block sm:w-auto">
                Login
            </button>
        </div>
      </div>
      <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <img src={Art} className="w-full mx-auto sm:w-10/12 lg:w-full" />
      </div>
    </section>
  );
}

export default HeroSection;
