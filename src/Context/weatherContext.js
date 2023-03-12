import { useContext, createContext } from 'react';
import { useState } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);

  const [city, setCity] = useState("istanbul");

  const [state, setState] = useState(false);

  const value = {
    city,
    setCity,    
    weather,
    setWeather,
    state,
    setState,
  };
  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
