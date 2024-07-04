import React, { useEffect, useState } from 'react'
import './style.css'
const Temprature = () => {
  const [city,setCity] = useState(null);
  const [search,setSearch] = useState("Kabul")

  useEffect(()=>{
    const fetchApi = async()=>{
      const api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units+metric&appid=f02b216d1fcbcc0660a74500c587d7d6`;
      const res = await fetch(api);
      const data = await res.json();
      console.log(data)
      setCity(data.main);
    }
    fetchApi();
  },[search])
  return (
    <>
    <div className="container">
      <div className="search">
        <input type="text" className='search' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='City...' />
        <span className='close'>x</span>
      </div>
    {!city ?
     ( <p>Data Not Found</p> ) :
     (
      <>
      <div className="main">
        <span className='city'> {search} </span>
        <span className="temp"> {city.temp} Cel</span>
        <span className="min"> Min : {city.temp_min} Cel </span> <span className='sho'> | </span> <span className="max"> Max : {city.temp_max} Cel</span>
      </div>
      </>
     )}
    </div>
    </>
  )
}

export default Temprature
