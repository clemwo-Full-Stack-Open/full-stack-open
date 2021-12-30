const Hello = ({name, age}) => {
    // this is called destructuring:
    // const {name, age} = props
    // in JavaScript you can easily define a function within another function
    // bornYear() has access to all the props that Hello() has, so it doesn't need parameters in this case
    const bornYear = () => new Date().getFullYear() - age

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old
            </p>
            <p>
              So you were probably born in {bornYear()}
            </p>
        </div>
    )
}

const App = () => {
    const name = 'Peter'
    const age = 10

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="Maya" age={26 + 10}/>
            <Hello name={name} age={age}/>
        </div>
    )
}

export default App;
