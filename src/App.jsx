import React from 'react';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login'
import SignIn from './pages/SignIn'
import Home from './pages/Home';
import SettingsLayout from './components/Settings/SettingsLayout'
import AccountSettings from './components/Settings/settings/AccountSettings'
import PrivacySettings from './components/Settings/settings/PrivacySettings'
import PersonalSettings from './components/Settings/settings/PersonalSettings'
import TodoListApp from './pages/todoList';
import ContactUS from './pages/contact'
import Blog from './components/blog/blogPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<SettingsLayout />}>
          <Route index element={<Navigate to="/settings/account" replace />} />
          <Route path="account" element={<AccountSettings />} />
          <Route path="privacy" element={<PrivacySettings />} />
          <Route path="personal" element={<PersonalSettings />} />
          <Route path="contact-us" element={<ContactUS />} />
        
        </Route>
        <Route path="/todo-list" element={<TodoListApp />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;