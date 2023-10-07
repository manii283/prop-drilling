import React from 'react';
import './App.css';
import ChildA from './ChildA';

function App() {
  const name = 'manisha'
  return (
    <div className="App">
      <h1>Prop Drilling</h1>
      <ChildA name={name}/>
    </div>
  );
}

export default App;
