import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    console.log(data);
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res) => res.json())
    //     .then((newRes)=> {
    //         console.log(newRes);
    //         setData(newRes);
    //     })
    // },[])
    
    return(
        <div className="bg-gray-600 text-white text-center m-4 p-4 text-3xl">
            Github followers: {data.followers}
            <p className="text-white text-center">{data.name}</p>
            <img src={data.avatar_url} alt="Git Picture" width={300}/>
            
            
        </div>
    )
}

export default Github;

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/ameyrane04')
    return response.json();
}