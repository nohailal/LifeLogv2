import React from 'react';

function FollowSteps() {
  const goals = [
    'Drink 8 glasses of water today.',
    'Go for a 30-minute walk.',
    'Practice 10 minutes of meditation.'
  ];

  return (
    <div>
      <h1>Follow Your Steps</h1>
      <h2>Today's Goals:</h2>
      <ul>
        {goals.map((goal, idx) => (
          <li key={idx}>{goal}</li>
        ))}
      </ul>
    </div>
  );
}

export default FollowSteps;
