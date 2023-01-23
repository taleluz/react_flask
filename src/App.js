import React from 'react';
import './App.css';
import AddStudent from './features/counter/samp/AddStudent';
import { Samp } from './features/counter/samp/Samp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Samp></Samp>
<AddStudent></AddStudent>
      </header>
    </div>
  );
}

export default App;
