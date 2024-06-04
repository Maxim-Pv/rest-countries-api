import { useState } from 'react';
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import './styles.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={'container ' + (darkMode ? 'dark-mode' : 'light-mode')}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Routes>
            <Route index path='/' element={<HomePage/>} />
            <Route path='/country/:name' element={<CountryPage/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
