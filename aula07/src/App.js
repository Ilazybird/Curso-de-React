import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Error } from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <nav> 
          <Link to='/'> Home </Link>
          <Link to='/menu'> Menu </Link>
          <Link to='/contact'> Contact </Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
