import { useState } from 'react'


const StatisticLine = ({ text, value }) => (
  
    <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>

);

const Statistics = (props) => {

  return (

      <table>
        <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.sum} />
        <StatisticLine text="average" value={props.avarage} />
        <StatisticLine text="positive" value={props.positive} />
        </tbody>
      </table>
  )
}



const Button = (props) => (

  <button onClick={props.handleClick}>
    {props.text}
  </button>

)


const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState()
  const [avarage, setAvarage] = useState(0)
  const [positive, setPositive] = useState(0)


  const handleGood = () => {
   
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood+neutral+bad)
    setAvarage((updatedGood+bad*-1)/(updatedGood+neutral+bad))
    setPositive(updatedGood/(updatedGood+neutral+bad)*100 + " %")

  }

  const handleNeutral = () => {
    
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(good+updatedNeutral+bad)
    setAvarage((good+bad*-1)/(good+updatedNeutral+bad))
    setPositive(good/(good+updatedNeutral+bad)*100 + " %")

  }

  const handleBad = () => {
    
    const updatedBad = bad + 1
    setBad(updatedBad);
    setTotal(good+neutral+updatedBad)
    setAvarage((good+updatedBad*-1)/(good+neutral+updatedBad))
    setPositive(good/(good+neutral+updatedBad)*100 + " %")
  

  }

  if(good<1 && neutral <1 && bad <1) {

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={() => handleGood()} text='good' />
      <Button handleClick={() => handleNeutral()} text="neutral"/>
      <Button handleClick={() => handleBad()} text="bad" />
      <h1>statistics</h1>
      <p>No feedback given</p>   
    </>
  )
}



return (

    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=>handleGood()} text="good" />
      <Button handleClick={() => handleNeutral()} text="neutral" />
      <Button handleClick={() => handleBad()} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} 
      neutral = {neutral} 
      bad = {bad} 
      sum = {total} 
      avarage = {avarage} 
      positive = {positive}
      />  
    </div>
  )
}

export default App