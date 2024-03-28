import React from 'react'

function GOFoundation() {
  return (
    <div id="FoundationSection" class="flex flex-col align-center justify-center lg:pb-10 mt-40">
        <div class="mb-4 py-2 px-5 bg-slate-800 mx-auto text-gray-300 font-bold rounded-full">
           GO FOUNDATION
        </div>
        <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-bold px-5"> 
         <span class="text-cyan-500">  Changing Lives  </span> by Giving Back
        </h1>
        <p class="text-gray-300 pt-5"> With over 200,000 active members across 4 continents, GO Global provides opportunities for people worldwide.</p>

        <div class="wrapper flex flex-col md:flex-row lg:flex-row mx-auto gap-10 md:gap-3 lg:gap-3 mt-20">
          <div class="relative group  hover:bg-slate-700 duration-500 basis-1/2 bg-slate-800 rounded-xl overflow-hidden">
            <img class="grayscale  duration-500 group-hover:grayscale-0 group-hover:scale-110" src="/ASSETS/gofoundation/foundation-001.png"></img>
            <div class="absolute w-full duration-500 p-5 -bottom-full text-left isolate group-hover:bottom-0"> 
              <h1 class="text-cyan-400 text-2xl font-bold ">The Good Shepherd Sisters</h1>
              <p class="text-gray-400 text-sm md:text-md lg:text-md"> It is a non-profit organization dedicated to developing the quality of life of all those in need regardless of their religious affiliation.</p>
              <button class="mt-3 bg-cyan-500 py-2 px-4 rounded-full text-sm text-white font-bold"> LEARN MORE</button>
            </div>
          </div>

          <div class="relative group  hover:bg-slate-700 duration-500 basis-1/2 bg-slate-800 rounded-xl overflow-hidden">
            <img class="grayscale  duration-500 group-hover:grayscale-0 group-hover:scale-110" src="/ASSETS/gofoundation/foundation-002.png"></img>
            <div class="absolute w-full duration-500 p-5 -bottom-full text-left isolate group-hover:bottom-0"> 
              <h1 class="text-cyan-400 text-2xl font-bold ">Boğaziçi Özel Eğitim</h1>
              <p class="text-gray-400 text-sm md:text-md lg:text-md"> It is a non-profit organization dedicated to developing the quality of life of all those in need regardless of their religious affiliation.</p>
              <button class="mt-3 bg-cyan-500 py-2 px-4 rounded-full text-sm text-white font-bold"> LEARN MORE</button>
            </div>
          </div>
          
        </div>

    </div>
  )
}

export default GOFoundation
