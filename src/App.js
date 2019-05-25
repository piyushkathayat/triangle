import React from 'react';
import Triangle from './components/Triangle';
import { MESSAGE_HEADER } from './constants/common';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>{MESSAGE_HEADER}</div>
      </header>
      <Triangle />
    </div>
  );
}

export default App;
