import React, {useEffect, useState} from 'react'
import {Controller, Scene} from 'react-scrollmagic';
import {Timeline, Tween} from 'react-gsap';
import { useTranslation } from 'react-i18next';

import axios from 'axios';

function Blogs() {
    const [t, i18n] = useTranslation("global");
    const [blogs, setBlogs] = useState();

    useEffect(() => {


        const fetchBlogs = async () => {
            const results = await axios({
                method: 'get',
                url : `https://cms.goglobal.network/api/articles?pagination[page]=1&pagination[pageSize]=3&populate=cover`,
                withCredentials: false
            })
            .then( (res)=> {
                setBlogs(res.data.data);
            } )
            .catch( (err) => {
                console.log(err);
            })
        }
        fetchBlogs();
    },[blogs])

    return (
    <div class="flex flex-col align-center justify-center lg:pb-10 mt-40 wrapper  mx-auto box-border  elative" >
            <h2 class="text-6xl font-bold dark:text-white"><span class="text-cyan-500">BLOGS & </span> ARTICLES</h2>
            <p class="xl:px-52 px-0 mb-10 mt-4 dark:text-white">Discover trending topics, upcoming updates, tips and tricks, and viral news about GO Global.Updated weekly, you can find various interesting content about GO Learn, GOtv, INFIN8 MONEY, and GOWIN.</p>
            <div class="gap-10 flex flex-col md:flex-col sm:flex-col lg:flex-col xl:flex-row text-black relative justify-center align-center text-left">
                    {
                        blogs ? 
                            // JSON.stringify(blogs)
                            blogs.map(function(item, index) {
                                return(
                                    <a href={"/blogs/"+item.attributes.slug}class="basis-1/3 shrink-1 flex flex-col rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 duration-500 px-2 py-5 dark:text-white">
                                        <div class="overflow-hidden relative p-5">
                                            <img class="object-cover overflow-hidden rounded-md" src={"https://cms.goglobal.network/"+item.attributes.cover.data.attributes.url}/>
                                        </div>
                                        <div class="px-5 flex gap-5 flex-col">

                                            <h2 class="font-bold text-2xl">{item.attributes.title}</h2>
                                            <p class="text-sm"> {item.attributes.description}</p>
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

export default Blogs
