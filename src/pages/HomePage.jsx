import React, { useState } from 'react'
import SearchFilter from '../components/SearchFilter'
import CountryList from '../components/CountryList';

const HomePage = () => {
  const [searchCountry, setSearchCountry] = useState('');
  const [region, setRegion] = useState('');
  return (
    <div className='home-page-container'>
      <SearchFilter 
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
        region={region}
        setRegion={setRegion}
      />
      <CountryList
        searchCountry={searchCountry}
        region={region}
      />
    </div>
  )
}

export default HomePage