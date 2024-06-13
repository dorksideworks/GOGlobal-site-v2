import React, {useEffect, useRef, useState} from 'react'

import axios from 'axios';

import { i18n, useTranslation } from 'react-i18next';

const token = "4a95ae4db92472cf876ac8079073211e2caed72df979ad50cca00f57ccdce662e9c1f1410a0bd61b4250d986bccfa4e60c3334240e1854f5dd8162c227efc64d0c79aeebc0f4d83666da5f405d2d6cb6b0981cd5bdd720fb53a6afc311950a03d4d5632b0dcf5ed830458b08c20cd804ee58ed76c38a660599cb6c50d5c075c6";

function Downloads() {
   
    const [presData, setPresData] = useState([]);
    const [selectedPres, setSelectedPres] = useState('');


    const handlePresDownload = async (s) => {
        console.log(s);
        if(selectedPres) {
            console.log(selectedPres.attributes.file.data[0].attributes.url);
            await axios({
                url: 'http://localhost:1337'+selectedPres.attributes.file.data[0].attributes.url,
                method: 'GET',
                responseType: 'blob', // Important
              }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', selectedPres.attributes.file.data[0].attributes.name);
                document.body.appendChild(link);
                link.click();
              });
        }
    }


    useEffect(() => {

        let config = {
            headers : {
                'Authorization': 'Bearer ' + token
            }
        }

        // console.log(config);
        let param = {}

       

        const fetchData = async () => {
            const result = await axios.get('http://localhost:1337/api/presentations?populate=documents,thumbnail&populate[1]=documents.file', config)
                .then((res)=>{
                    // console.log(res);
        
                    let data = res.data.data;
                    setPresData(data);
                    console.log(data)
                    
                })
                .catch((err) => {
                    console.log(err);
                })
                
        };

        fetchData();

        
    },[]);


    return (
        <div class="pt-52 relative bg-slate-50 dark:bg-slate-900 duration-500">

            <div id="downloads-section">

                <h1 class="text-6xl font-bold py-5  "> Lorem ipsum dolor sit amet, <br/> <span class="text-cyan-500">consectetur adipiscing elit.</span>  </h1>
                <p class="mb-20"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam nisl sit amet eros tristique, sed finibus nulla laoreet. <br/>Sed ultricies sapien eget erat iaculis molestie. Aenean leo elit, euismod a lorem eget, consequat facilisis erat.</p>
             



               <div class="wrapper mx-auto flex gap-5" >
               { 
                    presData.map(function(item, i){

                        return (
                            <div key={i} class="downloads-card p-7 rounded-xl flex flex-col group basis-1/3">
                                <img class="rounded-md overflow-hidden" src={"http://localhost:1337"+item.attributes.thumbnail.data.attributes.formats.medium.url}/>
                                <h1 class="text-left font-bold text-2xl pt-5">{item.attributes.title}</h1>
                                <p class="text-left text-sm text-gray-600 pt-1"> {item.attributes.description} </p>
                                
                                {
                                    item.attributes.documents.data.length!=0?
                                    <select onChange={e => {setSelectedPres(item.attributes.documents.data[e.target.value]); console.log(selectedPres)}} class="mt-5 p-2 rounded-md self-start justify-self-start font-bold text-sm">
                                        <option > Please Select </option>
                                        {
                                            item.attributes.documents.data.map(function(doc, x) {
                                                return(<option value={x} > {doc.attributes.title} </option>);
                                            })
                                        }
                                        
                                    </select> : ""
                                }
                                
                                {
                                    item.attributes.documents.data.length!=0? 
                                    
                                    <button onClick={()=> handlePresDownload()}type="button" class=" self-start justify-self-end relative flex items-center justify-center mt-5 font-bold text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2">
                                    
                                        <svg class="mr-2" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 3.01254C10.9983 2.46026 11.4446 2.01114 11.9969 2.00941C12.5492 2.00768 12.9983 2.45399 13 3.00627L11 3.01254Z" fill="#ffffff"/>
                                        <path d="M14.3158 10.2951L13.0269 11.592L13 3.00627L11 3.01254L11.0269 11.5983L9.73003 10.3095C9.33828 9.92018 8.7051 9.92214 8.3158 10.3139C7.9265 10.7056 7.92849 11.3388 8.32024 11.7281L8.32275 11.7306L8.32374 11.7316L12.039 15.4236L15.7206 11.7187L15.7262 11.7131L15.727 11.7123L15.7278 11.7115L15.7337 11.7056L15.7344 11.7049L14.3158 10.2951Z" fill="#ffffff"/>
                                        <path d="M15.7344 11.7049C16.1237 11.3131 16.1217 10.6799 15.73 10.2906C15.3382 9.90134 14.705 9.90335 14.3158 10.2951L15.7344 11.7049Z" fill="#ffffff"/>
                                        <path d="M4 12C4 10.8954 4.89543 10 6 10C6.55228 10 7 9.55228 7 9C7 8.44771 6.55228 8 6 8C3.79086 8 2 9.79086 2 12V18C2 20.2091 3.79086 22 6 22H17C19.7614 22 22 19.7614 22 17V12C22 9.79086 20.2091 8 18 8C17.4477 8 17 8.44771 17 9C17 9.55228 17.4477 10 18 10C19.1046 10 20 10.8954 20 12V17C20 18.6569 18.6569 20 17 20H6C4.89543 20 4 19.1046 4 18V12Z" fill="#ffffff"/>
                                        </svg>
                    
                                        Download
                                    </button>
                                    :""
                                }

                            </div>
                        )

                    })   
                }

               </div>
            </div>

       


            
            
        </div>
    )
}

export default Downloads
