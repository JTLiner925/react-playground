import React, { Component } from 'react';
import './App.css';
import Accordion from './state-drills/Accordion.js';


class App extends Component {
  render() {
  return (
    <div className="App">
      <Tabs tabs={tabsProp} />
    </div>
  );
}
}

export default App;
