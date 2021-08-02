import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useFirebaseApp } from 'reactfire';
import Auth from './Auth';
import { useUser } from 'reactfire';

function App() {
    const user = useUser();

  return (
    <div className="App">
      { user && <p>Usuario: {user.email} </p>}
      <Auth/>
    </div>
  );
}

export default App;
