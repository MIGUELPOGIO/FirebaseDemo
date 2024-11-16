import React, { useState } from 'react';

export default function Feedback() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback Submitted: ${feedback}`);
    setFeedback('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Feedback</h2>
      <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} required></textarea>
      <button type="submit">Submit Feedback</button>
    </form>
  );
}
