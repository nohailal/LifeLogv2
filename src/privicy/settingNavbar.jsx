import { useState } from "react";
import logo from '../images/logo.png';
export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Left Side: Dropdown */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Home</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">ContactUs</li>
          </ul>
        )}
      </div>

      <div className="text-xl font-semibold">
      <img src={logo} alt="Logo" className="w-32 h-16" />
      </div>

      {/* Right Side: Icons */}
      <div className="flex space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-200 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200 focus:outline-none relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute top-0 right-0 bg-red-500 h-2 w-2 rounded-full"></span>
        </button>
      </div>
    </nav>
  );
}
