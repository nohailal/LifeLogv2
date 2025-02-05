import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HomeIcon, MusicalNoteIcon, HeartIcon, UsersIcon, LightBulbIcon } from "@heroicons/react/24/outline";

function BlogNavbar() {
  return (
    <nav className="bg-gradient-to-r from-pink-400 to-purple-500 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">LifeLog Blog</h1>
      <div className="flex space-x-4">
        <Link to="/" className="flex items-center space-x-1"><HomeIcon className="w-5 h-5"/> Home</Link>
        <Link to="/music" className="flex items-center space-x-1"><MusicalNoteIcon className="w-5 h-5"/> Music</Link>
        <Link to="/thoughts" className="flex items-center space-x-1"><HeartIcon className="w-5 h-5"/> Thoughts</Link>
        <Link to="/friends" className="flex items-center space-x-1"><UsersIcon className="w-5 h-5"/> Friends</Link>
        <Link to="/inspiration" className="flex items-center space-x-1"><LightBulbIcon className="w-5 h-5"/> Inspiration</Link>
      </div>
    </nav>
  );
}

function Blog() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (newPost.trim()) {
      setPosts([{ text: newPost, likes: 0 }, ...posts]);
      setNewPost("");
    }
  };

  const likePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].likes += 1;
    setPosts(updatedPosts);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Share Your Thoughts</h2>
        <textarea
          className="w-full p-2 border rounded mb-2"
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        ></textarea>
        <button className="bg-purple-500 text-white px-4 py-2 rounded" onClick={addPost}>Post</button>
      </div>
      <div className="w-full max-w-lg mt-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <p>{post.text}</p>
            <button className="mt-2 text-purple-500" onClick={() => likePost(index)}>
              ❤️ {post.likes}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogNavbar;
