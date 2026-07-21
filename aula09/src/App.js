import './App.css';
import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const AppContext = createContext();

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });
  return (
    <div className="App">

      <QueryClientProvider client={client}> 
        <AppContext.Provider>
          <Router>
            <Link to='/'> Home</Link>
            <Link to='/Profile'> Profile</Link>
            <Link to='/Contact'> Contact</Link>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Profile' element={<Profile />} />
              <Route path='/Contact' element={<Contact />} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
