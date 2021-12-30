import React from 'react'

const successStyle = {
    color: 'green',
    fontSize: 30,
    background: 'lightgrey',
    border:"4px solid green",
    borderRadius: 10,
    padding: '10px',
    marginBottom: '5px'
}

const errorStyle = {
    color: 'red',
    fontSize: 30,
    background: 'lightgrey',
    border:"4px solid red",
    borderRadius: 10,
    padding: '10px',
    marginBottom: '5px'
}

const Notification = ({message}) => {

    if(message === null) return null

    if(message.includes('Success')){
        return (
            <div style={successStyle}>
                {message}
            </div>
        )
    }
    if(message.includes('Error')){
        return (
            <div style={errorStyle}>
                {message}
            </div>
        )
    }
}

export default Notification