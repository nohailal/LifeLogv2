import logo from '../../images/logo.png';
import React from 'react';

const Header = () => {

  return (
    <nav className="w-full h-16">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-32 h-16" />
        </a>
      </div>
    </nav>
  );
};

export default Header;
