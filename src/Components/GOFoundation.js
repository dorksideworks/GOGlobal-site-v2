import React from 'react'

function GOFoundation() {
  return (
    <div class="flex flex-col align-center justify-center lg:pb-10 mt-40">
        <div class="mb-4 py-2 px-5 bg-slate-800 mx-auto text-gray-300 font-bold rounded-full">
           GO FOUNDATION
        </div>
        <h1 class="text-white text-6xl font-bold"> 
         <span class="text-cyan-500">  Changing Lives  </span> by Giving Back
        </h1>
        <p class="text-gray-300 pt-5"> Contribute to a greater cause and help those in need. Together, we can change lives</p>

        <div class="wrapper flex flex-row mx-auto gap-3 mt-20">
          <div class="basis-1/2 bg-slate-800 rounded-xl overflow-hidden">
            <img src="/ASSETS/gofoundation/foundation-001.png"></img>
            {/* <h1>Boğaziçi Özel Eğitim</h1> */}
          </div>
          <div class="basis-1/2 bg-slate-800  rounded-xl overflow-hidden">
            <img src="/ASSETS/gofoundation/foundation-002.png"></img>
          </div>
        </div>

    </div>
  )
}

export default GOFoundation
