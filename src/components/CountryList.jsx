import React, { useEffect, useState } from 'react'
import data from '../data.json'
import CountryCard from './CountryCard';

const CountryList = ({ searchCountry, region }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(data);
  }, [])

  useEffect(() => {
    const filteredCountries = data.filter(country => {
      return (
        country.name.toLowerCase().includes(searchCountry) &&
        (region === '' || country.region.toLowerCase().includes(region))
      )
    })
    setCountries(filteredCountries)
  }, [searchCountry, region])

  return (
    <div className='country-list-container'>
      {countries && countries.map(country => 
        <CountryCard 
          key={country.numericCode}
          country={country}
        />)
      }
    </div>
  )
}

export default CountryList