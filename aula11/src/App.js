import './App.css';
import {useToggle} from './useToggle'

function App() {
 
  const [isInvisible, toggle] = useToggle();

  return (
    <div className="App">
      <button onClick={toggle}>
        {isInvisible ? "Hide" : "Show"}
      </button>
      {isInvisible && <h1>Hidden Text</h1>}
    </div>
  );
}

export default App;
