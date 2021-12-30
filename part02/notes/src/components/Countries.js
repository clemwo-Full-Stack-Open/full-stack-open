import React from 'react'
import Country from './Country'
import CountryList from './CountryList'

const Countries = ({countries, filter, setFilter}) => {
    const filteredCountries = countries
        .filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

    if (filteredCountries.length === 1) {
        return (
            <div>
                <Country key={filteredCountries[0].cca2} country={filteredCountries[0]}/>
            </div>
        )
    }

    return (
        <div>
            <CountryList countryList={filteredCountries} filter={filter} setFilter={setFilter}/>
        </div>
    )
}

export default Countries