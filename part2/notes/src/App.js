import React, {useState, useEffect} from 'react'
import axios from 'axios'
import noteService from "./services/noteService";


const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)

    const hook = () => {
        console.log('effect')
        axios
            .get('http://localhost:3001/notes')
            .then(response => {
                console.log('promise fulfilled')
                setNotes(response.data)
            })
    }

    useEffect(hook, [])

    return (
        <div>
            <ul>
                {notes.map(note => <li key={note.id}>{note.content}</li>)}
            </ul>
        </div>
    )
}

export default App