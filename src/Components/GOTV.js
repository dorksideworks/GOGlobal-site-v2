import React from 'react'
import { Controller } from 'react-scrollmagic'

function GOTV() {
  return (
    <div>
        
        <div class="mx-auto lg:pt-20 flex flex-col md:flex-row lg:flex-row wrapper">
            
            <div class="basis-1/2 py-20 text-left p-5 text-white">
                <div class="mb-4 mx-auto md:mx-0 lg:mx-0 py-2 px-5 bg-slate-800 text-gray-300 font-bold rounded-full w-40 text-center">
                    GOTV 
                </div>
                <h1 class=" text-center md:text-left lg:text-left text-4xl md:text-5xl lg:text-6xl font-bold"> 
                    <span class="text-rose-500">
                        Enjoy world-class entertainment 
                    </span> anytime, anywhere.
                </h1>
                <p class="pt-5 text-center md:text-left lg:text-left">Stream showstopping titles and get rewarded for your subscription.</p>
            </div>

            <div class="basis-1/2 p-5 relative">
                <img class="" src="/ASSETS/gotv/gotv-001.png" />
                {/* <img class="absolute top-0 scale-75 " src="/ASSETS/gotv/gotv-002.png" /> */}

            </div>
        </div>
      
    </div>
  )
}

export default GOTV
