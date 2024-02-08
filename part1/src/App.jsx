import { useState } from 'react'

const Statistics = (props) => {
console.log(props)
  return(
    <div>
      <p>{props.estadisttica.name}{props.estadisttica.numero}</p>
      <br />
    </div>
  )
}

const Statistics2 = (props) => {
  console.log(props)
    return(
      <div>
        <p>{props.cali} {props.pasto}</p>
        <br />
      </div>
    )
  }

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [text, number] = useState("")

  const setToGood = () => {
    console.log('good', good)
    setAll(good + neutral + bad)
    setGood(good + 1)
  }

  const setToNeutral = () => {
    console.log('neutral', neutral)
    setAll(good + neutral + bad)
    setNeutral(neutral + 1)
  }

  const setToBad = () => {
    console.log('bad', bad)
    setAll(good + neutral + bad)
    setBad(bad + 1)
  }

  const Button = (props) => (
    <button onClick={props.handleClick}>
    {props.text}
    </button>
  )

  const course = {

        name: 'good ',
        numero: good

        name: 'neutral ',
        numero: neutral

        name: 'bad ',
        numero: bad

        name: 'all ',
        numero: all
    
  }
  return (
    <div>

      <h1>give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text="Good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="Bad" />
      <h1>statistics</h1>

      <Statistics estadisttica={course}/>
      <Statistics2 cali="no" pasto="si"/>
      
      <p>Positive ({ good / all * 100 }) %</p>

    </div>
  )
}

export default App