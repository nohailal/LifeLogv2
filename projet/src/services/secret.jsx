import React, { useState } from 'react';

function SecretDiary() {
  const [responses, setResponses] = useState([]);
  const [answer, setAnswer] = useState('');
  const questions = [
    'What made you smile today?',
    'What are you grateful for?',
    'How do you feel right now?'
  ];

  const addResponse = () => {
    if (answer) {
      setResponses([...responses, answer]);
      setAnswer('');
    }
  };

  return (
    <div>
      <h1>Secret Diary</h1>
      <p>{questions[Math.floor(Math.random() * questions.length)]}</p>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Write your answer here..."
      />
      <button onClick={addResponse}>Save Answer</button>
      <ul>
        {responses.map((res, idx) => (
          <li key={idx}>{res}</li>
        ))}
      </ul>
    </div>
  );
}

export default SecretDiary;
