import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({ country }) => {
  return (
    <Link className='country-link' to={`/country/${country.name}`}>
      <div className='country-card'>
        <div className='flag-container'>
          <img className='flag' src={country.flags.svg} alt="flag" />
        </div>
        <div className='country-info'>
          <h3 className='country-name'>{country.name}</h3>
          <span>
            <strong>Population: </strong>
            {country.population}
            </span>
          <span>
            <strong>Region: </strong>
            {country.region}
            </span>
          <span>
            <strong>Capital: </strong>
            {country.capital}
            </span>
        </div>
      </div>
    </Link>
  )
}

export default CountryCard