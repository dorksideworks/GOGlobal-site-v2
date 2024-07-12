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
import GOwin from '../Components/GOwin';

import GOTV2 from '../Components/GOTV2';
import GOTV3 from '../Components/GOTV3';
import Blogs from '../Components/Blog';
import Compensation from '../Components/Compensation';

import {useLocation, useMatch} from 'react-router-dom';



import { useTranslation } from 'react-i18next';
function Home() {

    let location = useLocation();
    // let lang = location.pathname.slice(location.pathname.lastIndexOf("/"));
    let lang = location.pathname.split("/")[1]

    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        console.log(location.pathname.split("/")[1])
        
        if(lang =='es') {
            i18n.changeLanguage("es");
        } else if(lang == "kr") {
            i18n.changeLanguage("kr")
        }

    }, []);

  return (
    <div class="bg-slate-50 dark:bg-slate-900 duration-500">
        <Hero/>
        <SayHello />
        <GOLEARN/>
        {/* <GOTV/> */}
        <GOTV2 />
        {/* <GOTV3 /> */}
        {/* <GoGames/> */}
        <GOwin/>
        <InfiniteMoney/>
        <GOCharity />
        <Compensation />
        <Blogs />
        {/* <GOFoundation/> */}
        <Community/>
      
    </div>
  )
}

export default Home
