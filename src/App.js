import React from 'react';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Blog from './services/blog';
import Home from './pages/Home'
import Navbar from './pages/navbar';
import Settings from './privicy/settings.jsx'
import ContactUS from './privicy/contactUs.jsx';
import AccountSettings from './privicy/AccountSettings';
import Account from './privicy/account';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
          <Route path="/blog" element={<Blog />} />
        <Route path="/home" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/Settings/*" element={<Settings />} />
          <Route path="/AccountSettings" element={<AccountSettings />} />
          <Route path="/ContactUS" element={<ContactUS />} />
          <Route path="/account" element={<Account />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;