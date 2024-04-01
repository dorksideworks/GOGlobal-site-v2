import React from 'react'

import { useTranslation } from 'react-i18next'

function GOFoundation() {
  const [t, i18n] = useTranslation("global");

  return (
    <div id="FoundationSection" class="flex flex-col align-center justify-center lg:pb-10 mt-40">
        <div class="mb-4 py-2 px-5 bg-slate-800 mx-auto text-gray-300 font-bold rounded-full">
           {t("gofoundation.tag")}
        </div>
        <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-bold px-5"> 
         {/* <span class="text-cyan-500">  Changing Lives  </span> by Giving Back */}
         {t("gofoundation.title", {returnObjects:true}).map(function(o,i) {
            if(o.startsWith("/s")) {
              return <div><span class="text-cyan-500"> {o.split("/s")[1]}</span></div>
            }
            else {  
              return <div> <span> {o} </span> </div>
            }
          })}
        </h1>
        <p class="text-gray-300 pt-5 mx-auto md:w-1/2 lg:w-1/2"> {t("gofoundation.description")}</p>


        
        <div class="wrapper flex flex-col md:flex-row lg:flex-row mx-auto gap-10 md:gap-3 lg:gap-3 mt-20">
          {/* {t("gofoundation.foundations", {returnObjects: true}).map(function(obj,x) {
            return <h1 class="text-white font-bold"> {obj} </h1>
          })} */}
          {
            t("gofoundation.foundations", {returnObjects: true}).map(function(obj,x){
              return (
                <div class="relative group  hover:bg-slate-700 duration-500 basis-1/2 bg-slate-800 rounded-xl overflow-hidden">
                  <img class="grayscale  duration-500 group-hover:grayscale-0 group-hover:scale-110" src={obj.image}></img>
                  <div class="absolute w-full duration-500 p-5 -bottom-full text-left isolate group-hover:bottom-0"> 
                    <h1 class="text-cyan-400 text-2xl font-bold ">{obj.name}</h1>
                    <p class="text-gray-400 text-sm md:text-md lg:text-md"> {obj.description}</p>
                    <button class="mt-3 bg-cyan-500 py-2 px-4 rounded-full text-sm text-white font-bold"> {obj.button} </button>
                  </div>
                </div>
              )
            })
          }
          
        
          
        </div>

    </div>
  )
}

export default GOFoundation
