import React, { useEffect, useState } from "react";
import data from "../data.json";
import { Link, useNavigate, useParams } from "react-router-dom";

const CountryDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [borders, setBorders] = useState(null);

  useEffect(() => {
    const filteredCountries = data.filter((country) => {
      return country.name.toLowerCase().includes(name.toLowerCase());
    });

    if (filteredCountries.length > 0) {
      setCountry(filteredCountries[0]);
    }

    const bordersCode = filteredCountries[0].borders;

    if (!bordersCode) {
      return;
    }
    const countryBorders = bordersCode.map((border) => {
      return data.find((country) => country.alpha3Code === border);
    });
    setBorders(countryBorders);
  }, [name]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div >
      <div>
        <button className="btn-back" onClick={() => navigate(-1)}>
          <span className='icon-arrow'></span>
          Back
        </button>
      </div>
      <div className="country-detail-container">
        <div className="country-detail-flag">
          <img className="flag" src={country.flags.svg} alt="flag" />
        </div>
        <div className="country-detail">
          <h2 className="country-detail-name">{country.name}</h2>
          <div className="country-detail-info">
            <ul className="country-detail-info-list">
              <li> <strong>Native Name: </strong> {country.nativeName} </li>  
              <li> <strong>Population: </strong> {country.population} </li>
              <li> <strong>Region: </strong> {country.region} </li>  
              <li> <strong>Sub Region: </strong> {country.subregion} </li>
              <li> <strong>Capital: </strong> {country.capital} </li>  
            </ul>
            <ul className="country-detail-info-list">
              <li> <strong>Top Level Domain: </strong> {country.topLevelDomain} </li>
              <li>
                <strong>Currencies: </strong>
                {country.currencies.map((currency, index) => (
                  <span key={index}>
                    {currency.name}
                    {index < country.currencies.length - 1 ? ", " : ""}
                  </span>
                ))}
              </li>
              <li>
                <strong>Languages: </strong>
                {country.languages.map((language, index) => (
                  <span key={index}>
                    {language.name}
                    {index < country.languages.length - 1 ? ", " : ""}
                  </span>
                ))}
              </li>
            </ul>
          </div>

          <div>
            <strong>Border Countries:</strong>
            <div className="border-container">
              {borders 
                ? borders.map((country) => (
                  <Link
                    key={country.alpha3Code}
                    to={`/country/${country.name}`}
                  >
                    <button className="border-button">{country.name}</button>
                  </Link>
                  ))
                : "None"
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
