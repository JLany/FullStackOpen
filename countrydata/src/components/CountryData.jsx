import WeatherReport from './WeatherReport'

const CountryData = ({ country }) => {

  return (
    <div>
      <h1>{country.name.common}</h1>

      capital {country.capital[0]} <br />
      area {country.area}

      <h2>languages:</h2>
      <ul>
        {
          Object.values(country.languages).map(lang => (
            <li key={lang}>
              {lang}
            </li>
          ))
        }
      </ul>

      <img src={country.flags.png} alt={`${country.name.common}'s flag.`} />

      <WeatherReport
        capital={country.capital[0]}
        tld={country.tld[0]}
      />

    </div>
  )
}

export default CountryData
