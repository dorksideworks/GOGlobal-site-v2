import React, {useEffect, useState} from 'react'





import axios from 'axios';

function Blogs({sendTheme}) {

  const [artcleData, setArticleData] = useState([]);


  useEffect(() =>{ 

    sendTheme('dark');



  },[])


  return (
      <div class="w-full">
          <div class="blog-card py-52 bg-slate-100 mx-auto">

            
            <div class="px-32">
              <h1 class="text-4xl font-slate-900 font-bold text-left pr-52">
              Gemini Earn Users Receive $2.18 Billion of Their Digital Assets in Kind — a 232% Recovery
              </h1>

              <div class="blog-image">
                <img src=""/>
              </div>

              <div class="blog-body text-left mt-20">

                <h2 class="text-2xl font-bold" >An Unprecedented Recovery</h2>

                <p>
                  This represents an unprecedented recovery among crypto bankruptcies, as well as bankruptcies in general, and follows our previous announcement that we reached a settlement in principle with Genesis and other creditors in the Genesis Bankruptcy, which will result in all Earn users receiving 100% of their digital assets back in kind.
                </p>

                <p>
                  This means, for example, that if you had lent one bitcoin in the Earn program, you will receive one bitcoin back. And it means that you will receive any and all appreciation of your assets since you lent them into the Earn program.

                </p>

                <p>
                  In order to ensure this successful resolution, Gemini has also contributed $50 million to the Earn users’ recovery.
                </p>

                <p>
                  Today’s initial distributions represent approximately 97% of the digital assets in the Earn program. You can expect to receive your remaining asset balance within the next 12 months.
                </p>
              </div>

            </div>

            <div class="related-articles">

            </div>
              <h2>RELATED ARTICLES</h2>

              <div class="articles-container text-left bg-red-500">

                <div class="article-card flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row">
                  <div class="image-container"></div>
                  <div id="article-card-description" class="felx-col ">
                      <h3> SEC Continues to Target Crypto, Spot Bitcoin ETFs Pick Up Momentum</h3>
                      <p>Today, Earn users received $2.18 billion of their digital assets in kind. These initial distributions represent:</p>
                  </div>
                </div>
              </div>
            </div>

      </div>
  )
}

export default Blogs
