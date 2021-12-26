import React from 'react'
import Person from './Person'

const Numbers = ({persons, nameFilter, removePerson}) => {
    return (
        <ul>
            {persons
                .filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
                .map(person => {
                        return (
                            <li key={person.id}>
                                <Person person={person} removePerson={removePerson}/>
                            </li>
                        )
                    }
                )}
        </ul>
    )
}


export default Numbers