import { useState, useEffect } from 'react'
import countryService from './services/counries'
import CountryList from './components/CountryList'
import Filter from './components/Filter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [serachText, setSearchText] = useState('')

  useEffect(() => {
    countryService.getAll()
      .then(countries => {
        setCountries(countries)
      })
  }, [])

  const handleSearchChange = (e) => {
    console.log(e.target.value)
    setSearchText(e.target.value)
  }

  const handleShowClick = (countryName) => {
    setSearchText(countryName)
  }

  return (
    <div>
      <Filter
        serachText={serachText}
        onChange={handleSearchChange}
      />

      <br />

      <CountryList
        countries={countries}
        filter={serachText}
        onClickShow={handleShowClick}
      />
    </div>
  )
}

export default App
