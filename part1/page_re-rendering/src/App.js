import React, {useState} from 'react'

const App = () => {
    // the function useState retuurns an array containing two items
    // the first one gets assigned to counter, the second one is a function and gets assigned to setCounter
    // setCounter can be used to manipulate the counter variable
    const [counter, setCounter] = useState(0)

    // here we call the setTimeout function and pass it two parameters
    // a function to increment the counter state and a timeout of one second
    //setTimeout(() => setCounter(counter + 1), 1000)

    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)

    return (
        <div>
            <Display counter={counter}/>
            <Button onClick={increaseByOne} text='+1'></Button>
            <Button onClick={setToZero} text='0'></Button>
            <Button onClick={decreaseByOne} text='-1'></Button>
        </div>
    )
}

const Display = ({counter}) => (
    <div>
        {counter}
    </div>
)

const Button = ({onClick, text}) => (
    <button onClick={onClick}>
        {text}
    </button>
)


export default App