import React from 'react'
import { Controller } from 'react-scrollmagic'
import { useTranslation } from 'react-i18next'
function GOTV() {

  const [t, i18n] = useTranslation("global");

  return (
    <div>
        
        <div class="mx-auto lg:pt-20 flex flex-col md:flex-row lg:flex-row wrapper">
            
            <div class="basis-1/2 py-20 text-left p-5 text-white">
                <div class="mb-4 mx-auto md:mx-0 lg:mx-0 py-2 px-5 bg-slate-800 text-gray-300 font-bold rounded-full w-40 text-center">
                    {t("gotv.tag")}
                </div>
                <h1 class=" text-center md:text-left lg:text-left text-4xl md:text-5xl lg:text-5xl font-bold"> 
                    {t("gotv.title", {returnObjects:true}).map(function(o,i) {
                        if(o.startsWith("/s")) {
                            return <span class="text-cyan-500"> {o.split("/s")[1]}</span>
                        }
                        else {  
                            return <span> {o} </span> 
                        }
                    })}
                </h1>
                <p class="pt-5 text-center md:text-left lg:text-left"> {t("gotv.description")} </p>
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
