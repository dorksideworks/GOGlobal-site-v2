import React, {useState, useEffect} from 'react'


function Header() {

  const [scrolltopdata, setscrolltopdata] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () =>{
      if(window.scrollY < 15 ) {
        setscrolltopdata(false);
      } else {
        setscrolltopdata(true);
      }
      console.log(window.scrollY);
    })
  }, []);
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
            <button data-collapse-toggle="mobile-nav" aria-controls="navbar-default" aria-expanded="false" type="button" class="relative  lg:hidden md:hidden tham tham-e-squeeze tham-w-6">
                <div class="tham-box">
                  <div class="tham-inner bg-white" />
                </div>
            </button>
            <a href="#" class="hidden md:relative lg:relative text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></a>

          </div>
        </nav>
        
      </header>
    </div>
  )
}

export default Header
