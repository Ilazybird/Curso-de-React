import './App.css';
import Axios from "axios";
import { useState, useEffect } from 'react';

function App() {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  const fetchData = () => {
      Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
        setAge(res.data.age)
      })
  }

  return (
    <div className="App">
      <input placeholder='Ex: Matheus...' onChange={(event) => {setName(event.target.value)}}/>
      <button onClick={fetchData}>Predict Age</button>
      <h1> Predicted Age: {age}</h1>
    </div>
  );
}

export default App;
