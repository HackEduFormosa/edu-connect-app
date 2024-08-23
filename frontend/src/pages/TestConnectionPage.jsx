// src/pages/TestConnectionPage.jsx

import React, { useEffect, useState } from 'react';
import { fetchFunction } from '../api/apiFetch';

const TestConnectionPage = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const testConnection = async () => {
      try {
        const result = await fetchFunction('test-endpoint'); // Usa un endpoint de prueba en tu backend
        setResponse(result);
      } catch (err) {
        setError('Failed to connect to the backend.');
        console.error('Connection error:', err);
      }
    };

    testConnection();
  }, []);

  return (
    <div>
      <h2>Test Connection</h2>
      {error && <p className="error-message">{error}</p>}
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default TestConnectionPage;
