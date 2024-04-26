import React, { useEffect } from 'react'
import Hero from '../Components/Hero';
import Products from '../Components/Products';
import GOLEARN from '../Components/GOLearn';
import GOFoundation from '../Components/GOFoundation';
import GOCharity from '../Components/GOCharity';
import GOTV from '../Components/GOTV';
import InfiniteMoney  from '../Components/InfiniteMoney';
import Community from '../Components/Community'; 
import SayHello from '../Components/SayHello';
import GoGames from '../Components/GOGames';
import Compensation from '../Components/Compensation';

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
    <div class="bg-slate-50 dark:bg-slate-900 duration-500">
        <Hero/>
        <SayHello />
        <GOLEARN/>
        <GOTV/>
        <GoGames/>
        <InfiniteMoney/>
        <GOCharity />
        <Compensation />
        {/* <GOFoundation/> */}
        <Community/>
      
    </div>
  )
}

export default Home
