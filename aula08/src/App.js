import './App.css';
import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';

export const AppContext = createContext();

function App() {

  const [name, setName] = useState("User");
  const [num, setNum] = useState("");

  return (
    <div className="App">
      <AppContext.Provider value={{num, setNum, name, setName}}> 
      <Router>
        <Link to='/'> Home</Link>
        <Link to='/Profile'> Profile</Link>
        <Link to='/Contact'> Contact</Link>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Profile' element={<Profile />}/>
          <Route path='/Contact' element={<Contact />}/>
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
