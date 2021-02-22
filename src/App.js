import React from 'react';
import './App.css';

import Interval from './components/Interval'
import Average from './components/Average'
import Sum from './components/Sum'
import Random from './components/Random'

function App() {

  return (
    <div className="App">
      <h1>Project-Redux</h1>
      <div className='linha'>
        <Interval />
      </div>

      <div className='linha'>
        <Average></Average>
        <Sum></Sum>
        <Random></Random>
      </div>

    </div>
  );
}

export default App;
