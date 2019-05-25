import React from 'react';
import Triangle from './components/Triangle';
import { MESSAGE_HEADER } from './constants/common';

import './App.css';

function App() {
  return (
    <div data-ts="Board">
      <div data-ts="Panel">
        <header className="app-header">
          <div>{MESSAGE_HEADER}</div>
        </header>
        <Triangle />
      </div>
    </div>
  );
}

export default App;
