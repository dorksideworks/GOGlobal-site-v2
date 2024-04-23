import React from 'react'
import { useTranslation } from 'react-i18next'

function Footer() {

  const [t, i18n] = useTranslation("global");

  return (  
    <div class="bg-gray-950 pt-20 pb-5">
      <div class="wrapper mx-auto flex  lg:flex-row md:flex-row flex-col gap-5 content-around justify-around">

          <div class="flex flex-col basis-1/3 justif-center align-center ">

            <img class="w-20" src="/ASSETS/go-logo.png"></img>

            <p class="text-left text-gray-300 mt-5">
              {t("footer.description")}

              {i18n.language}

            </p>
 
            <div class="flex flex-row gap-5 mt-5">

              <a href="#">
                <img src='/ASSETS/footer/ri_facebook-fill.png'/>
              </a>

              <a href="#">
                <img src='/ASSETS/footer/ri_instagram-fill.png'/>
              </a>

              <a href="#">
                <img src='/ASSETS/footer/mdi_twitter.png'/>
              </a>

              <a href="#">
                <img src='/ASSETS/footer/mdi_youtube.png'/>
              </a>

              <a href="#">
                <img src='/ASSETS/footer/ic_baseline-telegram.png'/>
              </a>

            </div>
          </div>

          <div class="flex flex-col basis-1/3 gap-3 lg:pl-20 md:pl-20 pl-0">
            <h1 class="text-white text-left font-bold text-2xl mb-5">LINKS</h1>
            <a href="#">
              <h2 class="text-left text-white">HOME</h2>
            </a>
            <a href="#">
              <h2 class="text-left text-white">PRODUCTS</h2>
            </a>
            <a href="#">
              <h2 class="text-left text-white">FOUNDATION</h2>
            </a>
            <a href="#">
              <h2 class="text-left text-white">COMMUNITY</h2>
            </a>
            <a href="#">
              <h2 class="text-left text-white">LOGIN</h2>
            </a>

          </div>

          <div class="flex flex-col basis-1/3">
            <img src="/ASSETS/footer/intersect.png"/>
          </div>
      </div>
      <h2 class="text-gray-200">Copyright © 2023 GO Global. All rights reserved.</h2>
      
    </div>
  )
}

export default Footer
