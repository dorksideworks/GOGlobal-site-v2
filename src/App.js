
import {useEffect, useState} from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';

import Header from './Components/Header';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import Footer from './Components/Footer';
import Downloads from './Pages/Downloads';
import Downloads2 from './Pages/Downloads2';

import {Helmet} from 'react-helmet';

function App() {

 
  const [theme, setTheme] = useState('light');

  const handleTheme = (t) => {
    setTheme(t);
  }

  return (
    <Router>
      <div className="App">
        <Helmet>
          <title> Empowering Global Community Through Digital Solution - GO Global</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Helmet>
        <div class=" overflow-hidden">
          
          <Header th={theme}/> 

          <Routes>
            <Route path="/*" element={ <Home /> } />
            <Route path="/blogs" element={ <Blogs/> } />
            <Route path="/downloads" element={ <Downloads2 sendTheme={handleTheme} /> } />

          </Routes>

          <Footer/>
        </div>

      </div>
    </Router>
  );
}

export default App;
