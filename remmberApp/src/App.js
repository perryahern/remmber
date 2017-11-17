import React, { Component } from 'react';
import './App.css';

import MemoriesList from './components/Memories/Memories-List.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Remmber</h1>
          <h3 className="App-subtitle">What &amp; When?</h3>
        </header>
        <div>
          <MemoriesList />
        </div>
      </div>
    );
  }
}

export default App;
