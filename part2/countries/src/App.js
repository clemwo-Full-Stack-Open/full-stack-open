import React, {useEffect, useState} from 'react'
import axios from 'axios'
import FilterForm from "./components/FilterForm"
import Countries from "./components/Countries"

const App = () => {

    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    const hook = () => {
        console.log('effect')
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data)
            })
    }

    useEffect(hook, [])

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setFilter(event.target.value)
    }

    return (
        <div>
            <FilterForm filter={filter} handleInputChange={handleInputChange}/>
            <Countries countries={countries} filter={filter} setFilter={setFilter}/>
        </div>
    )
}

export default App;
