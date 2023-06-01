import React, { useEffect, useState } from 'react'
import Card from './Card'

const Display = () => {
    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        const url = "https://api.tvmaze.com/search/shows?q=all"
        const data = await fetch(url);


        const parseData = await data.json();

        setApiData(parseData);
        
    }

    useEffect(() => {
        fetchData();
    },[])

    return (
        <div className='' style={{display:"flex",flexDirection:"column", alignItems:"center", width:"100%",}}>
            {apiData.map((e)=>{
                return ( <div key={e.show.id}>
                    <Card title={e.show.name} img={e.show.image.medium} gen={e.show.genres}  link={e.show._links.self.href}/>
                </div>)
            } )}
        </div>
    )
}

export default Display
