import React from 'react';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Health from './services/health'
import Blog from './services/blog';
import ToDoList from './services/todoList';
import FollowSteps from './services/steps';
import SecretDiary from './services/secret';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/health" element={<Health />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/todolist" element={<Todolist/>} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/secret" element={<Secret/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;