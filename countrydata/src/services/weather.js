import axios from 'axios'

const get = (capital, tld) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital},${tld.replace('.', '')}&APPID=${import.meta.env.VITE_WEATHER_KEY}`

  return axios
    .get(url)
    .then(response => response.data)
}


export default { get }
