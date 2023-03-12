import React from 'react'
import './App.css';
import Container from './Components/container';
import { WeatherProvider } from './Context/weatherContext';

function App() {
  return (
    <>
    <WeatherProvider>    
    <Container/>
    </WeatherProvider>
    </>

  )
}

export default App