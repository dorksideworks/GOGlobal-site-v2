import React from 'react'

import {Controller, Scene} from 'react-scrollmagic';
import {Timeline, Tween} from 'react-gsap';

import { Trans, useTranslation } from 'react-i18next';
function InfiniteMoney() {

  const [t, i18n] = useTranslation("global");

  return (
    
    <div class="flex flex-col align-center justify-center lg:pb-10 relative">
          <Controller class="overflow-hidden relative">
            <Scene duration={600}  triggerHook={0.75} pin>
              {(progress) => (
                <div class=" flex flex-row justify-center align-center w-full py-5 mx-auto relative">
                  <Timeline totalProgress={progress} paused>
                    <Timeline 
                      target={
                          <img class="mx-auto absolute left-auto right-auto w-72 z-50" src="/ASSETS/infin8/infin8-001.png"></img>
                 
                        
                      }>

                      <Tween from={{bottom: "-1000px"}} to={{bottom: "0px"}} />
                    </Timeline>
                  </Timeline>
                  <Timeline totalProgress={progress} paused>
                    <Timeline 
                      target={
                          <img class="mx-auto absolute left-auto right-auto w-72 origin-bottom scale-90" src="/ASSETS/infin8/infin8-002.png"></img>
                      }>

                      <Tween from={{rotate: "0deg", bottom: "-1000px"}} to={{rotate: "30deg", bottom: "50px"}} />
                    </Timeline>
                  </Timeline>
                  <Timeline totalProgress={progress} paused>
                    <Timeline 
                      target={
                          <img class="mx-auto absolute left-auto right-auto w-72 origin-bottom scale-90" src="/ASSETS/infin8/infin8-003.png"></img>
                      }>

                      <Tween from={{rotate: "0deg", bottom: "-1000px"}} to={{rotate: "-30deg", bottom: "50px"}} />
                    </Timeline>
                  </Timeline>
                  
                  <Timeline totalProgress={progress} paused>
                    <Timeline
                      target={
                        <div class="hero-gradient absolute z-50 bg-gradient-to-t from-slate-50 dark:from-slate-900 left-0 w-full h-32 isolate"></div>
                      }>

                      <Tween from={{bottom: "-1000px"}} to={{bottom: "-20px"}} />

                    </Timeline>
                  </Timeline>
                  
                </div>
              )}

            </Scene>
          </Controller>
          
        <div class="mb-4 mt-5 py-2 px-5 bg-slate-800 mx-auto text-gray-300 font-bold rounded-full isolate">
           {t("infin8.tag")}
        </div>

        <h1 class="text-slate-900 dark:text-white text-4xl md:text-5xl lg:text-6xl font-bold isolate"> 
          {/* Ultimate flexibility, <span class="text-cyan-500"> <break /> infinite possibilities. </span>  */}
          {/* {t("infin8.title")} */}
          {t("infin8.title", {returnObjects:true}).map(function(o,i) {
            if(o.startsWith("/s")) {
              return <div><span class="text-cyan-500"> {o.split("/s")[1]}</span></div>
            }
            else {  
              return <div> <br/> <span> {o} </span> </div>
            }
          })}
        </h1>
        
        <p class="text-slate-900 dark:text-gray-300 pt-5 px-5"> {t("infin8.description")}</p>

    </div>
  )
}

export default InfiniteMoney
