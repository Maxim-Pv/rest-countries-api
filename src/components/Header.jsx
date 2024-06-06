import React from 'react'

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div className='header-container'>
      <h2>Where in the world?</h2>
      <button className='btn-change-mode'
        onClick={() => setDarkMode(!darkMode)}
      >
        <span className='icon-change-mode'></span>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  )
}

export default Header