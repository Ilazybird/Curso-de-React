import React from 'react';
import './App.css';
import { Person, Country } from './pages/Person';

function App() {
  return (
    <div className="App">
      <Person 
      name="José"
      age={65}
      email="jose@jose.com"
      isMarried = {false}
      friends = {["Luiz", "Rafael", "Maria", "Esther"]}
      country={Country.Brasil}
      />
    </div>
  );
}

export default App;
