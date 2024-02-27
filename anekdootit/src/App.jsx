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
  const [vinner, setVinner] = useState([Array(8).fill(0)])



  const raffleAnecdote= () => {

  let oneAnecdote =(Math.floor(Math.random() * 8))

  setSelected(oneAnecdote)


  }

  const voteAnecdote = () => {

    const points = [0,1,2,3,4,5,6,7]
   
    const copy = [...points]

    if(selected == 0) {

      copy[0]+=1

    console.log(copy[0])

    } else if (selected == 1) {

      copy[1]+=1

    console.log(copy[1])

    } else if(selected == 2) {

      copy[2]+=1

    console.log(copy[2])

    } else if(selected == 3) {

      copy[3]+=1

    console.log(copy[3])

    } else if(selected == 4) {

      copy[4]+=1

    console.log(copy[4])

    } else if(selected == 5) {

      copy[5]+=1

    console.log(copy[5])

    } else if(selected == 6) {

      copy[6]+=1

    console.log(copy[6])

    } else if(selected == 7) {

      copy[7]+=1

    console.log(copy[7])

    }

  }

  const handleChange = () => {

    event.preventDefault();
   
    
  }
  

  return (
    <>
      <form onSubmit={handleChange}>
      <h1>ANEKDOOTIT</h1>
      {anecdotes[selected]} <br /> <br />
      <button onClick={voteAnecdote}>Vote</button>
      <button onClick={raffleAnecdote}>next anecdote</button> 
    </form>
    </>
  )
}

export default App