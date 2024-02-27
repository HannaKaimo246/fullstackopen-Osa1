
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

    const Header = () => {

      return(
        <div>
          <h1>
            {course.name}
          </h1>
        </div>
      )
    }
  

  const Content = () => {

    return(
      <div>
      {course.parts[0].name}  
      {course.parts[1].name}
      {course.parts[2].name}
      </div>
    )
  }

  const Total = () => {

    return(
      <div>
      {course.parts[0].exercises}+
      {course.parts[1].exercises}+
      {course.parts[2].exercises}=
      {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
      </div>
    )

  }


  return (
    <div>
      <Header /><br />
      <Content /><br />
      <Total />
    </div>
  )
}

export default App