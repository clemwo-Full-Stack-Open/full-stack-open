import React from 'react'
import Person from './Person'

const Numbers = ({persons, nameFilter}) => {
    return (
        <ul>
            {persons
                .filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
                .map(person =>
                    <Person key={person.name} name={person.name} number={person.number}/>
                )}
        </ul>
    )
}


export default Numbers