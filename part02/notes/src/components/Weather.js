import React, {useEffect, useState} from "react"
import axios from "axios";

const Weather = ({country}) => {

    const api_key = process.env.REACT_APP_API_KEY
    const [temperature, setTemperature] = useState('')

    const hook = () => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${api_key}`)
            .then(response => {
                setTemperature((response.data.main.temp - 273.15).toFixed(2))
            })
    }

    useEffect(hook, [])

    return (
        <div>
            <h2>Weather in {country.capital[0]}, {country.name.common}</h2>
            <p>Temperature in Celsius: {temperature}</p>
        </div>
    )
}


export default Weather