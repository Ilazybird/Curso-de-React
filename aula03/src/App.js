import './App.css';
import { Planets } from './Planets';

function App() {
  const planets = [
    {name: "Mars", IsGasPlanet: false},
    {name: "Earth", IsGasPlanet: false},
    {name: "Jupiter", IsGasPlanet: true},
    {name: "Venus", IsGasPlanet: false},
    {name: "Neptune", IsGasPlanet: true},
    {name: "Uranus", IsGasPlanet: true},
  ]
    
  return (
    <div className="App">
      {planets.map((planets, key) => {
        return <Planets name={planets.IsGasPlanet ? planets.name : ""}/> 
      })}
    </div>
  );
}

export default App;
