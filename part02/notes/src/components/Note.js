<<<<<<< HEAD
import React from 'react'

const Note = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}

export default Note
=======
const Note = ({note}) => {
    return (
        <div>
            {note.content} <button>Toggle importance</button>
        </div>
    )
}
>>>>>>> f82399c7c73c153522081792be1a1ed15d576fec
