import React from "react";

const ContactUS = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center">Contact us</h2>
      <p className="text-center text-gray-600 mt-2 max-w-md">
        if you have anything to tell us or share some feedback, we would love to hear from you!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <span className="text-2xl">📞</span>
          <p className="mt-2 text-gray-700">+1-316-555-0116</p>
          <p className="text-gray-700">+1-446-526-0117</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <span className="text-2xl">📧</span>
          <p className="mt-2 text-gray-700">lifelog@gmail.com</p>
          <p className="text-gray-700">nohaila141@gmail.com</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <span className="text-2xl">📍</span>
          <p className="mt-2 text-gray-700">8502 Preston Rd, Ingle, Maine</p>
          <p className="text-gray-700">98380,Morocco</p>
        </div>
      </div>
      
      <div className="bg-white p-6 mt-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h3 className="text-2xl font-semibold text-center">Send us a message</h3>
        <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Enter your full name" className="border p-2 rounded w-full" />
          <input type="email" placeholder="Enter your email address" className="border p-2 rounded w-full" />
          <input type="text" placeholder="Enter your phone number" className="border p-2 rounded w-full" />
          <input type="text" placeholder="Enter your company name" className="border p-2 rounded w-full" />
          <textarea placeholder="Message" className="border p-2 rounded w-full md:col-span-2 h-32"></textarea>
          <button className="bg-blue-600 text-white py-2 rounded w-full md:col-span-2 hover:bg-blue-700">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUS;
