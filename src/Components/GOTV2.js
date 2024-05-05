import Reactm,{useEffect, useRef} from 'react'


import { useTranslation } from 'react-i18next';
import { UilAwardAlt, UilEnglishToChinese,UilFilm, UilClapperBoard, UilCoins } from '@iconscout/react-unicons'


function GOTV2() {

    const [t, i18n] = useTranslation("global");

    const slider = useRef(null);
    useEffect(() => {


        let isDown = false;
        let startX;
        let scrollLeft;

        if(slider != null) {
                slider.current.addEventListener('mousedown', (e) => {
                    isDown = true;
                    slider.current.classList.add('active');
                    startX = e.pageX - slider.current.offsetLeft;
                    scrollLeft = slider.current.scrollLeft;
                    
                });
                slider.current.addEventListener('mouseleave', () => {
                    isDown = false;
                    slider.current.classList.remove('active');
                });
                slider.current.addEventListener('mouseup', () => {
                    isDown = false;
                    slider.current.classList.remove('active');
                });
                slider.current.addEventListener('mousemove', (e) => {
                    if(!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - slider.current.offsetLeft;
                    console.log(x);
                    const walk = (x - startX) * 0.8; 
                    slider.current.scrollLeft = scrollLeft - walk;
                    console.log("walk is : " + walk);
                    console.log("x is: " + x);
                });
        }
    }, [slider])

    return(
        <div class="bg-black pt-52 relative">
            <div class="flex flex-row justify-center items-center">
                <img class="mx-auto absolute" src="/ASSETS/gotv/bg.png" />
                <main class="grid-item main mx-auto top-27">
                    <div class="items" ref={slider}>
                
                        <img class="item"src="/ASSETS/gotv/posters/spiderman1.jpg" />
                        <img class="item"src="/ASSETS/gotv/posters/karatekid3.jpg" />
                        <img class="item"src="/ASSETS/gotv/posters/ghostbusters1.jpg" />
                        <img class="item"src="/ASSETS/gotv/posters/ghostbusters2.jpg" />
                        <img class="item"src="/ASSETS/gotv/posters/flatliners.jpg" />
                        <img class="item"src="/ASSETS/gotv/posters/fewgoodmen.jpg" />
                        <img class="item"src="/ASSETS/gotv/posters/mygirl.jpg" />
                        <img class="item"src="/ASSETS/gotv/posters/spiderman1.jpg" />
                        <img class="item"src="/ASSETS/gotv/posters/karatekid3.jpg" />
                        <img class="item"src="/ASSETS/gotv/posters/ghostbusters1.jpg" />
                        <img class="item"src="/ASSETS/gotv/posters/ghostbusters2.jpg" />
                        <img class="item"src="/ASSETS/gotv/posters/flatliners.jpg" />
                        <img class="item"src="/ASSETS/gotv/posters/fewgoodmen.jpg" />
                        <img class="item"src="/ASSETS/gotv/posters/mygirl.jpg" />
                    
                    </div>
                </main>
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