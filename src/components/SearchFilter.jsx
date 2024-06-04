import React from 'react'

const SearchFilter = ({ searchCountry, setSearchCountry, region, setRegion }) => {

  return (
    <div className='search-filter'>
      <input 
        type="text" 
        placeholder='Search for a country...'
        value={searchCountry}
        onChange={e => setSearchCountry(e.target.value)}
      />
      <select value={region} onChange={e => setRegion(e.target.value)}>
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      
    </div>
  )
}

export default SearchFilter