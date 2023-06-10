
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contract from './routes/Contract';

function App() {
  return (
    <div className="App">
    
     <Router>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Service />} />
      <Route path='/contract' element={<Contract />} />
     </Routes>
     </Router>
    </div>
  );
}

export default App;
