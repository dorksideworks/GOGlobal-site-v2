import React, {useEffect, useRef, useState} from 'react'

import axios from 'axios';

import { i18n, useTranslation } from 'react-i18next';

const token = "4a95ae4db92472cf876ac8079073211e2caed72df979ad50cca00f57ccdce662e9c1f1410a0bd61b4250d986bccfa4e60c3334240e1854f5dd8162c227efc64d0c79aeebc0f4d83666da5f405d2d6cb6b0981cd5bdd720fb53a6afc311950a03d4d5632b0dcf5ed830458b08c20cd804ee58ed76c38a660599cb6c50d5c075c6";

function Page404({sendTheme}) {
   
    const [selectedPres, setSelectedPres] = useState('');



    useEffect(() => {
        sendTheme('dark');

        let param = {}
        
    },[]);


    return (
        <div class="pt-52 relative bg-slate-900 duration-500 relative bg-404 ">

            <div id="downloads-section" class="wrapper mx-auto flex flex-col">
                    <h1 class="text-white text-6xl font-bold mb-10">Ooops! Are you lost in?</h1>
                    <p class="text-white pb-10"> the page you are looking for is not available. </p>
                    <img src="/ASSETS/404/404-hero.png"/>
                    <h1 class="text-white text-6xl"></h1>
                    <button class="py-2 px-5 bg-cyan-500 w-72 font-bold mx-auto rounded-full overflow-hidden"> HOMEPAGE</button>
            </div>

        </div>
    )
}

export default Page404
