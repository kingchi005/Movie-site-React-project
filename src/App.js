import './index.css';
import './App.css'
import { useState, useEffect } from 'react';


const App = () => {
 const [num, setNum] = useState('0')
  useEffect(() => {
    setNum(100)
  }, []);


  return (
    <div className="App">
      <button onClick={(e) => setNum((prevNum) => prevNum - 1)}>-</button>
      <h1>Num: {num} </h1>
      <button onClick={(e) => setNum((prevNum) => prevNum + 1)}>+</button>
    </div>
  );
}

export default App;
