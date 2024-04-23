import React from 'react'
import { Controller, Scene} from 'react-scrollmagic';
import { useTranslation } from 'react-i18next';

import {Tween, Timeline} from 'react-gsap';

function GOTV() {

  const [t, i18n] = useTranslation("global");

  return (
    <div class="bg-black overflow-hidden" id="gotv-container">
        <Controller>
            <Scene duration={800} triggerHook={0.25} triggerElement="#gotv-container" pin indicators={true}>
                {(progress) => (
                    <div>
                        <Timeline totalProgress={progress} paused>

                            <div class="gotv-head relative" pin>
                                <img src="/ASSETS/gotv/bg.png" class="mx-auto"/>
                                <Timeline
                                    target={<img class="top-0 left-0 mx-auto right-0 scale-75 absolute" src="/ASSETS/gotv/gotv-001.png" />}
                                >
                                    <Tween from={{top: "-1000px", rotate: "45deg"}} to={{top:"-100px", rotate: "0deg"}}/>
                                </Timeline>
                            </div>
                           
                        </Timeline>
                            

                            <div class="wrapper relative -top-60 flex-col flex lg:pt-20 mx-auto ">
                                
                                <div class="mb-4 relative mx-auto p-10 bg-slate-900 text-white font-bold rounded-xl w-40 text-center">
                                    <img src="/ASSETS/logos/go-tv.png"/>
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
                                    <h1 class="text-white font-bold text-5xl">HOW IT WORKS</h1>
                                    <div class="flex flex-col flex-wrap wrapper mx-auto">
                                        <ul class="flex-row gap-20 items-center justify-center flex flex-wrap mx-auto pt-20 text-left">
                                            <li class="flex flex-row text-white justify-center items-center gap-5">
                                                <div class="w-16 h-16 bg-red-500 rounded-full"></div>
                                                <p class="text-xl">Annual subscription for  just 500 GO credits</p>
                                            </li>
                                            <li class="flex flex-row text-white justify-center items-center gap-5">
                                                <div class="w-16 h-16 bg-red-500 rounded-full"></div>
                                                <p class="text-xl">Available in multiple Languages</p>
                                            </li>
                                            <li class="flex flex-row text-white justify-center items-center gap-5 ">
                                                <div class="w-16 h-16 bg-red-500 rounded-full"></div>
                                                <p class="text-xl">Download from the <br/>App and Play Store today</p>
                                            </li>
                                            <li class="flex flex-row text-white justify-center items-center gap-5 ">
                                                <div class="w-16 h-16 bg-red-500 rounded-full"></div>
                                                <p class="text-xl">A-List <br/>Blockbusters and TV Shows.</p>
                                            </li>
                                            <li class="flex flex-row text-white justify-center items-center gap-5 ">
                                                <div class="w-16 h-16 bg-red-500 rounded-full"></div>
                                                <p class="text-xl">Brand new <br/>content every week</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </div>

                )}
            </Scene>
        </Controller>
        
        
      
    </div>
  )
}

export default GOTV
