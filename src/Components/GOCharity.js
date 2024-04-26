
import {useTranslation} from 'react-i18next';
import {Controller, Scene} from 'react-scrollmagic';
import {Tween, Timeline} from 'react-gsap';


function GOCharity() {

    const [t, i18n] = useTranslation("global");

    return(
        <div class="pt-52 relative" id="foudnation-container">
           <Controller>
            <Scene duration="1000" triggerHook={0} triggerElement="#foudnation-container" indicators={true} pin>
                {(progress) =>  (
                    <div>
                        <Timeline totalProgress={progress} paused
                            target={
                                <img class="absolute right-96 scale-50" src="/ASSETS/gofoundation/charity-03.png" />
                            }
                        >
                            <Tween from={{bottom: "30%", opacity: 0}} to={{bottom: "70%", opacity: 1}} />
                        </Timeline>
                        <Timeline totalProgress={progress} paused
                            target={
                                <img class="absolute left-96 scale-50" src="/ASSETS/gofoundation/charity-04.png" />
                            }
                        >
                            <Tween from={{bottom: "30%", opacity: 0}} to={{bottom: "75%", opacity: 1}} />
                        </Timeline>
                        <Timeline totalProgress={progress} paused
                            target={
                                <img class="-right-10 scale-75 blur-sm absolute" src="/ASSETS/gofoundation/charity-02.png" />
                            }
                        >
                            <Tween from={{bottom: "0%", opacity: 0}} to={{bottom: "50%", opacity: 1}} />
                        </Timeline>

                        <Timeline totalProgress={progress} paused
                            target={
                                <img class="absolute -left-20 scale-75" src="/ASSETS/gofoundation/charity-05.png" />
                            }
                        >
                            <Tween from={{bottom: "0%", opacity: 0}} to={{bottom: "30%", opacity: 1}} />
                        </Timeline>
                        <div class="wrapper mx-auto flex flex-col text-slate-900 dark:text-white z-50 relative">
                            <div class="mb-4 relative mx-auto p-10 bg-white shadow-xl mb-20 text-white font-bold rounded-xl w-40 text-center">
                                <img src="/ASSETS/logos/color/foundation.png"/>
                            </div>
                            <h1 class="text-6xl font-bold pb-5"> <span class="charity-tcolor">Changing Lives </span> <br/> by Giving Back</h1>
                            <p>Our mission is to make a meaningful impact <br/> wherever we go, ensuring our efforts are both far-reaching and lasting.</p>
                            <div class="charity-map relative mt-24">

                                <Timeline delay={1000} totalProgress={progress} paused
                                    target={ 
                                        <img class="country-pin china absolute" src="/ASSETS/gofoundation/china-pin.png" />
                                    }
                                >
                                    <Tween from={{opacity: 0, bottom:"100%"}} to={{opacity: 1, bottom: "50%"}}/>
                                </Timeline>

                                <Timeline totalProgress={progress} paused
                                    target={ 
                                        <img class="country-pin korea absolute" src="/ASSETS/gofoundation/sk-pin.png" />
                                    }
                                >
                                    <Tween from={{opacity: 0, bottom:"120%"}} to={{opacity: 1, bottom: "48.5%"}} />
                                </Timeline>

                                <Timeline totalProgress={progress} paused
                                    target={ 
                                        <div class="country-pin thailand absolute group">
                                            <img class="absolute group duration-300" src="/ASSETS/gofoundation/thailand-pin.png"/>
                                            <div class="bg-slate-900 absolute country-block overflow-hidden duration-500 flex flex-row justify-center items-center">
                                                <h1 class="text-white font-bold "> hello sebu! </h1>
                                            </div>
                                        </div>
                                        
                                    }
                                >
                                    <Tween from={{opacity: 0, bottom:"120%"}} to={{opacity: 1, bottom: "61.5%"}}/>
                                </Timeline>
                                
                                <Timeline totalProgress={progress} paused
                                    target={ 
                                        <img class="country-pin japan absolute" src="/ASSETS/gofoundation/japan-pin.png" />
                                    }
                                >
                                    <Tween from={{opacity: 0, bottom:"90%"}} to={{opacity: 1, bottom: "44%"}}/>
                                </Timeline>

                                <Timeline totalProgress={progress} paused
                                    target={ 
                                        <img class="country-pin uae absolute" src="/ASSETS/gofoundation/uae-pin.png" />
                                    }
                                >
                                    <Tween from={{opacity: 0, bottom:"90%"}} to={{opacity: 1, bottom: "62%"}}/>
                                </Timeline>
                                <Timeline totalProgress={progress} paused
                                    target={ 
                                        <img class="country-pin oman absolute" src="/ASSETS/gofoundation/oman-pin.png" />
                                    }
                                >
                                    <Tween from={{opacity: 0, bottom:"150%"}} to={{opacity: 1, bottom: "61%"}}/>
                                </Timeline>
                                <Timeline totalProgress={progress} paused
                                    target={ 
                                        <img class="country-pin nigeria absolute" src="/ASSETS/gofoundation/nigeria-pin.png" />
                                    }
                                >
                                    <Tween from={{opacity: 0, bottom:"150%"}} to={{opacity: 1, bottom: "57.6%"}}/>
                                </Timeline>

                                <Timeline totalProgress={progress} paused
                                    target={ 
                                        <img class="country-pin turkey absolute" src="/ASSETS/gofoundation/turkey-pin.png" />
                                    }
                                >
                                    <Tween from={{opacity: 0, bottom:"150%"}} to={{opacity: 1, bottom: "71%"}}/>
                                </Timeline>

                                <Timeline totalProgress={progress} paused
                                    target={ 
                                        <img class="country-pin argentina absolute" src="/ASSETS/gofoundation/argentina-pin.png" />
                                    }
                                >
                                    <Tween from={{opacity: 0, bottom:"120%"}} to={{opacity: 1, bottom: "25.6%"}}/>
                                </Timeline>
                                <Timeline totalProgress={progress} paused
                                    target={ 
                                        <img class="country-pin colombia absolute" src="/ASSETS/gofoundation/colombia-pin.png" />
                                    }
                                >
                                    <Tween from={{opacity: 0, bottom:"90%"}} to={{opacity: 1, bottom: "46.6%"}}/>
                                </Timeline>

                                <Timeline totalProgress={progress} paused
                                    target={ 
                                        <img class="country-pin mexico absolute" src="/ASSETS/gofoundation/mexico-pin.png" />
                                    }
                                >
                                    <Tween from={{opacity: 0, bottom:"110%"}} to={{opacity: 1, bottom: "44.6%"}}/>
                                </Timeline>

                                <Timeline totalProgress={progress} paused
                                    target={ 
                                        <img class="country-pin panama absolute" src="/ASSETS/gofoundation/panama-pin.png" />
                                    }
                                >
                                    <Tween from={{opacity: 0, bottom:"120%"}} to={{opacity: 1, bottom: "46%"}}/>
                                </Timeline>



                                <img src="/ASSETS/gofoundation/foundationmap.png"/>
                            </div>
                        </div>
                        
                        
                    </div>


                )}
                
            </Scene>
           
           </Controller>

        </div>
    )
}

export default GOCharity
