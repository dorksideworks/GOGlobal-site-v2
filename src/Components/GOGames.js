import React from 'react';
import {Controller, Scene} from 'react-scrollmagic';
import {useTranslation} from 'react-i18next';
import {Tween, Timeline} from 'react-gsap';

function GOGames() {

    const [t, i18n] = useTranslation("global");

    return(
        <div class="bg-black">

            
            <div class="wrapper flex flex-col justify-center items-center mx-auto">
                <img class="mx-auto" src="/ASSETS/gogames/gogames-bg.png"/>



            </div>
            <div class="wrapper relative -top-60 flex-col flex lg:pt-20 mx-auto ">
                                
                <div class="mb-4 relative mx-auto p-10 bg-slate-900 text-white font-bold rounded-xl w-40 text-center">
                    <img src="/ASSETS/logos/color/gogames.png"/>
                </div>
                <h1 class=" text-center text-4xl md:text-5xl lg:text-5xl font-bold text-white"> 
                The Future of Online Gaming
                </h1>
                <p class="pt-5 text-center text-white"> GO TV offers a wide range of on-demand content including blockbusters and A-List titles from around the world. </p>
                <div>
                    <div class="flex flex-col flex-wrap wrapper mx-auto">
                        <ul id="gogames-items" class="flex-row items-center justify-center flex flex-wrap gap-10 mx-auto pt-20 text-left">

                            <li class="flex flex-row text-white justify-center items-center gap-5  box-border">
                                <div class="icon bg-cyan-500 rounded-full"></div>
                                <p class="text-l basis-2/3">Opportunity to participate in the revenue share of the games</p>
                            </li>
                            
                            <li class="flex flex-row text-white justify-center items-center gap-5 box-border	">
                                <div class="icon bg-cyan-500 rounded-full"></div>
                                <p class="text-l basis-2/3">Live sports betting</p>
                            </li>
                            <li class="flex flex-row text-white justify-center items-center gap-5 box-border	 ">
                                <div class="icon bg-cyan-500 rounded-full"></div>
                                <p class="text-l basis-2/3">Social games</p>
                            </li>
                            <li class="flex flex-row text-white justify-center items-center gap-5 box-border	 ">
                                <div class="icon bg-cyan-500 rounded-full"></div>
                                <p class="text-l basis-2/3">The opportunity to be an executive producer in future games and participate in the revenue share of game sales</p>
                            </li>
                            <li class="flex flex-row text-white justify-center items-center gap-5 box-border	 ">
                                <div class="icon bg-cyan-500 rounded-full"></div>
                                <p class="text-l basis-2/3">Multiplayer Games</p>
                            </li>
                            <li class="flex flex-row text-white justify-center items-center gap-5 box-border	 ">
                                <div class="icon bg-cyan-500 rounded-full"></div>
                                <p class="text-l basis-2/3">Contests, Tournaments & Raffles</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GOGames