
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const[counter, setCounter] = useState(0);

  useEffect(()=>{
    setCounter(0);
  }, []);

  //Functions
  const decrement = () => {
    if(counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="App">
      <button onClick={decrement}>-</button>
        <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount)=> prevCount + 1)}>+</button> 
    </div>
  );
}

export default App;