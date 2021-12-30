import {useState} from "react";

const Header = ({text}) => {
    return (
        <div>
            <h1>
                {text}
            </h1>
        </div>
    )
}

const Button = ({eventHandler, text}) => {
    return (
        <div>
            <button onClick={eventHandler}>
                {text}
            </button>
        </div>
    )
}

const StatisticLine = ({text, value}) => {
    return (
        <tr>
            <td>
                {text}:
            </td>
            <td>
                {value}
            </td>
        </tr>
    )
}

const Statistics = ({good, neutral, bad}) => {
    const totalVotes = good + neutral + bad
    const average = (good * 1 + bad * (-1)) / totalVotes
    const positivePercentage = (good / totalVotes) * 100

    if (totalVotes === 0)
        return <p>Please give feedback in order to see statistics</p>

    return (
        <div>
            <table>
                <tbody>
                <StatisticLine text='Good' value={good}/>
                <StatisticLine text='Neutral' value={neutral}/>
                <StatisticLine text='Bad' value={bad}/>
                <StatisticLine text='Average' value={average.toFixed(2)}/>
                <StatisticLine text='Positive' value={positivePercentage.toFixed(2) + ' %'}/>
                </tbody>
            </table>
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => {
        setGood(good + 1)
    }
    const handleNeutral = () => {
        setNeutral(neutral + 1)
    }
    const handleBad = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <Header text={'Give Feedback'}/>
            <Button eventHandler={handleGood} text='Good'/>
            <Button eventHandler={handleNeutral} text='Neutral'/>
            <Button eventHandler={handleBad} text='Bad'/>
            <Header text={'Statistics'}/>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App;
