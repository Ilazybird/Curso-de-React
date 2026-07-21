import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p><button onClick={ () => {setCount(count + 1)}}>Increse</button></p>
      <p><button onClick={ () => {setCount(count - 1)}}>Decrease</button></p>
      <p><button onClick={ () => {setCount(0)}}>Set to Zero</button></p>
      {count}
    </div>
  );
}

export default App;
