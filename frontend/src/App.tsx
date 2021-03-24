import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SearchPage from './components/SearchPage';
import ResultCard from './components/ResultCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchPage />
      <ResultCard />
    </div>
  );
}

export default App;
