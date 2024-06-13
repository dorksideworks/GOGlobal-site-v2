
import {useEffect} from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';

import Header from './Components/Header';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import Footer from './Components/Footer';
import Downloads from './Pages/Downloads';

function App() {

 
  return (
    <Router>
      <div className="App">
        <div class=" overflow-hidden">
          
          <Header/> 

          <Routes>
            <Route path="/*" element={ <Home /> } />
            <Route path="/blogs" element={ <Blogs/> } />
            <Route path="/downloads" element={ <Downloads/> } />

          </Routes>
          <Footer/>
        </div>

      </div>
    </Router>
  );
}

export default App;
