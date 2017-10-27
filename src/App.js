import React, { Component } from 'react';
import MemoryContainer from './components/Memories/MemoryContainer.js';

import memoryData from './components/Memories/memory-data.js';
import userData from './components/Users/user-data.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allMemories: [],
      displayedMemories: []
    }
  }

  componentDidMount() {
    this.setState({
      allMemories: memoryData,
      displayedMemories: memoryData
    });
  }

  filterMovies() {
    const filteredMemories = this.state.allMemories;         {/* until ready to filter */}
    this.setState({ displayedMemories: filteredMemories });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Remmber</h1>
          {/* <h4 className="App-subtitle">There are five Ws; let's start with two</h4> */}
          <h3 className="App-subtitle">What &amp; When?</h3>
        </header>
        {/* <p className="App-intro">
          What will happen When?
        </p> */}
        <div>  {/* memories */}
          {this.state.displayedMemories.map((memory) => {
            return (
              <MemoryContainer memory={ memory } avatar={ userData[memory.username] } />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
