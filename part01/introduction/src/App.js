import React from 'react'

// React component names must be capitalized
const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old</p>
        </div>
    )
}

const App = () => {
    const now = new Date()
    const a = 10
    const b = 20
    console.log('Message in a bottle')
    const name = 'Clemens'
    const age = 28

    return (
        // the content of a React component usually needs to contain one root element
        <div>
            <p>It is currently {now.toString()}</p>
            <p>{a} + {b} = {a + b}</p>
            <p>The following line is another component:</p>
            <Hello name="Peter" age={26+10}/>
            <Hello name={name} age={age}/>

        </div>
    )
}

export default App