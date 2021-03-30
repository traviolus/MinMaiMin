import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SearchPage from './components/SearchPage';
import ResultCard from './components/ResultCard';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const homePage = () => <div><NavBar /><SearchPage /></div>;

function App() {
  return (
    <Router>  
      <div className="App">
        <Route path="/" render={ homePage }/>
        {/* <NavBar />
        <SearchPage />
        <ResultCard /> */}
      </div>
    </Router>
  );
}

export default App;
