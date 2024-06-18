import React ,{useEffect, useRef} from 'react'

import {Tween, Timeline, Power3} from 'react-gsap';
import { Controller, Scene} from 'react-scrollmagic';
import { useTranslation } from 'react-i18next';
import { UilAwardAlt, UilEnglishToChinese,UilFilm, UilClapperBoard, UilCoins } from '@iconscout/react-unicons'


function GOTV3() {

    const [t, i18n] = useTranslation("global");

    useEffect(() => {



    
    }, )

    return(
        <div class="bg-slate-900  relative overflow-hidden">
            <Controller>
                <Scene duration={1200} triggerHook={0} indicators pin>

                    {(progress) => (
                        
                        <div id="gotv-hero" class="w-100 flex items-center justify-center relative">
                            <Timeline totalProgress={progress} paused>
                    
                                <Timeline
                                target={
                                    <img class="absolute gotv-ipad w-1/2 mx-auto" src="Assets/gotv/gotv_ipad.png"/>
                                }
                                >
                                <Tween from={{  bottom: "-100%", opacity: 0}} to={{ bottom: "0%", opacity: 1 }} />
                                </Timeline>
                            </Timeline>

                        </div>
                    )}
                </Scene>
            </Controller>
            
            <div class="wrapper relative flex-col flex lg:pt-20 mx-auto ">                 
                
                <div>
                    <div class="mb-4 relative mx-auto p-10 bg-slate-800 text-white font-bold rounded-xl w-40 text-center">
                        <img src="/ASSETS/logos/color/gotv.png"/>
                    </div>

                    <h1 class=" text-center text-4xl md:text-5xl lg:text-5xl font-bold text-white"> 
                        {t("gotv.title", {returnObjects:true}).map(function(o,i) {
                            if(o.startsWith("/s")) {
                                return <span class="text-red-500"> {o.split("/s")[1]}</span>
                            }
                            else {      
                                return <span> {o} </span> 
                            }
                        })}
                    </h1>
                    <p class="pt-5 text-center text-white"> {t("gotv.description")} </p>

                    <div class="pt-20">
                    </div>
                </div>


            </div>


        </div>
    )
}

export default GOTV3