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
      <Scene duration={600} indicators={true} triggerHook={0} pin>

      {(progress) => (
        
        <div class="relative isolate px-6 pt-14 lg:px-8">
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
                <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Welcome to GO Global</h1>
                {/* <p class="mt-6 text-lg leading-8 text-white">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p> */}
                {/* <div class="mt-10 flex items-center justify-center gap-x-6">
                  <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                  <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
                </div> */}
                
                <div class="mt-9"> 
                  <Timeline totalProgress={progress} paused>
                    
                    <Timeline
                      target={
                        <img
                        ref={el => {laptopItem = el}}
                        class=" w-100" src='/ASSETS/hero/hero-laptop.png'
                      
                        ></img>
                      }
                    >
                      <Tween from={{ scale: 7 }} to={{ scale: 1 }} />
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
      <div class="flex flex-row font-bold py-20 justify-center text-white  mx-auto w-1/2">
        <div class="px-5">
          <h1 class="text-6xl">150k+</h1>
          <span>Students Educated</span>
        </div>
        <div class="px-5">
          <h1 class="text-6xl">1M+</h1>
          <span>Users Worldwide</span>
        </div>
        <div class="px-5">
          <h1 class="text-6xl">150k+</h1>
          <span>Students Educated</span>
        </div>
      </div>
      
    </div>

  )
}

export default Hero
