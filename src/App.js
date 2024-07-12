
import {useEffect, useState} from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


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

  const articleStructuredData = {
    
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GO GLOBAL",
      "alternateName": "GO",
      "url": "https://goglobal.network",
      "logo": "",
      "sameAs": [
        "https://www.facebook.com/goglobal.official",
        "https://www.instagram.com/goglobal.official/",
        "https://x.com/therealgoglobal",
        "https://www.youtube.com/@goglobal.official/",
        "https://goglobal.network"
      ]
    
    
  };

  const { i18n } = useTranslation();
  const currLocale = i18n.language;
  const loc = useLocation();
  useEffect(()=>{
    console.log("current language is : " + currLocale)
    TagManager.initialize({ gtmId: 'GTM-MCB7VQQF' });
    console.log("themez is: " + theme); 
    
  },[theme])


  return (
    <div>
      <div className="App">
        <Helmet>
          <title> Empowering Global Community Through Digital Solution - GO Global</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="google-site-verification" content="GOlRpyHKjDGUffTz-xmFsXeUrjXzIi_y7AYUKQFOhYA" />
          
        </Helmet>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(articleStructuredData),
            }}
        />
        <div class=" overflow-hidden">
          
          <Header th={theme}/> 

          <Routes>
            <Route exact path="/:currLocale" element={ <Home /> } />
            <Route path="/" element={<Navigate exact from="/" to={`${currLocale}`} /> } />
            {/* <Route path="/:currLocale/home" element={ <Home /> } /> */}
            {/* <Route path="/blogs" element={ <Blogs sendTheme={handleTheme}/> } /> */}
            <Route path="/blogs/:id" element={ <Blogs sendTheme={handleTheme}/> } />


            <Route path="/:currLocale/downloads" element={ <Downloads2 sendTheme={handleTheme} /> } />
            <Route path="*" element={ <Page404 sendTheme={handleTheme} /> } />

          </Routes>

          <Footer/>

          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MCB7VQQF" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

        </div>

      </div>
    </div>
  );
}

export default App;
