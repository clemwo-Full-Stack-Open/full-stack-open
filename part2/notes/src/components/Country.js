import React from 'react'
import Weather from "./Weather";

const Country = ({country}) => {

    const languages = country.languages
    const languagesArray = Object.entries(languages).map(([key, value]) => value)


    return (
        <div>
            <h1>{country.name.common}</h1>
            <img src={country.flags["png"]}/>
            <p>Capital: {country.capital[0]}</p>
            <p>Population: {country.population}</p>
            <h2>Languages</h2>
            <ul>
                {languagesArray.map(language =>
                    <li key={language.toLowerCase()}>{language}</li>
                )}
            </ul>
            <Weather country={country}/>
        </div>
    )
}

export default Country