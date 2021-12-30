import React, { useState } from 'react'

const Button = ({eventHandler, text}) => {
  return (
      <div>
        <button onClick={eventHandler}>
          {text}
        </button>
      </div>
  )
}

const Anecdote = ({anecdote}) => {
  return (
      <div>
        <p>{anecdote}</p>
      </div>
  )
}

const Votes = ({votes}) => {
  return (
      <div>
        <p>Votes: {votes}</p>
      </div>
  )
}

const MostVoted = ({anecdotes, anecVotes}) => {
  const indexOfMaxValue = anecVotes.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)
  const mostVotedAnecdote = anecdotes[indexOfMaxValue]

  return (
      <div>
        <p>{mostVotedAnecdote}</p>
      </div>
  )
}

const App = () => {
  const [selected, setSelected] = useState(0)
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [anecVotes, setAnecVotes] = useState(Array(anecdotes.length).fill(0))
  const randomSelectedAnecdote = () => setSelected(Math.floor(Math.random()*anecdotes.length))

  // vote for anecdote
  const voteAnecdote = ({anecdote}) => {
    // create copy of state
    const anecVotesCopy = [...anecVotes]
    // increase votes in state copy
    anecVotesCopy[selected] = anecVotes[selected] + 1
    // set state to state copy
    setAnecVotes(anecVotesCopy)
  }

  return (
      <div>
        <h1>Anecdote of the day</h1>
        <Anecdote anecdote={anecdotes[selected]}/>
        <Votes votes={anecVotes[selected]}/>
        <Button eventHandler={voteAnecdote} text='Vote for Anecdote'/>
        <Button eventHandler={randomSelectedAnecdote} text='Random Anecdote'/>
        <h1>Anecdote with most votes</h1>
        <MostVoted anecdotes={anecdotes} anecVotes={anecVotes}/>
      </div>
  )
}

export default App