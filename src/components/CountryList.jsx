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
    });

    const priorityOrder = ['Germany', 'United States of America', 'Brazil', 'Iceland'];

    filteredCountries.sort((a, b) => {
      const indexA = priorityOrder.indexOf(a.name);
      const indexB = priorityOrder.indexOf(b.name);
      if (indexA === -1 && indexB === -1) {
        return a.name.localeCompare(b.name);
      }
      if (indexA === -1) {
        return 1
      }
      if (indexB === -1) {
        return -1
      }
      return indexA - indexB
    });

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