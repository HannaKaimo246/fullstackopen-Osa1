const App = () => {
  
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {

    return(
        <h1>
          {props.course}
        </h1>
    )
  }

  const Part = (props) => {

    return(
      <div>
      <p> {props.parts}</p>
      <p> {props.exercises}</p>
      </div>
    )
  }

  
  return (
    <div>
      <Header course={course} />
      <Part parts={part1} exercises={exercises1}/>
      <Part parts={part2} exercises={exercises2}/>
      <Part parts={part3} exercises={exercises3}/>
    </div>
  )
}

export default App