import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SearchPage from './components/SearchPage';
import ResultCard from './components/ResultCard';
import LoadingBar from './components/LoadingBar';

function App() {
  const [result, setResult] = useState(false);
  const [resultDate, setResultDate] = useState(new Date());

  function handleShowResult() {
    if (result === false) {
      setResult(!result);
    }
  }

  function handleHideResult() {
    if (result === true) {
      setResult(!result);
    }
  }

  function handleDateCalculate(date) {
    var newDate = new Date(date);
    newDate.setDate(date.getDate() + 90);
    setResultDate(newDate);
  }

  return (
    <div className="App">
      <NavBar />
      <div style={{display: result ? 'none': 'block'}}>
        <LoadingBar handle={result}/>
      </div>
      <div style={{display: result ? 'none': 'block'}}>
        <SearchPage props={{'handleSubmit': handleShowResult, 'handleDateCalculate': handleDateCalculate}}/>
      </div>
      <div style={{display: result ? 'block' : 'none' , marginTop: '40px'}}>
        <ResultCard props={{'handleSubmit': handleHideResult, 'newDate': resultDate}}/>
      </div>
      <div id='bottom' />
    </div>
  );
}

export default App;
