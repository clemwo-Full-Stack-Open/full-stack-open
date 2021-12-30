import React, {useState} from 'react'

const Person = ({name}) => {
    return (
        <div>
            <p>{name}</p>
        </div>
    )
}

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ])
    const [newName, setNewName] = useState('')

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        const person = {
            name: newName
        }
        setPersons(persons.concat(person))
        setNewName('')
        console.log(persons)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name:
                    <input value={newName}
                           onChange={handleNameChange}
                    />
                </div>
                <button type="submit">add</button>
            </form>
            <h2>Numbers</h2>
                <ul>
                    {persons.map(person =>
                        <Person key={person.name} name={person.name}/>
                    )}
                </ul>
        </div>
    )
}

export default App