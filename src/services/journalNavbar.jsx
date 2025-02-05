import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Navbar Component
function JournalNavbar() {
  return (
    <nav className="bg-gradient-to-r from-green-400 to-blue-500 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">LifeLog Journal</h1>
      <div className="flex space-x-4">
        <Link to="/health" className="flex items-center space-x-1">Health Journal</Link>
        <Link to="/secret-diary" className="flex items-center space-x-1">Secret Diary</Link>
        <Link to="/journal" className="flex items-center space-x-1">Journal</Link>
      </div>
    </nav>
  );


// Health Journal Component
function HealthJournal() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');
  const [mood, setMood] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const addEntry = () => {
    if (newEntry.trim()) {
      setEntries([{ text: newEntry, mood, symptoms }, ...entries]);
      setNewEntry('');
      setMood('');
      setSymptoms('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Health Journal</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Mood"
          className="w-full p-2 mb-4 border rounded"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        />
        <textarea
          placeholder="Symptoms or Health Notes"
          className="w-full p-2 mb-4 border rounded"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
        <textarea
          placeholder="Your Health Journal Entry"
          className="w-full p-2 mb-4 border rounded"
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
        />
        <button
          onClick={addEntry}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Entry
        </button>
      </div>

      <div className="mt-6">
        {entries.map((entry, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <p><strong>Mood:</strong> {entry.mood}</p>
            <p><strong>Symptoms:</strong> {entry.symptoms}</p>
            <p>{entry.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Secret Diary Component
function SecretDiary() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  const addEntry = () => {
    if (newEntry.trim()) {
      setEntries([{ text: newEntry }, ...entries]);
      setNewEntry('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Secret Diary</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <textarea
          placeholder="Write your secret thoughts..."
          className="w-full p-2 mb-4 border rounded"
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
        />
        <button
          onClick={addEntry}
          className="bg-pink-500 text-white px-4 py-2 rounded"
        >
          Add Entry
        </button>
      </div>

      <div className="mt-6">
        {entries.map((entry, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <p>{entry.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Journal Component
function Journal() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  const addEntry = () => {
    if (newEntry.trim()) {
      setEntries([{ text: newEntry }, ...entries]);
      setNewEntry('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Journal</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <textarea
          placeholder="Write your daily thoughts..."
          className="w-full p-2 mb-4 border rounded"
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
        />
        <button
          onClick={addEntry}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Entry
        </button>
      </div>

      <div className="mt-6">
        {entries.map((entry, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <p>{entry.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
}
export default JournalNavbar;