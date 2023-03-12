import { render } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useWeather } from '../Context/weatherContext';

function Cards() {
  
  const {weather,state} = useWeather();
 

  return (
    <div>



        {state ? 
        <div className='cards'>
          <div className='card'>
            <img  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
            <p>{weather.weather[0].description}</p>
            <p>{weather.main.temp} derece</p>
            <p id="sehir">{weather.name}, {weather.sys.country}</p>
          </div>
        </div>: <h3>Please enter a city name</h3>}



    </div>
    
  )

 
}

export default Cards;