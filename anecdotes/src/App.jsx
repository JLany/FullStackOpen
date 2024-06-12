import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [top, setTop] = useState(0)

  const handleSelectNext = () => {
    const nextSelected = Math.floor(Math.random() * anecdotes.length)
    setSelected(nextSelected)

    console.log(nextSelected)
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)

    const newTop = newVotes.indexOf(newVotes.reduce((max, currElement) => {
      return (currElement > max ? currElement : max)
    }))

    setTop(newTop)
    console.log('top is ', newTop)
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} votes={votes[selected]} />
      <Button onClick={handleVote} text='vote' />
      <Button onClick={handleSelectNext} text='next anecdote' />

      {votes[top] > 0 &&
        <div>
          <h1>Anecdote with the most votes</h1>
          <Anecdote text={anecdotes[top]} votes={votes[top]} />
        </div>
      }
    </div>
  )
}

const Anecdote = ({ text, votes }) => {
  return (
    <div>
      <h2>{text}</h2>
      <h3>has {votes} votes</h3>
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

export default App