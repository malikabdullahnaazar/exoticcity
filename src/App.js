import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/data')
      
      .then(res => {
        let a=JSON.parse(res.data)
        console.log(a.access_token)
        setResponse(res);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>API Response:</h1>
      <pre>{response}</pre>
    </div>
  );
}

export default App;
