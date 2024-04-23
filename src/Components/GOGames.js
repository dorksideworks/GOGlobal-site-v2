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


        </div>
    )
}

export default GOGames