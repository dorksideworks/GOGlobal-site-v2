
import React from 'react';
import { Controller, Scene} from 'react-scrollmagic';
import { useTranslation } from 'react-i18next';

import {Tween, Timeline} from 'react-gsap';

function Compensation() {

    return(
        <div class="py-40   ">

            <div class="wrapper mx-auto flex flex-col ">
                <h1 class="font-bold text-6xl dark:text-white text-slate-900" > <span class="text-cyan-500">The Most Powerful</span><br/> Opportunity in the world</h1>
                <p class="mt-5 dark:text-white text-slate-900">Unlimited earning potential with our affiliate program. Simple, powerful, limitless income potential!</p>
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
                        <h1 class="font-bold text-4xl z-50 relative">GO <br/><span class="text-cyan-500">Direct</span></h1>
                        <p class="mt-5">Earn 5% - 20% on every <br/>Direct Sponsored GO member.</p>

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
                        <h1 class="font-bold text-4xl z-50 ">GO <br/><span class="text-cyan-500"> Target</span></h1>
                        <p class="mt-5 z-50">Earn a percentage of the <br/> company’s weekly global revenue.</p>
                        
                    </div>

                    <div class="basis-1/3 text-left comp-card p-5 rounded-xl overflow-hidden">
                        <div class="flex flex-row items-start justify-between pb-20 pt-5">

                        <div class="comp-circ bg-cyan-500 relative rounded-full flex flex-row items-center justify-center">

                            <img class="p-5" src="/ASSETS/compensation/rank.png"/>
                            <div class="absolute inner-circ bg-cyan-500 rounded-full">
                            </div>
                        </div>

                        <div class="label rounded-full bg-cyan-500 py-1 px-5 text-white font-bold flex flex-col items-center justify-center text-center">
                            WEEKLY
                        </div>

                        </div>
                        <h1 class="font-bold text-4xl ">GO <br/><span class="text-cyan-500">Rank</span></h1>
                        <p class="mt-5">Earn special rewards and <br/> recognition for new ranks.</p>
    
                    </div>
                </div>

            </div>

        </div>
    )

}

export default Compensation