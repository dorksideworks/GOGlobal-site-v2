
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
import Page404 from './Pages/Page404';

import {Helmet} from 'react-helmet';
import TagManager from 'react-gtm-module';
function App() {

 
  const [theme, setTheme] = useState('light');

  const handleTheme = (t) => {
    console.log("new theme value " + t) 
    setTheme(t);
  }

  useEffect(()=>{
    TagManager.initialize({ gtmId: 'GTM-MCB7VQQF' });
    console.log("themez is: " + theme); 
    
  },[theme])

  return (
    <Router>
      <div className="App">
        <Helmet>
          <title> Empowering Global Community Through Digital Solution - GO Global</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="google-site-verification" content="GOlRpyHKjDGUffTz-xmFsXeUrjXzIi_y7AYUKQFOhYA" />
        
        </Helmet>
        <div class=" overflow-hidden">
          
          <Header th={theme}/> 

          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/blogs" element={ <Blogs/> } />
            <Route path="/downloads" element={ <Downloads2 sendTheme={handleTheme} /> } />
            <Route path="*" element={ <Page404 sendTheme={handleTheme} /> } />

          </Routes>

          <Footer/>

          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MCB7VQQF" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

        </div>

      </div>
    </Router>
  );
}

export default App;
