import React, {useEffect, useState} from 'react'


import Markdown from 'markdown-to-jsx'

import axios from 'axios';

function BlogPage({sendTheme}) {

  const [articleData, setArticleData] = useState([]);
  const [articleID, setArticleID] = useState()




  useEffect(() =>{ 
    sendTheme('dark');
    const location = window.location.pathname.split('/');

    setArticleID(location[location.length-1]);




    const fetchData = async () => {
      const results = await axios({
        method: 'get',
        url: `https://cms.goglobal.network/api/articles?pagination[page]=1&pagination[pageSize]=7&populate=cover&filters[slug][$ne]=${articleID}`,
        withCredentials: false
      }).then((res) => {
        setArticleData(res.data.data);

      }).catch((err) => {
        console.log(err);
      })
    }

    if(articleData == undefined || articleData == ""){ 
      fetchData();
    }
  },[articleID, articleData])


  return (
      <div class="w-full dark:bg-slate-900">
        <div class="wrapper flex flex-row flex-wrap py-72 mx-auto gap-5 justify-between ">

            <div>
                <h2 class="text-6xl text-left font-bold dark:text-white"><span class="text-cyan-500">Blogs & </span> Articles</h2>
                <p class="blogs-page-description pr-0 mb-10 mt-4 dark:text-white text-left">Discover trending topics, upcoming updates, tips and tricks, and viral news about GO Global.Updated weekly, you can find various interesting content about GO Learn, GOtv, INFIN8 MONEY, and GOWIN.</p>
            </div>
            {
                articleData?
                    articleData.map(function (item, index) {
                        console.log(index);

                        if(index == 0) {
                            return(
                                <a href={"/blogs/" + item.attributes.slug} class="bg-slate-100 relative rounded-lg overflow-hidden basis-full flex flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row pb-10">
                                    <div class="image-container basis-7/12 overflow-hidden " >
                                        <img class="rounded-lg overflow-hidden object-cover scale-150 hover:scale-175   duration-500" src={"https://cms.goglobal.network/"+item.attributes.cover.data.attributes.url} />
                                    </div>
                                    <div class="px-10 card-body basis-1/3 text-left flex flex-col justify-center">
                                        <h2 class="text-xl lg:text-3xl xl:text-3xl font-bold"> {item.attributes.title} </h2>
                                        <p class="text-lg mt-5"> {item.attributes.description}</p>
                                        <div class="author flex flex-row mt-5">
                                            <div class="author-image relative rounded-full overflow-hidden w-14 mt-5">
                                                <img src="/go-thumb.jpg"/>
                                            </div>
                                            <div class="text-left flex flex-col justify-center items-start ml-3">
                                                <h3 class="font-bold">GO Global</h3>
                                                <p class="text-slate-500">@goglobal.official</p>
                                            </div>
                                        </div>
                                    </div>

                                </a>
                            )
                        }
                        return(
                                <a href={"/blogs/" + item.attributes.slug} class="card-md bg-slate-200 flex flex-col rounded-lg overflow-hidden basis-full xl:basis-1/3 2xl:basis-1/3">
                                    <div class="image-container overflow-hidden relative">
                                        <img class="grayscale hover:grayscale-0 scale-100 hover:scale-125 duration-500" src={"https://cms.goglobal.network/"+item.attributes.cover.data.attributes.url} />
                                    </div>

                                    <div class="card-body px-5 pb-10 text-left flex flex-col justify-between content-between items-stretch grow">
                                        <h3 class="font-bold text-xl"> {item.attributes.title} </h3>
                                        <p class="mt-3"> {item.attributes.description}</p>
                                        <div class="author flex flex-row mt-5">
                                            <div class="author-image relative rounded-full overflow-hidden w-14 mt-5">
                                                <img src="/go-thumb.jpg"/>
                                            </div>
                                            <div class="text-left flex flex-col justify-center items-start ml-3">
                                                <h3 class="font-bold">GO Global</h3>
                                                <p class="text-slate-500">@goglobal.official</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            

                        )
                    })
                :""
            }
        </div>
      </div>
  )
}

export default BlogPage
