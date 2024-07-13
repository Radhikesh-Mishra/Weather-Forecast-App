import { useState, useEffect } from 'react'
import './App.css'
import Input from './components/Input'
import Button from './components/Button'
import Card from './components/Card'
import { useWeather } from './context/Weather'

function App() {
  const weather = useWeather();

  useEffect(() => {
    weather.fetchCurrentUserLocationData();
  }, []);

  return (
    <div className='App'>
      <h1>WeatherWise</h1>
      <Input />
      <Button onClick={weather.fetchData} value='Search'/><br />
      <h3>Weateher Forecast</h3>
      <Card/><br />
    </div>
  )
}

export default App
