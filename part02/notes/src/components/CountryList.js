import React from 'react'

const CountryList = ({countryList, filter, setFilter}) => {

    if (countryList.length > 10) {
        return (
            <div>
                <p>Too many matches, please specify filter</p>
            </div>
        )
    }

    return (
        <div>
            <ul>
                {countryList.map(country =>
                    <li key={country.cca2}>{country.name.common}
                    <button onClick={() => setFilter(country.name.common)}
                            type="submit">show
                    </button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default CountryList