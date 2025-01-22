import React, { useState } from 'react';

function HealthJournal() {
  const [entries, setEntries] = useState([]);
  const [input, setInput] = useState('');

  const addEntry = () => {
    if (input) {
      setEntries([...entries, { text: input, date: new Date().toLocaleString() }]);
      setInput('');
    }
  };

  return (
    <div>
      <h1>Health Journal</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Describe how you feel..."
      />
      <button onClick={addEntry}>Add Entry</button>
      <ul>
        {entries.map((entry, idx) => (
          <li key={idx}>
            <strong>{entry.date}</strong>: {entry.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HealthJournal;
