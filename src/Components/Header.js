import React, {useState, useEffect, useRef} from 'react'
import { useTranslation } from 'react-i18next'


function Header() {
  const [t, i18n] = useTranslation("global");

  let burger = useRef(null);
  let nav_modal = useRef(null);
  let lang_modal = useRef(null);
  const [scrolltopdata, setscrolltopdata] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [languageDrop, setLanguageDrop] = useState(false);


  function handleClick(e) {
    if(nav_modal) nav_modal.classList.toggle('open');
  }

  function toggleLanguage(e) {
    if(lang_modal) lang_modal.classList.toggle('drop');
  }


  useEffect(() => {
    
    // burger.addEventListener('click', () => {
    //   if(nav_modal) nav_modal.classList.toggle('open');
    // });
  

    window.addEventListener('scroll', () =>{
      if(window.scrollY < 15 ) {
        setscrolltopdata(false);
      } else {
        setscrolltopdata(true);
      }
      console.log(window.scrollY);
    })

    
  },[]);
  return (
    <div>
      <header class="fixed inset-x-0 top-0 z-50">
        <nav 
        class={`flex items-center justify-between p-4 duration-500 lg:px-8 ${scrolltopdata? 'bg-slate-900 py-6' : ''}`}
        aria-label="Global">
          
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
              {/* <span class="sr-only">Your Company</span> */}
              <img class="h-8 w-auto" src="/ASSETS/go-logo.png"/>
            </a>
          </div>
          <div class="flex hidden lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
              <span class="sr-only">Open main menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          <div class="hidden lg:flex lg:gap-x-12">
            <a href="#HeroSection" class="text-sm font-semibold leading-6 text-white">HOME</a>
            <a href="#ProductSection" class="text-sm font-semibold leading-6 text-white">PRODUCTS</a>
            <a href="#FoundationSection" class="text-sm font-semibold leading-6 text-white">FOUNDATION</a>
            <a href="#CommunitySection" class="text-sm font-semibold leading-6 text-white">COMMUNITY</a>
          </div>
          
          <div class="flex lg:flex lg:flex-1 lg:justify-end">
            <button data-collapse-toggle="mobile-nav" onClick={handleClick} type="button" class="relative  lg:hidden md:hidden tham tham-e-squeeze tham-w-6">
                <div class="tham-box">
                  <div class="tham-inner bg-white" />
                </div>
            </button>
            <a href="https://dashboard.goglobal.network/user/login" target="_blank" class="hidden bg-cyan-500 py-3 px-10 rounded-full md:relative lg:relative lg:block md:block text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></a>
            <div class="hidden md:flex lg:flex text-white cursor-pointer flex flex-col justify-center align-center items-center px-10 rounded-xl ml-5 hover:bg-slate-800 duration-500 font-bold text-sm">
              <div onClick={toggleLanguage}> {i18n.language.toUpperCase()}</div>
              
              <div ref= { a => {lang_modal = a}} class="langSelect absolute top-24 flex flex-col bg-slate-800 rounded-xl overflow-hidden justify-stretch align-stretch items-stretch duration-500">
                
                {i18n.language != 'en'? <a href="/en" class="duration-500 hover:bg-slate-900 bg-slate-800 basis-1/3 py-3 px-10"> EN </a >: ""} 
                {i18n.language != 'es'? <a href="/es" class="duration-500 hover:bg-slate-900 bg-slate-800 basis-1/3 py-3 px-10"> ES </a > : ""}
                {i18n.language != 'kr' ? <a href="/kr" class="duration-500 hover:bg-slate-900 bg-slate-800 basis-1/3 py-3 px-10"> KR </a> : ""}
                {i18n.language != 'ar' ? <a href="/ar" class="duration-500 hover:bg-slate-900 bg-slate-800 basis-1/3 py-3 px-10"> AR </a> : ""}
              </div>

            </div>


          </div>
          
        </nav>

          <div ref = { el => {nav_modal = el}} class="navModal sm:hidden md:hidden lg:hidden mx-auto text-white font-bold left-0 right-0 w-4/6 p-10 bg-slate-900 absolute duration-500 rounded-xl top-20 isolate flex flex-col gap-5 ">
              <a class="modalNavInner" onClick={handleClick} href="#HeroSection"> HOME </a>
              <a class="modalNavInner" onClick={handleClick} href="#ProductSection"> PRODUCTS </a>
              <a class="modalNavInner" onClick={handleClick} href="#FoundationSection"> FOUNDATION </a>
              <a class="modalNavInner" onClick={handleClick} href="#CommunitySection"> COMMUNITY </a>
              <a class="modalNavInner" onClick={handleClick} href="https://dashboard.goglobal.network/users/login">LOG IN</a>
              <div>
                  English
              </div>
          </div>
        
      </header>
    </div>
  )
}

export default Header
