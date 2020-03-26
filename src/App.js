import React from 'react';
import Split from './composition/Split';
import './App.css';
//we import the split file/component to use 
//in the app function

function App() {
  return (
    <main className='App'>
      <Split />
      <Split />
      <Split />
      <Split />
    </main>
  );
}

export default App;