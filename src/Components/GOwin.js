import React, {useEffect} from 'react';

import {useTranslation} from 'react-i18next';
import {Tween, Timeline} from 'react-gsap';
import {Controller, Scene} from 'react-scrollmagic';

function GOwin() {

    return(
        <div class="bg-black py-52">
            <div class="wrapper flex sm:flex-col lg:flex-row mx-auto">
                <div class="flex items-center flex-col justify-center md:mb-52 sm:mb-52">
                    <div class="self-start  mb-4 relative p-3 py-10 bg-slate-900 text-white font-bold rounded-xl w-40 text-left">
                        <img src="/ASSETS/logos/color/gowin-logo.png"/>
                    </div>
                    <h1 class="mt-8 text-5xl text-white font-bold text-left">Welcome to the <span class="gowin-highlight">Future of Affiliate Online Gaming</span></h1>
                    <p class="text-white text-left pt-8 sm:pr-0 lg:pr-52"> For the first time ever in the network marketing industry you can be part of a world-class online gaming platform that allows you to play LIVE games and tournaments with players from all over the world. Powered by some of the biggest regulated game developers in the world like Pragmatic Play, Evolution and Play’n GO, you can experience the thrill of winning big in games such as baccarat, poker, slots and roulette from the comfort of your own home.</p>

                    <div class="self-start">
                        <h1 class="text-lg text-gray-400 font-bold text-left pt-10 pb-5"> POWERED BY:</h1>
                        <div class="flex flex-row gap-5 gowin-dev">
                            <div class="bg-slate-900 p-5 rounded-lg">
                                <img class="duration-500 grayscale hover:grayscale-0 " src="/ASSETS/gowin/pragmatic.png"/>
                            </div><div class="bg-slate-900 p-5 rounded-lg">
                                <img class="duration-500 grayscale hover:grayscale-0 " src="/ASSETS/gowin/playngo.png"/>
                            </div><div class="bg-slate-900 p-5 rounded-lg">
                                <img class="duration-500 grayscale hover:grayscale-0 " src="/ASSETS/gowin/evolution.png"/>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <div>

                        <img src="/ASSETS/gowin/gowin-phone-2.png" class="absolute phone-2 z-20"/>

                        <img src="/ASSETS/gowin/coin-01.png" class="absolute scale-50 coin-1 z-20 " />
                        <img src="/ASSETS/gowin/gowin-phone-1.png" class="absolute phone-1 z-20"/>

                        <img src="/ASSETS/gowin/coin-2.png" class="absolute coin-2 z-20"/>
                        <img src="/ASSETS/gowin/coin-3.png" class="absolute coin-3 z-20"/>
                        <img src="/ASSETS/gowin/coin-4.png" class="absolute coin-4 z-20"/>
                        <img src="/ASSETS/gowin/coin-5.png" class="absolute coin-5 z-20"/>
                        <img src="/ASSETS/gowin/coin-6.png" class="absolute coin-6 z-20"/>
                    </div>
                    <img src="/ASSETS/gowin/gowin-bg.png" class="scale-150 z-1"/>
                </div>
            </div>
        </div>
    )
}

export default GOwin