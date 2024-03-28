import React, {useRef, useEffect} from 'react'

import {Tween, Timeline, Power3} from 'react-gsap';
import { Controller, Scene} from 'react-scrollmagic';

function Hero() {

  let laptopItem = useRef(null);

  useEffect (() => {
    console.log(laptopItem);
  });


  return (
    <div>
      <Controller>
      <Scene duration={600} triggerHook={0} pin>

      {(progress) => (
        
        <div class="relative isolate px-6 pt-5 md:pt-14 lg:pt-14 lg:px-8 ">
          <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" ></div>
          </div>
          
          

          <div class="mx-auto max-w-2xl pt-20 sm:pt-20 lg:pt-40">
         
              <div class="hidden sm:mb-2 sm:flex sm:justify-center">
                <div class="relative rounded-full px-3 text-sm leading-6 text-gray-400 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Global Digital Solutions <a href="#" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                </div>
              </div>
                
              
              <div class="text-center">
                <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-0 md:mb-40 lg:mb-40">Welcome to <span class="text-cyan-500">GO Global</span> </h1>
                {/* <p class="mt-6 text-lg leading-8 text-white">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p> */}
                {/* <div class="mt-10 flex items-center justify-center gap-x-6">
                  <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                  <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
                </div> */}
                
                <div class="mt-9"> 
                  <Timeline totalProgress={progress} paused>
                    
                    <Timeline
                      target={
                        <img class="absolute hero-bg" src="Assets/hero/hero-bg2.png"/>
                      }
                    >
                      <Tween from={{ scale: 0, bottom: "-1000px", opacity: 0}} to={{ scale: 1, bottom: "0px", opacity: 1 }} />
                    </Timeline>
                  </Timeline>

                  <Timeline totalProgress={progress} paused>
                    
                    <Timeline
                      target={
                        <img
                        ref={el => {laptopItem = el}}
                        class=" w-100 relative" src='/ASSETS/hero/hero-laptop.png'
                      
                        ></img>
                      }
                    >
                      <Tween from={{ scale: 7 , bottom: "-300px"}} to={{ scale: 1 ,bottom:"0px"}} />
                    </Timeline>
                  </Timeline>


                  <Timeline totalProgress={progress} paused>
                    
                    <Timeline
                      target={
                        <div class="hero-gradient bg-gradient-to-t from-slate-900 absolute left-0 w-full h-32 isolate"></div>
                      }
                    >
                      <Tween from={{ bottom: "-1600px" }} to={{ bottom: "0px"}} />
                    </Timeline>
                  </Timeline>
                  
                </div>
                
              </div>
              
          </div>
          {/* <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" ></div>
          </div> */}
        </div>

        )}
      </Scene>
      </Controller>
      <div class="flex flex-col md:flex-row lg:flex-row font-bold py-20 lg:gap-0 gap-10 justify-center text-white mx-auto w-2/3 mg:w-1/2 lg:w-1/2 justify-around">
        <div class="px-5 basis-1/3 justify-center align-center items-center flex flex-col duration-500 hover:bg-slate-950">
          <h1 class="text-5xl  text-cyan-500">150k+</h1>
          <span>Students Educated</span>
        </div>
        <div class="breaker hidden md:relative lg:relative "></div>
        <div class="px-5 basis-1/3 justify-center align-center items-center flex flex-col  duration-500 hover:bg-gray-950">
          <h1 class="text-5xl  text-cyan-500">1M+</h1>
          <span>Users Worldwide</span>
        </div>

        <div class="breaker hidden md:relative lg:relative "></div>
        <div class="px-5 basis-1/3 justify-center align-center items-center flex flex-col  duration-500 hover:bg-gray-950" >
          <h1 class="text-5xl text-cyan-500">150k+</h1>
          <span>Students Educated</span>
        </div>
      </div>
      
    </div>

  )
}

export default Hero
