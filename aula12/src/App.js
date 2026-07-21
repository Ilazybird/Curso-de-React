import './App.css';
import { Person } from './pages/Person';

function App() {
  return (
    <div className="App">
      <Person 
      name="José"
      age={65}
      email="jose@jose.com"
      isMarried = {false}
      friends = {["Luiz", "Rafael", "Maria", "Esther"]}
      />
    </div>
  );
}

export default App;
