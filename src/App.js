import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home';

// components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='/' element={ <Home />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
