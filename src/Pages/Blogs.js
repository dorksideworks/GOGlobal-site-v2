import React, {useEffect, useState} from 'react'


import Markdown from 'markdown-to-jsx'

import axios from 'axios';
import {Helmet} from 'react-helmet';

function Blogs({sendTheme}) {

  const [articleData, setArticleData] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState();
  const [articleID, setArticleID] = useState()




  useEffect(() =>{ 
    sendTheme('dark');
    const location = window.location.pathname.split('/');

    setArticleID(location[location.length-1]);




    const fetchData = async () => {
      // const querystring = window.location.search;
      // console.log("string" +querystring);
      const results = await axios({
        method: 'get',
        url: `https://cms.goglobal.network/api/articles?pagination[page]=1&pagination[pageSize]=3&populate=cover&filters[slug][$ne]=${articleID}`,
        withCredentials: false
      }).then((res) => {
        // console.log(res.data.data)
        setArticleData(res.data.data);

      }).catch((err) => {
        console.log(err);
      })
    }

    const fetchArticle = async () => {
        const results = await axios({
          method : 'get',
          url: `https://cms.goglobal.network/api/articles?filters[slug][$eq]=${articleID}&populate=blocks&populate=cover`,
          withCredentials: false
        }).then((res) => {
          console.log(res.data.data);
          // selectedArticle(res.data.data.attributes);
          setSelectedArticle(res.data.data[0])
        }).catch((err) => {
          console.log(err);
        }) 

    }
    // console.log(selectedArticle)
    if(articleID!= undefined && selectedArticle == undefined) {
      fetchArticle();
    }
    if(articleData == undefined || articleData == ""){ 
      fetchData();
    }
  },[articleID, articleData, selectedArticle])


  return (
      <div class="w-full dark:bg-slate-900">
        <Helmet>
          <title> Empowering Global Community Through Digital Solution - GO Global</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="google-site-verification" content="GOlRpyHKjDGUffTz-xmFsXeUrjXzIi_y7AYUKQFOhYA" />
          <link rel="canonical" href="http://www.goglobal.network/blogs" />

        </Helmet>
          <div class="w-100 lg:w-2/3 xl:w-2/3 2xl:w-1/2 relative bg-slate-100 mx-auto dark:bg-slate-900">
          {
            selectedArticle ?
            <div>

              <div class="blog-image relative flex items-center justify-center mt-20 w-full image-cover">
                <img class="object-cover w-full"  src={"https://cms.goglobal.network/"+ selectedArticle.attributes.cover.data.attributes.url}/>
              </div>
              
              
            </div>
            :" "
          }

            
            {selectedArticle?
              
              <div class="px-5 xl:px-10 2xl:px-32 dark:bg-slate-900 dark:text-white">
                <h1 class="text-4xl xl:text-6xl font-slate-900 font-bold text-left ">
                  {selectedArticle.attributes.title}
                </h1>
                <p class="text-md text-left mt-5 text-slate-400 xl:text-xl ">
                  {selectedArticle.attributes.description}
                </p>
                <div class="author flex flex-row mt-5">
                  <div class="author-image relative rounded-full overflow-hidden w-14 mt-5">
                      <img src="/go-thumb.jpg"/>
                  </div>
                  <div class="text-left flex flex-col justify-center items-start ml-3 " >
                    <h3 class="font-bold">GO Global</h3>
                    <p class="text-slate-500">@goglobal.official</p>
                  </div>
                </div>

                
                <div class="blog-body text-left mt-20">


                <Markdown options={{ forceBlock: true }} class="text-left blog-md">
                {selectedArticle.attributes.blocks.body}
                </Markdown>

                </div>      
              </div>
              
          :""}

            
              <h2 class="text-2xl font-bold mt-20 mb-10 text-left pl-32 text-slate-600 dark:bg-slate-900 dark:text-white">RELATED ARTICLES</h2>
              <hr class="mb-10 mx-32 " />
              <div class="articles-container dark:bg-slate-900 text-left px-5 xl:px-10 2xl:px-32  pb-20 ">
                <div class="related-articles flex flex-row sm:flex-col md:flex-col xl:flex-row lg:flex-col 2xl:flex-row dark:text-white flex-wrap">
                    { 
                      articleData?
                        articleData.map(function (item, index){
                          return(

                            <div class="article-card md:basis-1/2 lg:basis-1/2 2xl:basis-1/3 xl:basis-1/3 shrink-0 flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col hover:bg-slate-200 dark:hover:bg-slate-600 rounded-xl duration-500 ">

                              <div class="image-container pt-5 px-5 relative">

                                <img class="overflow-hidden rounded-lg " src={"https://cms.goglobal.network/"+item.attributes.cover.data.attributes.url}/>
                              </div>
                              
                              <a href={"/blogs/" + item.attributes.slug} id="article-card-description" class="flex flex-col">
                                  <h3 class="px-5 xl:px-5 2xl:px-10 text-md font-bold"> {item.attributes.title}</h3>
                                  <p class="px-5 xl:px-5 2xl:px-10 text-sm text-slate-700 dark:text-slate-300 pt-2 pb-10">{item.attributes.description}</p>
                              </a>
                            </div>
                          )
                        })
                      :""
                    }
                  
                </div>
              </div>
          </div>

      </div>
  )
}

export default Blogs
