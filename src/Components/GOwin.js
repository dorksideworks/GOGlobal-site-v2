import React, {useEffect} from 'react';

import {useTranslation} from 'react-i18next';
import {Tween, Timeline} from 'react-gsap';
import {Controller, Scene} from 'react-scrollmagic';

import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css"
import Glide from '@glidejs/glide'

function GOwin() {
    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        const gs = new Glide('.glide-gowin', {
            type: 'carousel',
            perView: 9,
            autoplay: true,
            swipeThreshold: false,
            dragThreshold: false,
            rewind: true,
            gap: 10,
            focusAt: 'center',
            animationDuration: 5000,
            animationTimingFunc: "linear"
        }).mount();

        const handleResize = () => {
            if(window.innerWidth <= 500) {
                gs.update({perView:2})
            }
            else if(window.innerWidth > 500 && window.innerWidth <= 900) {
                gs.update({perView: 3})
            }
            else if(window.innerWidth > 900 && window.innerWidth <= 1300) {
                gs.update({perView: 4})
            }
            else if(window.innerWidth > 1300 && window.innerWidth <= 1800) {
                gs.update({perView: 6})
            }
        }

        window.addEventListener("load", handleResize);
        window.addEventListener("resize", handleResize);
    }, )

    return(
        <div class="bg-slate-900 pt-20 pb-20 xl:pb-0 relative z-10">
            <div class="wrapper flex flex-col-reverse sm:flex-col xl:flex-row mx-auto">
                <div class="flex items-center flex-col justify-center md:mb-52 sm:mb-52">
                    <div class="self-start  mb-4 relative p-3 py-10 bg-slate-800 text-white font-bold rounded-xl w-40 text-left">
                        <img src="/ASSETS/logos/color/gowin-logo.png"/>
                    </div>
                    
                    <h2 class="mt-8 text-5xl text-white font-bold text-left">
                        {t("gowin.title", {returnObjects:true}).map(function(o,i) {

                            if(o.startsWith("/s/br")) {
                                return <span class="gowin-highlight"><br/> {o.split("/s/br")[1]}</span>
                            }
                            if(o.startsWith("/s")) {
                                return <span class="gowin-highlight"> {o.split("/s")[1]}</span>
                            }
                            if(o.startsWith("/br")) {
                                return <span><br/> {o.split("/br")[1]}</span>
                            }


                            else {  
                                return <span> {o} </span> 
                            }
                        })}
                    </h2>
                    {t("gowin.description", {returnObjects:true}).map(function(o, i) {
                        return <p class="text-white text-left pt-8 sm:pr-0 lg:pr-42"> {o} </p>
                    })}
                    {/* <p class="text-white text-left pt-8 sm:pr-0 lg:pr-42"></p> */}

                    {/* <p class="text-white text-left pt-8 sm:pr-0 lg:pr-42" >
                        Powered by some of the biggest regulated game developers in the world like <b>Pragmatic Play, Evolution and Play’n GO,</b> you can experience the thrill of winning big in games such as baccarat, poker, slots and roulette from the comfort of your own home.
                    </p> */}

                    <div class="self-start">
                        
                        {/* <div class="flex flex-row gap-5 gowin-dev">
                            <div class="bg-slate-900 p-5 rounded-lg">
                                <img class="duration-500 grayscale hover:grayscale-0 " src="/ASSETS/gowin/pragmatic.png"/>
                            </div><div class="bg-slate-900 p-5 rounded-lg">
                            <img class="duration-500 grayscale hover:grayscale-0 " src="/ASSETS/gowin/playngo.png"/>
                            </div><div class="bg-slate-900 p-5 rounded-lg">
                                <img class="duration-500 grayscale hover:grayscale-0 " src="/ASSETS/gowin/evolution.png"/>
                            </div>
                            
                            
                        </div> */}
                    </div>
                </div>
                <div class="relative xl:scale-100 z-50 scale-75 lg:top-0 xl:top-0 top-0 xl:left-0 -left-10">
                    <div>

                        <img alt=" Play now at GO WIN" src="/ASSETS/gowin/gowin-phone-2.png" class="absolute phone-2 z-20"/>

                        <img alt="Get chance to win at GOWIN" src="/ASSETS/gowin/coin-01.png" class="absolute scale-50 coin-1 z-20 " />
                        <img alt="Sports Betting only at GOwin.cash" src="/ASSETS/gowin/gowin-phone-1.png" class="relative xl:absolute phone-1 z-20"/>

                        <img alt="Get chance to win at GOWIN" src="/ASSETS/gowin/coin-2.png" class="absolute coin-2 z-20"/>
                        <img alt="Get chance to win at GOWIN" src="/ASSETS/gowin/coin-3.png" class="absolute coin-3 z-40"/>
                        <img alt="Get chance to win at GOWIN" src="/ASSETS/gowin/coin-4.png" class="absolute coin-4 z-20"/>
                        <img alt="Get chance to win at GOWIN" src="/ASSETS/gowin/coin-5.png" class="absolute coin-5 z-20"/>
                        <img alt="Get chance to win at GOWIN" src="/ASSETS/gowin/coin-6.png" class="absolute coin-6 z-20"/>
                    </div>
                    <img alt="Best entertainment platform GOWIN" src="/ASSETS/gowin/gowin-bg.png" class="absolute xl:relative top-0 scale-100 w-100 z-1"/>
                </div>
            </div>
            <div class="gliders wrapper mx-auto relative xl:-top-52 ">
                <div class="gowin-gradient absolute z-30 bg-gradient-to-r from-slate-900 left-0 top-0 gotv-gradient"></div>
                <div class="gowin-gradient absolute z-30 bg-gradient-to-l from-slate-900 right-0 top-0 gotv-gradient"></div>
                
                <h2 class="text-lg text-gray-400 font-bold text-center pt-10 pb-5"> {}</h2>
                        
                            <div class="glide-gowin">
                                <div class="glide__track text-white text-2xl" data-glide-el="track">
                                    <ul class="glide__slides">
                                        <li class="glide__slide">
                                            <div class="logo-box bg-slate-900 p-5 rounded-lg flex flex-col">
                                                <img src="/ASSETS/gowin/pragmatic.png"/>
                                                <h2 class="font-bold text-sm pt-5 text-white"> PRAGMATIC </h2>
                                            </div>
                                        </li>
                                        <li class="glide__slide">
                                            <div class="logo-box bg-slate-900 p-5 rounded-lg flex flex-col">
                                                <img src="/ASSETS/gowin/playngo.png"/>
                                                
                                                <h2 class="font-bold text-sm pt-5 text-white"> PLAY N GO </h2>

                                            </div>
                                        </li>

                                        <li class="glide__slide">
                                            <div class="logo-box bg-slate-900 p-5 rounded-lg flex flex-col">
                                                <img src="/ASSETS/gowin/evolution.png"/>
                                                
                                                <h2 class="font-bold text-sm pt-5 text-white"> EVOLUTION </h2>

                                            </div>
                                        </li>
                                        <li class="glide__slide">
                                            <div class="logo-box bg-slate-900 p-5 rounded-lg flex flex-col">
                                                <img src="/ASSETS/gowin/betsolutions.png"/>
                                                
                                                <h2 class="font-bold text-sm pt-5 text-white"> BETSOLUIONS </h2>

                                            </div>
                                        </li><li class="glide__slide">
                                            <div class="logo-box bg-slate-900 p-5 rounded-lg flex flex-col">
                                                <img src="/ASSETS/gowin/reelplay.png"/>
                                                
                                                <h2 class="font-bold text-sm pt-5 text-white"> REELPLAY </h2>

                                            </div>
                                        </li><li class="glide__slide">
                                            <div class="logo-box bg-slate-900 p-5 rounded-lg flex flex-col">
                                                <img src="/ASSETS/gowin/readyplaygaming.png"/>
                                                
                                                <h2 class="font-bold text-xs pt-5 text-white"> READY PLAY </h2>

                                            </div>
                                        </li>
                                        <li class="glide__slide">
                                            <div class="logo-box bg-slate-900 p-5 rounded-lg flex flex-col">
                                                <img src="/ASSETS/gowin/pateplay.png"/>
                                                
                                                <h2 class="font-bold text-xs pt-5 text-white"> PATEPLAY </h2>

                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
        </div>
    )
}

export default GOwin