import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter</h1>
      <h3>Click the buttons to increment or decrement counter</h3>
      <div className={count > 0 ? 'positive counter' : count < 0 ? 'negative counter' : 'counter'}>{count}</div>
      <button onClick={()=>setCount(count - 1)}>-</button>
      <button onClick={()=>setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
