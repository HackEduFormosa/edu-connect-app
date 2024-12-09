// frontend/src/pages/TestConnection.jsx
import React, { useState } from 'react';

const TestConnection = () => {
  const [response, setResponse] = useState('');
  const [inputData, setInputData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3500/api/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: inputData }), 
      });

      const result = await res.json();
      setResponse(result.message);
    } catch (error) {
      setResponse('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Test Connection</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <p>{response}</p>
    </div>
  );
};

export default TestConnection;
