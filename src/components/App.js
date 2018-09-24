import React, { Component } from 'react';
import Board from './board/Board.js';

class App extends Component {
  render() {
    return (
      <div className='fullHeight'>
        <Board />
      </div>
    );
  }
}

export default App;
