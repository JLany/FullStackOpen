import { useState, useEffect } from 'react'
import weatherService from '../services/weather'

const WeatherReport = ({ capital, tld }) => {
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    weatherService.get(capital, tld)
      .then(weatherData => {
        setWeatherData({
          temp: weatherData.main.temp,
          windSpeed: weatherData.wind.speed,
          imageUrl: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
        })
      })
  }, [])

  if (!weatherData) {
    return null
  }

  console.log(weatherData)

  return (
    <div>
      <h2>Weather in {capital}</h2>

      temprature {weatherData.temp - 275.15} Celcius <br />

      <img src={weatherData.imageUrl} /> <br />

      wind {weatherData.windSpeed} m/s
    </div>
  )
}

export default WeatherReport
