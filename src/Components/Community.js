import React from 'react'
import {Controller, Scene} from 'react-scrollmagic';
import {Timeline, Tween} from 'react-gsap';
import { useTranslation } from 'react-i18next';
function Community() {
  const [t, i18n] = useTranslation("global");
  return (
    <div class="flex flex-col align-center justify-center lg:pb-10 mt-40 wrapper mx-auto" id="CommunitySection" >
        <div class="mb-4 py-2 px-5 bg-slate-800 mx-auto text-gray-300 font-bold rounded-full">
        {t("gocommunity.tag")}
        </div>
        <h1 class="text-slate-900 dark:text-white text-4xl md:text-5xl lg:text-6xl font-bold"> 
         {/* <span class="text-cyan-500">  Grow and thrive  </span> <br/> together as a community. */}
         {t("gocommunity.title", {returnObjects:true}).map(function(o,i) {
            if(o.startsWith("/s")) {
              return <div><span class="text-cyan-500"> {o.split("/s")[1]}</span></div>
            }
            else {  
              return <div> <span> {o} </span> </div>
            }
          })}

        </h1>

        <p class="text-slate-900 dark:text-gray-300 pt-5 w-full lg:w-1/2 mx-auto"> {t("gocommunity.description")}</p>

        <div class="flex flex-col gap-5 relative mt-10 rotate-3 ">

          <Controller>
              <Scene duration={900} triggerHook={0.5} triggerElement="#CommunitySection">
                  {(progress)=>(
                    <div class=" flex flex-col gap-5 relative wrapper">
                    <Timeline totalProgress={progress} paused >
                      <Timeline target={
                        <div class="flex flex-row gap-5 relative">
                          <img src="/ASSETS/community/community-001.png"/>
                          <img src="/ASSETS/community/community-002.png"/>
                          <img src="/ASSETS/community/community-003.png"/>
                          <img src="/ASSETS/community/community-004.png"/>
                          <img src="/ASSETS/community/community-005.png"/>
                          <img src="/ASSETS/community/community-006.png"/>
                        </div>
                        
                      }>
                        <Tween from={{ left: "-3000px" }} to={{ left: "-200px"}} />
                      </Timeline>
                    </Timeline>

                    <Timeline totalProgress={progress} paused >
                      <Timeline target={
                        <div class="flex flex-row gap-5 relative">
                          <img src="/ASSETS/community/community-007.png"/>
                          <img src="/ASSETS/community/community-008.png"/>
                          <img src="/ASSETS/community/community-009.png"/>
                          <img src="/ASSETS/community/community-010.png"/>
                          <img src="/ASSETS/community/community-011.png"/>
                          <img src="/ASSETS/community/community-012.png"/>
                        </div>
                        
                      }>
                        <Tween from={{ left: "3000px" }} to={{ left: "-1000px"}} />
                      </Timeline>
                    </Timeline>
                    </div>
                    
                  )}
              </Scene>

          </Controller>
          
          {/* <div class="flex flex-row gap-5 relative">
            <img src="/ASSETS/community/community-007.png"/>
            <img src="/ASSETS/community/community-008.png"/>
            <img src="/ASSETS/community/community-009.png"/>
            <img src="/ASSETS/community/community-010.png"/>
            <img src="/ASSETS/community/community-011.png"/>
            <img src="/ASSETS/community/community-012.png"/>
          </div> */}
        </div>

    </div>
  )
}

export default Community
