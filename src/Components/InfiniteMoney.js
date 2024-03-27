import React from 'react'

import {Controller, Scene} from 'react-scrollmagic';
import {Timeline, Tween} from 'react-gsap';

function InfiniteMoney() {
  return (
    
    <div class="flex flex-col align-center justify-center lg:pb-10 relative">
          <Controller class="overflow-hidden relative">
            <Scene duration={600} indicators={true} triggerHook={0.75} pin>
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
                        <div class="hero-gradient absolute z-50 bg-gradient-to-t from-slate-900 left-0 w-full h-32 isolate"></div>
                      }>

                      <Tween from={{bottom: "-1000px"}} to={{bottom: "-20px"}} />

                    </Timeline>
                  </Timeline>
                  
                </div>
              )}

            </Scene>
          </Controller>
          
        <div class="mb-4 mt-5 py-2 px-5 bg-slate-800 mx-auto text-gray-300 font-bold rounded-full isolate">
           INFIN8 MONEY 
        </div>

        <h1 class="text-white text-6xl font-bold isolate"> 
          Ultimate flexibility, <span class="text-cyan-500"> <br /> infinite possibilities. </span> 
        </h1>
        
        <p class="text-gray-300 pt-5"> Experience the world of luxury and seamlessly spend your cryptocurrency in the real world without limits.</p>

    </div>
  )
}

export default InfiniteMoney
