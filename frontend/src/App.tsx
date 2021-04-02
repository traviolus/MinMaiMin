import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SearchPage from './components/SearchPage';
import ResultCard from './components/ResultCard';
import LoadingModal from './components/LoadingModal';
import axios from 'axios';


function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);
  const [resultDate, setResultDate] = useState(new Date());
  const [showResultCard, setShowResultCard] = useState(false);
  const [predictedValue, setPredictedValue] = useState(0);

  function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
  }

  async function handleShowResult(props) {
    if (result === false) {
      setLoading(true);
      setResult(!result);
      const res = await axios.post('http://34.87.85.100:8000/api/predict/', {
        ...props
      });
      setPredictedValue(res.data.result);
      setShowResultCard(!showResultCard);
      setLoading(false);
    }
  }

  function handleHideResult() {
    if (result === true) {
      setResult(!result);
      setShowResultCard(!showResultCard);
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
      {loading ? <LoadingModal /> : <br></br>}
      <div style={{display: result ? 'none': 'block'}}>
        <SearchPage props={{'handleSubmit': handleShowResult, 'handleDateCalculate': handleDateCalculate}}/>
      </div>
      <div style={{display: showResultCard ? 'block' : 'none' , marginTop: '40px'}}>
        <ResultCard props={{'handleSubmit': handleHideResult, 'newDate': resultDate, 'predictedValue': predictedValue}}/>
      </div>
      <div id='bottom' />
    </div>
  );
}

export default App;
