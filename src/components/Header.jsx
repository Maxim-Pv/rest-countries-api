import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div className='header-container'>
      <h2>Where in the world?</h2>
      <button className='btn-change-mode'
        onClick={() => setDarkMode(!darkMode)}
      >
        <FontAwesomeIcon icon={faMoon} style={{color: "#f9fafa",}} />
        {darkMode ? 'Light mode' : 'Dark mode'}
      </button>
    </div>
  )
}

export default Header