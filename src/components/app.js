import React, { Component } from 'react';

import ClipBoard from './clip_board'
import '../assets/app.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ClipBoard/>
      </div>
    );
  }
}

export default App;
