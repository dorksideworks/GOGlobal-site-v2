import React from 'react'
import { useTranslation } from 'react-i18next';


function Products() {
    const [t, i18n] = useTranslation("global");
  return (
    <div id="ProductSection" class="wrapper mx-auto relative flex flex-row xl:flex-col py-10 pt-40">

        <h1 class="text-white text-5xl font-bold"> {t("products.title")} <span class="text-cyan-500"></span> </h1>
        <p class="text-gray-500 mt-5"> {t("products.description")}</p>
        <div class="flex flex-col md:flex-row lg:flex-row gap-5 wrapper mx-auto mt-12">
            <a target="_blank" href="https://golearn.goglobal.network" class="group p-5 basis-1/4 flex justify-center">
                <img class="w-40 object-contain duration-500 brightness-50 group-hover:brightness-100" src="/ASSETS/logos/go-learn.png"></img>
            </a>
            <a target="_blank" href="https://gotv.goglobal.network" class="group p-5  basis-1/4 flex justify-center">
                <img class="w-40 object-contain duration-500 brightness-50 group-hover:brightness-100" src="/ASSETS/logos/go-tv.png"></img>
            </a>
            <a target="_blank" href="https://infin8money.com" class="group p-5 basis-1/4 flex justify-center">
                <img class="w-40 object-contain duration-500 brightness-50 group-hover:brightness-100" src="/ASSETS/logos/infin8-money.png"></img>
            </a>
            <a class="group p-5  basis-1/4 flex justify-center">
                <img class="w-40 object-contain duration-500 brightness-50 group-hover:brightness-100" src="/ASSETS/logos/go-foundation.png"></img>
            </a>
        </div>
        
    </div>
  )
}

export default Products
