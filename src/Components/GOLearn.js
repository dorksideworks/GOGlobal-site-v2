import React from 'react'
import {Controller, Scene} from 'react-scrollmagic';
import {Tween, Timeline} from 'react-gsap';


function GOLearn() {
  return (
    <div id="golearn-cards" class="flex flex-col align-center justify-center lg:pb-10 relative">
        <Controller>
            <Scene duration={1500} triggerHook={0.5} triggerElement="#golearn-cards" pin>
                {(progress) => (
                    
                    <div>
                    <Timeline totalProgress={progress}   paused>
                        
                        <Timeline
                        target={
                           <div class="relative">
                                <h1 class="text-white text-3xl md:text-5xl lg:text-6xl font-bold"> 
                                <span class="text-cyan-500">Unlock your success </span> 
                                and <br /> learn from industry experts.</h1>
                                <p class="text-gray-300 pt-5 px-5"> Climb to success with courses ranging from business and leadership to personal development taught by world-class trainers.</p>
                           </div>
                    
                        }
                        >
                            <Tween from={{top: "-250px", opacity: 0}} to={{top: "0px", opacity: 1}} />
                        </Timeline>

                        
                    </Timeline>

                    <Timeline totalProgress={progress} paused>
                        
                        <Timeline
                        target={<img class=" w-full md:w-1/4 lg:w-1/4 -left-1/2 md:left-1/4 lg:left-1/4 absolute blur-md" src="/Assets/golearn/golearn-004.png"/> }
                        >
                            <Tween from={{bottom: "-1000px"}} to={{bottom: "1000px"}} />
                        </Timeline>

                        
                    </Timeline>

                    <Timeline totalProgress={progress} paused>
                        
                        <Timeline
                        target={<img class="w-full md:w-1/2 lg:w-1/2 -right-1/2 md:-right-1/4 lg:-right-1/4 absolute blur-md" src="/Assets/golearn/golearn-008.png"/> }
                        >
                            <Tween from={{bottom: "-2000px"}} to={{bottom: "1500px"}} />
                        </Timeline>

                        
                    </Timeline>


                    <Timeline totalProgress={progress} paused>
                        
                        <Timeline
                        target={<img class="absolute w-1/2 md:w-1/6 lg:w-1/6 left-48  blur-sm" src="/Assets/golearn/golearn-001.png"/> }
                        >
                            <Tween from={{bottom: "-1000px"}} to={{bottom: "200px"}} />
                        </Timeline>

                        
                    </Timeline>
                    
                    <Timeline totalProgress={progress} paused>
                        
                        <Timeline
                        target={<img class="w-1/2 md:w-1/4 lg:w-1/4 right-20 absolute " src="/Assets/golearn/golearn-002.png"/> }
                        >
                            <Tween from={{bottom: "-1000px"}} to={{bottom: "-200px"}} />
                        </Timeline>

                        
                    </Timeline>

                    <Timeline totalProgress={progress} paused>
                        
                        <Timeline
                        target={<img class="w-1/4 left-1/2 absolute blur-sm" src="/Assets/golearn/golearn-003.png"/> }
                        >
                            <Tween from={{bottom: "-1500px"}} to={{bottom: "500px"}} />
                        </Timeline>

                        
                    </Timeline>

                    <Timeline totalProgress={progress} paused>
                        
                        <Timeline
                        target={<img class="w-1/4 left-1/3 absolute" src="/Assets/golearn/golearn-005.png"/> }
                        >
                            <Tween from={{bottom: "-2000px"}} to={{bottom: "300px"}} />
                        </Timeline>

                        
                    </Timeline>
                    <Timeline totalProgress={progress} paused>
                        
                        <Timeline
                        target={<img class="w-1/2 blur-md -left-1/4 absolute" src="/Assets/golearn/golearn-006.png"/> }
                        >
                            <Tween from={{bottom: "-2000px"}} to={{bottom: "-400px"}} />
                        </Timeline>

                        
                    </Timeline>
                    <Timeline totalProgress={progress} paused>
                        
                        <Timeline
                        target={<img class="w-96 right-56 absolute" src="/Assets/golearn/golearn-009.png"/> }
                        >
                            <Tween from={{bottom: "-3000px"}} to={{bottom: "100px"}} />
                        </Timeline>

                        
                    </Timeline>
                    </div>


                )}
            </Scene>
        </Controller>
        
        

        <div class="cta-white bg-white w-3/4 mx-auto mt-16 rounded-3xl overflow-hidden flex flex-row justify-center align-center relative overflow-hidden">
            <div class="basis-full md:basis-1/2 lg:basis-1/2 py-3 px-10 text-left flex flex-col justify-center align-center justify-self-start">
                <h1 class=" text-2xl md:text-4xl lg:text-4xl font-bold"> Start Your Online <br/> Learning Journey Today</h1>
                <p class="text-sm text-gray-500 mt-2">Learn from the best in the industry and be the leader of your future.<br/> Join our ever-growing community of learners and achievers.</p>
                <button class="rounded-full bg-cyan-500 py-2 px-5 text-white text-sm font-bold mt-5 cta-btn"> LEARN MORE </button>
            </div>
            <div class="basis-1/2 absolute lg:relative md:relative">
                <img class="absolute scale-125" src="/ASSETS/golearn/cta-image.png"/>
            </div>
        </div>
    </div>
  )
}

export default GOLearn
