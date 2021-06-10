import React, { useState, useRef } from 'react';
import AnimatedNumber from "animated-number-react";
import './App.css';

function App() {
  const [upperBound, setUpperBound] = useState(0)
  const [realUpperBound, setRealUpperBound] = useState(0);
  const [drinkMessage, setDrinkMessage] = useState('')
  const [originalUpperBound, setOriginalUpperBound] = useState(0)
  const [displayBound, setDisplayBound] = useState(0)

  const handleChangeUpperBound = (e) => {
    setDisplayBound(e.target.value)
    setUpperBound(e.target.value)
    setDrinkMessage('')
  }

  const handleChangeGo = () => {
    var min = 1
    var max = Math.floor(upperBound);
    var ran = Math.floor(Math.random() * (max - min) + min)
    setRealUpperBound(ran)
    setUpperBound(ran)
    if(ran === 1){
      setDrinkMessage('Drink!')
      setDisplayBound(0)
    }
  }

  const formatValue = (value) => value.toFixed(0);


  return (
    <div className="App">
      <div className='title'>
        RANDOM DRINKING
      </div>
      <div className='description'>
        Select a starting number and then click go. The game will pick a random number between 1 and your number. Take turns clicking Go until someone lands on 1 and has to drink!
      </div>
      <div>
      Select Starting Number:&nbsp;
      <input type="number" value={displayBound} name="number" onChange={(e) => {handleChangeUpperBound(e)}}/>
      </div>
      <br/>
      <div>
        <button onClick={handleChangeGo}>Go</button>
      </div>
      <br/>
      <div>
        1 -  <AnimatedNumber value={upperBound} formatValue={formatValue}/>
      </div>
      {/* <div>
        New Upper Bound <AnimatedNumber value={realUpperBound} formatValue={formatValue}/>
      </div> */}
      <div>
        <span>{drinkMessage}</span>
      </div>
      <div className='props'>
        Inspired by TikTok User <a target='_blank' href='https://vm.tiktok.com/ZMdRkBUsL/'>__a.o.a__</a>
      </div>
    </div>
  );
}

export default App;
