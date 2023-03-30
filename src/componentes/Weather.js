import React, { useEffect, useState } from "react";

const Weather = () => {

    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("islamabad")

    useEffect(()=>{

        const fetchApi = async()=>{
         const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e85c6e826db1a486f824daa285322fc6`

            const response = await fetch (url);
            const resJson = await response.json();
            // console.log(response);
            setCity(resJson.main);
        };
        fetchApi();
    },[search])
  return (
    <div>
      <div>
        <input type="search" onChange={(event) => {setSearch(event.target.value)}} />
      </div>
      {!city ?(
        <p>no data found</p>):(
         <div>
        <h1><i className="fa-solid fa-street-view"></i>{search}</h1>
        <h1>{city.temp} celcs</h1>
        <h1>min:{city.temp_min}cel | max:{city.temp_max}cel</h1>
      </div>
          
  )};

     
    </div>
  );
};

export default Weather;
