import CountryData from './CountryData'


const CountryList = ({ countries, filter, onClickShow }) => {

  const countriesToShow = filter
    ? countries.filter(country =>
      country.name.common.toLowerCase().includes(filter.toLowerCase())
    )
    : countries

  if (countriesToShow.length > 10) {
    return (
      <p>Too many matches, specify another filter.</p>
    )
  }

  if (countriesToShow.length == 1) {
    return (
      <CountryData country={countriesToShow[0]} />
    )
  }

  return (
    <div>
      <ul style={{ listStyleType: 'none' }}>
        {
          countriesToShow.map(country => (
            <li key={country.cca3} >
              {country.name.common}
              <button onClick={() => onClickShow(country.name.common)} >
                Show Details
              </button>
            </li>
          )
          )
        }
      </ul>
    </div>
  )
}

export default CountryList
