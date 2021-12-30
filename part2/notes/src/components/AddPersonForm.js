import React from 'react'

const AddPersonForm = ({newName, onNameChange, newNumber, handleNumberChange, onClick}) => {

    return (
        <div>
            <form>
                <div>
                    name:
                    <input
                        value={newName}
                        onChange={onNameChange}
                    />
                </div>
                <div>
                    number:
                    <input
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <button onClick={onClick}
                            type="submit">add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddPersonForm