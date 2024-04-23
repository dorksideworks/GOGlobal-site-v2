import React, {useRef, useEffect} from 'react'

import {Tween, Timeline, Power3} from 'react-gsap';
import { Controller, Scene} from 'react-scrollmagic';

import { useTranslation } from 'react-i18next';

function SayHello () {



    const [t, i18n] = useTranslation("global");

    return(
        <div class=" p-5">
            <div class="wrapper mx-auto">
                <h1 class="text-cyan-500 text-6xl font-bold"> Say Hello To GO</h1>
                <p class="pt-3" >Providing global digital experiences with our wide range of innovative products.</p>

                <div class="pt-5"> 
                    <ul class="flex flex-row pt-10">
                        {t("sayhello", {returnObjects:true}).map(function(o, i) {
                            return (
                                <li class="flex flex-col w-23 basis-1/5  flex flex-col items-center justify-center"> 
                                    <div class="w-20 bg-cyan-400 h-20 rounded-full"></div>
                                    <h1 class="text-2xl font-bold mt-5"> {o.title}</h1>
                                    <p class="text-sm">{o.desc}</p>
                                </li>
                                
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SayHello