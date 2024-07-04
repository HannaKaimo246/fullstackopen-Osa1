import { useState } from 'react'

const App = () => {


    const anecdotes = [
      'If it hurts, do it more often.',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
      'The only way to go fast, is to go well.'
    ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))


  const raffleAnecdote= () => {

  let oneAnecdote =(Math.floor(Math.random() * 8))

  setSelected(oneAnecdote)


  }

  const voteAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
}

const mostVotes = () => {
    const maxVotes = Math.max(...votes)
    const index = votes.indexOf(maxVotes)
    return anecdotes[index]
}

const handleChange = () => {

  event.preventDefault()

}


  return (
    <>
      <form onSubmit={handleChange}>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} 
      <br /> has {votes[selected]} votes<br /><br />
      <button onClick={voteAnecdote}>Vote</button>
      <button onClick={raffleAnecdote}>next anecdote</button> 
      <h1>Anecdote with most votes</h1>
      <div>{mostVotes()}</div>
      <div>has {Math.max(...votes)}</div>
    </form>
    </>
  )
}

export default App