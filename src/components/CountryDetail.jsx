import React, { useEffect, useState } from 'react'
import data from '../data.json'
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
  const { name } = useParams()
  const [country, setCountry] = useState(null);


  useEffect(() => {
    const filteredCountries = data.filter(country => {
      return country.name.toLowerCase().includes(name.toLowerCase());
    })

    if (filteredCountries.length > 0) {
      setCountry(filteredCountries[0])
    }

  }, [name])
  
  if (!country) {
    return <div>Loading...</div>
  }

  return (
    <div className='country-detail-container'>
      <div className='country-detail-flag'>
        <img  className='flag' src={country.flags.svg} alt="flag" />
      </div>
      <div className='country-detail'>
        <h3>{country.name}</h3>
        <div className='country-detail-info'>
          <ul className='country-detail-info-list'>
            <li> <strong>Native Name: </strong> {country.nativeName} </li>
            <li> <strong>Population: </strong> {country.population} </li>
            <li> <strong>Region: </strong> {country.region} </li>
            <li> <strong>Sub Region: </strong> {country.subregion} </li>
            <li> <strong>Capital: </strong>{country.capital} </li>
          </ul>
          <ul className='country-detail-info-list'>
            <li> <strong>Top Level Domain: </strong> {country.topLevelDomain} </li>
            <li>
              <strong>Currencies: </strong>
              {country.currencies.map((currency, index) => (
                <span key={index}>{currency.name}{index < country.currencies.length - 1 ? ', ' : ''}</span>
              ))}
            </li>
            <li>
              <strong>Languages: </strong>
              {country.languages.map((language, index) => (
                <span key={index}>{language.name}{index < country.languages.length - 1 ? ', ' : ''}</span>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CountryDetail