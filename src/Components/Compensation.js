
import React from 'react';
import { Controller, Scene} from 'react-scrollmagic';
import { useTranslation } from 'react-i18next';

import {Tween, Timeline} from 'react-gsap';

function Compensation() {
    const [t, i18n] = useTranslation("global");

    return(
        <div id="CompensationSection" class="py-40   ">

            <div class="wrapper mx-auto flex flex-col ">
                <h2 class="font-bold text-6xl dark:text-white text-slate-900" > 
                    {t("compensation.title", {returnObjects:true}).map(function(o,i) {

                            if(o.startsWith("/s/br")) {
                                return <span class="text-cyan-500"><br/> {o.split("/s/br")[1]}</span>
                            }
                            if(o.startsWith("/s")) {
                                return <span class="text-cyan-500"> {o.split("/s")[1]}</span>
                            }
                            if(o.startsWith("/br")) {
                                return <span><br/> {o.split("/br")[1]}</span>
                            }


                            else {  
                                return <span> {o} </span> 
                            }
                    })}
                </h2>
                <p class="mt-5 dark:text-white text-slate-900">{t("compensation.description")}</p>
                <div class="flex flex-col xl:flex-row mt-10 gap-10">

                    <div class="basis-1/3 text-left comp-card p-5 rounded-xl overflow-hidden">
                        <div class="flex flex-row items-start justify-between pb-20 pt-5">

                            <div class="comp-circ bg-cyan-500 relative rounded-full flex flex-row items-center justify-center">

                                <img class="p-5" src="/ASSETS/compensation/direct.png"/>
                                <div class="absolute inner-circ bg-cyan-500 rounded-full">
                                </div>
                            </div>

                            <div class="label rounded-full bg-cyan-500 py-1 px-5 text-white font-bold flex flex-col items-center justify-center text-center">
                                WEEKLY
                            </div>
                            
                        </div>
                        <h2 class="font-bold text-4xl z-50 relative">
                            {t("compensation.go_direct.title", {returnObjects:true}).map(function(o,i) {

                            if(o.startsWith("/s/br")) {
                                return <span class="text-cyan-500"><br/> {o.split("/s/br")[1]}</span>
                            }
                            if(o.startsWith("/s")) {
                                return <span class="text-cyan-500"> {o.split("/s")[1]}</span>
                            }
                            if(o.startsWith("/br")) {
                                return <span><br/> {o.split("/br")[1]}</span>
                            }


                            else {  
                                return <span> {o} </span> 
                            }
                            })}

                        </h2>
                        <p class="mt-5">{t("compensation.go_direct.description")}</p>

                    </div>

                    <div class="basis-1/3 text-left comp-card p-5 rounded-xl overflow-hidden relative">
                        <div class="flex flex-row items-start justify-between pb-20 pt-5">
                        {/* <img class="absolute -top-5 scale-150 -right-32" src="/ASSETS/compensation/target-bg.png"/> */}
                        <div class="comp-circ bg-cyan-500 relative rounded-full flex flex-row items-center justify-center z-30">

                            <img class="p-5" src="/ASSETS/compensation/target.png"/>
                            <div class="absolute inner-circ bg-cyan-500 rounded-full">
                            </div>
                        </div>

                        <div class="label rounded-full bg-cyan-500 py-1 px-5 text-white font-bold flex flex-col items-center justify-center text-center z-30">
                            WEEKLY
                        </div>

                        </div>
                        <h2 class="font-bold text-4xl z-50 ">
                            {t("compensation.go_target.title", {returnObjects:true}).map(function(o,i) {

                            if(o.startsWith("/s/br")) {
                                return <span class="text-cyan-500"><br/> {o.split("/s/br")[1]}</span>
                            }
                            if(o.startsWith("/s")) {
                                return <span class="text-cyan-500"> {o.split("/s")[1]}</span>
                            }
                            if(o.startsWith("/br")) {
                                return <span><br/> {o.split("/br")[1]}</span>
                            }


                            else {  
                                return <span> {o} </span> 
                            }
                            })}
                        </h2>
                        <p class="mt-5 z-50">{t("compensation.go_target.description")}</p>
                        
                    </div>

                    <div class="basis-1/3 text-left comp-card p-5 rounded-xl overflow-hidden">
                        <div class="flex flex-row items-start justify-between pb-20 pt-5">

                        <div class="comp-circ bg-cyan-500 relative rounded-full flex flex-row items-center justify-center">

                            <img class="p-5" src="/ASSETS/compensation/rank.png"/>
                            <div class="absolute inner-circ bg-cyan-500 rounded-full">
                            </div>
                        </div>

                        <div class="label rounded-full bg-cyan-500 py-1 px-5 text-white font-bold flex flex-col items-center justify-center text-center">
                            MONTHLY
                        </div>

                        </div>
                        <h2 class="font-bold text-4xl ">
                            {t("compensation.go_rank.title", {returnObjects:true}).map(function(o,i) {

                            if(o.startsWith("/s/br")) {
                                return <span class="text-cyan-500"><br/> {o.split("/s/br")[1]}</span>
                            }
                            if(o.startsWith("/s")) {
                                return <span class="text-cyan-500"> {o.split("/s")[1]}</span>
                            }
                            if(o.startsWith("/br")) {
                                return <span><br/> {o.split("/br")[1]}</span>
                            }


                            else {  
                                return <span> {o} </span> 
                            }
                            })}
                        </h2>
                        <p class="mt-5">{t("compensation.go_rank.description")}</p>
    
                    </div>
                </div>

            </div>

        </div>
    )

}

export default Compensation