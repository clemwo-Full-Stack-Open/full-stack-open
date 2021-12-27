const Note = ({note}) => {
    return (
        <div>
            {note.content} <button>Toggle importance</button>
        </div>
    )
}