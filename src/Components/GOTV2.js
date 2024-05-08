import Reactm,{useEffect, useRef} from 'react'


import { useTranslation } from 'react-i18next';
import { UilAwardAlt, UilEnglishToChinese,UilFilm, UilClapperBoard, UilCoins } from '@iconscout/react-unicons'

import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css"
import Glide from '@glidejs/glide'

function GOTV2() {

    const [t, i18n] = useTranslation("global");

    const slider = useRef(null);
    
    useEffect(() => {

        let isDown = false;
        let startX;
        let scrollLeft;
        
        const g = new Glide('.glide', {
            type: 'carousel',
            perView: 7  ,
            autoplay: true,
            swipeThreshold: false,
            dragThreshold: false,
            rewind: true,
            gap: 5,
            focusAt: 'center',
            animationDuration: 5000,
            animationTimingFunc: "linear"
        }).mount();

        const handleResize = () => {
            if(window.innerWidth <= 500) {
                g.update({perView:1})
            }
            else if(window.innerWidth > 500 && window.innerWidth <= 900) {
                g.update({perView: 2})
            }
            else if(window.innerWidth > 900 && window.innerWidth <= 1300) {
                g.update({perView: 3})
            }
            else if(window.innerWidth > 1300 && window.innerWidth <= 1800) {
                g.update({perView: 4})
            }
        }

        window.addEventListener("load", handleResize);
        window.addEventListener("resize", handleResize);
        // if(slider != null) {
        //         slider.current.addEventListener('mousedown', (e) => {
        //             isDown = true;
        //             slider.current.classList.add('active');
        //             startX = e.pageX - slider.current.offsetLeft;
        //             scrollLeft = slider.current.scrollLeft;
                    
        //         });
        //         slider.current.addEventListener('mouseleave', () => {
        //             isDown = false;
        //             slider.current.classList.remove('active');
        //         });
        //         slider.current.addEventListener('mouseup', () => {
        //             isDown = false;
        //             slider.current.classList.remove('active');
        //         });
        //         slider.current.addEventListener('mousemove', (e) => {
        //             if(!isDown) return;
        //             e.preventDefault();
        //             const x = e.pageX - slider.current.offsetLeft;
        //             console.log(x);
        //             const walk = (x - startX) * 0.8; 
        //             slider.current.scrollLeft = scrollLeft - walk;
        //             console.log("walk is : " + walk);
        //             console.log("x is: " + x);
        //         });
        // }
    }, [slider])

    return(
        <div class="bg-black pt-52 relative">
            <div class="hero-gradient absolute z-30 bg-gradient-to-r from-black left-0 top-0 gotv-gradient"></div>
            <div class="hero-gradient absolute z-30 bg-gradient-to-l from-black right-0 top-0 gotv-gradient"></div>
            
            <div class="flex flex-row justify-center items-center pb-20">
                <img class="mx-auto absolute" src="/ASSETS/gotv/bg.png" />
                <div class="glide">
                    <div class="glide__track text-white text-2xl" data-glide-el="track">
                        <ul class="glide__slides">
                            <li class="glide__slide">
                                <img class="item"src="/ASSETS/gotv/posters/spiderman1.jpg" />
                            </li>
                            <li class="glide__slide">
                                <img class="item"src="/ASSETS/gotv/posters/ghostbusters2.jpg" />
                            </li>
                            <li class="glide__slide">
                                <img class="item"src="/ASSETS/gotv/posters/karatekid3.jpg" />
                            </li>
                            <li class="glide__slide">
                                <img class="item"src="/ASSETS/gotv/posters/fewgoodmen.jpg" />
                            </li>
                            <li class="glide__slide">
                                <img class="item"src="/ASSETS/gotv/posters/flatliners.jpg" />
                            </li>
                            <li class="glide__slide">
                                <img class="item"src="/ASSETS/gotv/posters/mygirl.jpg" />
                            </li>

                            <li class="glide__slide">
                                <img class="item"src="/ASSETS/gotv/posters/ghostbusters1.jpg" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="wrapper relative flex-col flex lg:pt-20 mx-auto ">                 
                <div class="mb-4 relative mx-auto p-10 bg-slate-900 text-white font-bold rounded-xl w-40 text-center">
                    <img src="/ASSETS/logos/color/gotv.png"/>
                </div>
                <h1 class=" text-center text-4xl md:text-5xl lg:text-5xl font-bold text-white"> 
                    {t("gotv.title", {returnObjects:true}).map(function(o,i) {
                        if(o.startsWith("/s")) {
                            return <span class="text-red-500"> {o.split("/s")[1]}</span>
                        }
                        else {      
                            return <span> {o} </span> 
                        }
                    })}
                </h1>
                <p class="pt-5 text-center text-white"> {t("gotv.description")} </p>
                <div class="pt-20">
                    <h1 class="text-white font-bold text-5xl">HOW IT WORKS</h1>
                    <div class="flex flex-col flex-wrap wrapper mx-auto">
                        <ul class="flex-row gap-20 items-center justify-center flex flex-wrap mx-auto pt-20 text-left">
                            <li class="flex flex-row text-white justify-center items-center gap-5">
                                <div class="icon bg-red-500 rounded-full  relative flex flex-row items-center justify-center text-white">
                                    <UilCoins color="#000000"/>
                                </div>
                                <p class="text-xl">Annual subscription for <br/> just 500 GO credits</p>
                            </li>
                            <li class="flex flex-row text-white justify-center items-center gap-5">
                                <div class="icon bg-red-500 rounded-full relative flex flex-row items-center justify-center text-white">
                                    <UilEnglishToChinese color="#000000" /> </div>
                                <p class="text-xl">Available in multiple Languages</p>
                            </li>
                            <li class="flex flex-row text-white justify-center items-center gap-5 ">
                                <div class="icon bg-red-500 rounded-full relative flex flex-row items-center justify-center text-white">
                                    <UilAwardAlt color="#000000" /> 
                                </div>
                                <p class="text-xl">Earn rewards from your subscription <br/> and sharing with others</p>
                            </li>
                            <li class="flex flex-row text-white justify-center items-center gap-5 ">
                                <div class="icon bg-red-500 rounded-full relative flex flex-row items-center justify-center text-white">
                                    <UilFilm color="#000000" />
                                </div>
                                <p class="text-xl">A-List <br/>Blockbusters and TV Shows.</p>
                            </li>
                            <li class="flex flex-row text-white justify-center items-center gap-5 ">
                                <div class="icon bg-red-500 rounded-full relative flex flex-row items-center justify-center text-white">
                                    <UilClapperBoard color="#000000"/>
                                </div>
                                <p class="text-xl">Brand new <br/>content every week</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GOTV2