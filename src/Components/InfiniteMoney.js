import React from 'react'

import {Controller, Scene} from 'react-scrollmagic';
import {Timeline, Tween} from 'react-gsap';

import { Trans, useTranslation } from 'react-i18next';
function InfiniteMoney() {

  const [t, i18n] = useTranslation("global");

  return (
    
    <div class="flex flex-col align-center justify-center lg:pb-10 relative">
          <Controller class="overflow-hidden relative">
            <Scene duration={1500}  triggerHook={0.5} indicators pin>
              {(progress) => (
                <div class=" flex flex-row justify-center align-center w-full py-5 mx-auto relative">
                  <Timeline totalProgress={progress} paused>
                    <Timeline 
                      target={
                          <img class="z-20 mx-auto absolute left-auto right-auto w-72 scale-125" src="/ASSETS/infin8/infin8-001.png"></img>
                 
                        
                      }>

                      <Tween from={{bottom: "-700px"}} to={{bottom: "50px"}} />
                    </Timeline>
                  </Timeline>
                  <Timeline totalProgress={progress} paused>
                    <Timeline 
                      target={
                          <img class="mx-auto absolute left-auto right-auto w-72 origin-bottom scale-110" src="/ASSETS/infin8/infin8-002.png"></img>
                      }>

                      <Tween from={{rotate: "0deg", bottom: "-700px"}} to={{rotate: "30deg", bottom: "50px"}} />
                    </Timeline>
                  </Timeline>
                  <Timeline totalProgress={progress} paused>
                    <Timeline 
                      target={
                          <img class="mx-auto absolute left-auto right-auto w-72 origin-bottom scale-110" src="/ASSETS/infin8/infin8-003.png"></img>
                      }>

                      <Tween from={{rotate: "0deg", bottom: "-700px"}} to={{rotate: "-30deg", bottom: "50px"}} />
                    </Timeline>
                  </Timeline>
                  
                  <Timeline totalProgress={progress} paused>
                    <Timeline
                      target={
                        <div class="hero-gradient absolute z-30 bg-gradient-to-t from-slate-50 dark:from-slate-900 left-0 w-full h-32 "></div>
                      }>

                      <Tween from={{bottom: "-1000px"}} to={{bottom: "-20px"}} />

                    </Timeline>
                  </Timeline>
                  
                </div>
              )}

            </Scene>
          </Controller>
          
          <div class="mb-4 z-40 mt-10 relative mx-auto py-10 px-3 bg-white shadow-xl mb-20 text-white font-bold rounded-xl w-40 text-center">
              <img src="/ASSETS/logos/color/infin8.png"/>
          </div>

        <h1 class="text-slate-900 dark:text-white text-4xl md:text-5xl lg:text-6xl font-bold isolate"> 
          {/* Ultimate flexibility, <span class="text-cyan-500"> <break /> infinite possibilities. </span>  */}
          {/* {t("infin8.title")} */}
          {t("infin8.title", {returnObjects:true}).map(function(o,i) {
            if(o.startsWith("/s")) {
              return <span class="text-yellow-600"> {o.split("/s")[1]}</span>
            }
            else {  
              return <span><br/> {o} </span> 
            }
          })}
        </h1>
        
        <p class="text-slate-900 dark:text-gray-300 pt-5 px-5"> {t("infin8.description")}</p>

    </div>
  )
}

export default InfiniteMoney
