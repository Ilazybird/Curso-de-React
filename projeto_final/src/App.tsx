import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Login } from './Pages/Login';
import { Home } from './Pages/Main/Home';
import { Navbar } from './Components/Navbar';
import { Create } from './Pages/Create-Post/Create_pos';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/create_post' element={<Create />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
