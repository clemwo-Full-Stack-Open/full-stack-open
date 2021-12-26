import React, {useEffect, useState} from 'react'
import Header from "./components/Header"
import Filter from "./components/Filter"
import AddPersonForm from "./components/AddPersonForm"
import Numbers from "./components/Numbers"
import personService from "./personService";


const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [nameFilter, setNameFilter] = useState('')

    const handleNameFilterChange = (event) => {
        setNameFilter(event.target.value)
        // if filter is empty show all persons
        if (event.target.value === '') return
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const sortPersons = persons => {
        const sortedPersons =
            persons.sort((personA, personB) => {
            if (personA.name.toLowerCase() < personB.name.toLowerCase()) return -1
            if (personA.name.toLowerCase() > personB.name.toLowerCase()) return 1
            return 0
        })
        return sortedPersons
    }

    const addPerson = event => {
        // prevent default action of refreshing the page
        event.preventDefault()
        const newPerson = {
            name: newName,
            number: newNumber
        }
        // check if person is already in phonebook
        const person = persons.find(person => person.name === newName)

        // if person is in phonebook already
        if (person !== undefined) {
            const result = window.confirm(`${newName} is already in phone book. Do you want to update the number?`)
            if (result) {
                newPerson.id = person.id
                console.log(`Updating ${person.name}, id: ${person.id}`)
                personService
                    .update(person.id, newPerson)
                    .then(returnedPerson => {
                        const updatedPersons = persons.filter(person => person.id !== returnedPerson.id).concat(returnedPerson)
                        setPersons(sortPersons(updatedPersons))
                    })
            }
            setNewName('')
            setNewNumber('')
            return
        }

        // if person.name isn't in phonebook already, add person
        personService
            .create(newPerson)
            .then(returnedPerson => {
                setPersons(sortPersons(persons.concat(returnedPerson)))
                setNewName('')
                setNewNumber('')
            })
    }

    const removePerson = (id) => {
        const personToRemove = persons.find(person => person.id === id)
        const result = window.confirm(`Oi mate, you really want to delete ${personToRemove.name}?`);
        if (result) {
            personService
                .removePerson(id)
                .then(setPersons(persons.filter(person => person.id !== id)))
        }
    }

    const hook = () => {
        personService
            .getAll().then(response => {
            setPersons(sortPersons(response))
        })
    }

    useEffect(hook, [])

    return (
        <div>
            <Header text='Phonebook'/>
            <Filter text='Filter by name: ' value={nameFilter} onChange={handleNameFilterChange}/>
            <Header text='Add new contact'/>
            <AddPersonForm newName={newName} onNameChange={handleNameChange} newNumber={newNumber}
                           handleNumberChange={handleNumberChange} onClick={addPerson}/>
            <Header text='Numbers'/>
            <Numbers persons={persons} nameFilter={nameFilter} removePerson={removePerson}/>
        </div>
    )
}

export default App