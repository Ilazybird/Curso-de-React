import './App.css';

function App() {
  return (
    <div className="App">
      <Jobs salary={90000} position="Senior SDE" company="Amazon"/>
      <Jobs salary={12000} position="Junior SDE" company="Google"/>
      <Jobs salary={10000} position="Project Manager" company="Netflix"/>
    </div>
  );
}

const Jobs = (props) => {
  return (
    <div> 
      <h1>{props.salary}</h1>
      <h2>{props.position}</h2>
      <h2>{props.company}</h2>
    </div>
  );
};

export default App;
