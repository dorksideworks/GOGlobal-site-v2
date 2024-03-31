import React, { useEffect } from 'react'
import Hero from '../Components/Hero';
import Products from '../Components/Products';
import GOLEARN from '../Components/GOLearn';
import GOFoundation from '../Components/GOFoundation';
import GOTV from '../Components/GOTV';
import InfiniteMoney  from '../Components/InfiniteMoney';
import Community from '../Components/Community'; 
import {useLocation, useMatch} from 'react-router-dom';

import { useTranslation } from 'react-i18next';
function Home() {
    let location = useLocation();
    let lang = location.pathname.slice(location.pathname.lastIndexOf("/"));

    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        
        if(lang =='/es') {
            i18n.changeLanguage("es");
        } else if(lang == "/kr") {
            i18n.changeLanguage("kr")
        }

    }, []);

  return (
    <div>
        <Hero/>
        <Products/>
        <GOLEARN/>
        <GOTV/>
        <InfiniteMoney/>
        <GOFoundation/>
        <Community/>
      
    </div>
  )
}

export default Home
