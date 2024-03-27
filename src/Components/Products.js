import React from 'react'

function Products() {
  return (
    <div class="wrapper mx-auto relative flex flex-col py-10">

        <h1 class="text-white text-5xl font-bold"> Our <span class="text-cyan-500">Products</span> </h1>
        <div class="flex flex-col md:flex-row lg:flex-row gap-5 wrapper mx-auto mt-12">
            <a class="group p-5 basis-1/4 flex justify-center">
                <img class="w-40 object-contain duration-500 brightness-50 group-hover:brightness-100" src="/ASSETS/logos/go-learn.png"></img>
            </a>
            <a class="group p-5  basis-1/4 flex justify-center">
                <img class="w-40 object-contain duration-500 brightness-50 group-hover:brightness-100" src="/ASSETS/logos/go-tv.png"></img>
            </a>
            <a class="group p-5 basis-1/4 flex justify-center">
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
