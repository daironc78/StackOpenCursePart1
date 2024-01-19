const Part = (props) => {

  return (
    <div>
      <p>
       {props.name}, {props.exercises}
      </p>
    </div>
  )
}

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




  let exer1 = 0
  let exername
  course.parts.map(value => exer1 += value.exercises)

  course.parts.map(value => exername = value.name)
  
  const Header = () => {
    return (
    <div>
    
    {course.name}
    
    </div>
    )
  }
  
  const Total = () => {

    

    return (
    <div>
    
           <p>Total exercises is {exer1} </p>
    
    </div>
    )
  }
  
  const Content = () => {
    
    return (
    
    <div>
      {
        course.parts.map(value => <Part name={ value.name } exercises={ value.exercises }/>)
      }
    </div>
    
    )
  }


  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  )
  
    }

export default App
