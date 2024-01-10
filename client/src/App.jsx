import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setData(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;