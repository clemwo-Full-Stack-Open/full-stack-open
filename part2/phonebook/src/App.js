import React, {useState} from 'react'
import Header from "./components/Header"
import Filter from "./components/Filter"
import AddPersonForm from "./components/AddPersonForm"
import Numbers from "./components/Numbers"



const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Captain Sum Ting Wong',
            number: '12345'
        },
        {
            name: 'Wi Tu Lo',
            number: '12345'
        },
        {
            name: 'Ho Lee Fuk',
            number: '12345'
        }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [nameFilter, setNameFilter] = useState('')

    const handleNameFilterChange = (event) => {
        setNameFilter(event.target.value)
        console.log(event.target.value)
        // if filter is empty show all persons
        if (event.target.value === '') return

    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
        // prevent default action of refreshing the page
        event.preventDefault()
        // check if person is already in phonebook
        const index = persons.findIndex(person => person.name === newName)
        if (index > 0) return window.alert(`Brennst du? ${newName} gibt es schon`)
        // add new person to phonebook
        setPersons(persons.concat({name: newName, number: newNumber}))
    }

    return (
        <div>
            <Header text='Phonebook'/>
            <Filter text='Filter by name: ' value={nameFilter} onChange={handleNameFilterChange}/>
            <Header text='Add new contact'/>
            <AddPersonForm newName={newName} onNameChange={handleNameChange} newNumber={newNumber}
                           handleNumberChange={handleNumberChange} onClick={addPerson}/>
            <Header text='Numbers'/>
            <Numbers persons={persons} nameFilter={nameFilter}/>
        </div>
    )
}

export default App