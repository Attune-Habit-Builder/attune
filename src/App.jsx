import React, { useState } from 'react';
import Main from './components/Main';
import './App.css';
import Header from './components/Header';

function App() {
  //change useState to userId = 1 or null for "login" vs "welcome" view
  const [userId, setUserId] = useState([1]);
  const [error, setError] = useState(null);
  //const [user, setUser] = useState({ name: 'Fish' });

  return (
    <div className='App'>
      {error && console.log(error)}
      <Header userId={userId} setUserId={setUserId} setError={setError} />
      {console.log(userId)}
      {userId && <Main userId={userId} />}
    </div>
  );
}

export default App;
