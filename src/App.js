import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import UbsCard from './components/UbsCard';

function App() {
  return (
    <div className="App">
      <Header/>

      <div className="ubs-list-container">
        <UbsCard/>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
