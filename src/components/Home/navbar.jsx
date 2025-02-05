import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutGrid, 
  NotebookPen, 
  FileText,
  Menu,
  X
} from 'lucide-react';
import logo from '../../images/logo.png';

const services = [
  { name: 'Todo list', icon: LayoutGrid },
  { name: 'Journal', icon: NotebookPen },
  { name: 'Blog', icon: FileText },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: 'tween',
        duration: 0.3 
      }
    },
    exit: { 
      opacity: 0, 
      x: '100%',
      transition: { 
        type: 'tween',
        duration: 0.3 
      }
    }
  };

  return (
    <header className="bg-inherit">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/lifelog" className="-m-1.5 p-1.5">
            <span className="sr-only">LifeLog</span>
            <img src={logo} alt="Logo" className="w-32 h-16" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Menu />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-x-1 text-black-600/100 font-semibold">
              Services
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-chevron-down"
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>

            {servicesOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2"
              >
                {services.map((service) => (
                  <Link 
                    key={service.name} 
                    to={`/${service.name.toLowerCase().replace(' ', '-')}`}
                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                  >
                    <service.icon className="mr-2 w-5 h-5 text-gray-500" />
                    {service.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          <Link to="/home" className="text-black-600/100 font-semibold">
            Home
          </Link>
          <Link to="/contact" className="text-black-600/100 font-semibold">
            Contact Us
          </Link>
          <Link to="/settings" className="text-black-600/100 font-semibold">
            Settings
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm"
          >
            <div className="flex items-center justify-between">
              <Link to="/lifelog" className="-m-1.5 p-1.5">
                <span className="sr-only">LifeLog</span>
                <img src={logo} alt="Logo" className="h-8 w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <X />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="group">
                    <button className="flex w-full items-center justify-between rounded-lg py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                      Services
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="lucide lucide-chevron-down"
                      >
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </button>
                  </div>
                  <Link 
                    to="/home"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    to="/settings"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Settings
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}