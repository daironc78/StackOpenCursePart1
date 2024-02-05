import { useState } from 'react'

const Statistics = (props) => {
  return(
  <div>
    <p>{props.text} {props.bumber}</p>
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

  const Statistics = (props) => {
    <Statistics text={good} number={good} />
  }

  return (
    <div>

      <h1>give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text="Good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="Bad" />
      <h1>statistics</h1>
      <Statistics />

      <p>neutral {neutral}</p>
      <br />
      <p>bad {bad}</p>
      <br />
      <p>all {all}</p>
      <br />
      <p>Positive ({ good / all * 100 }) %</p>

    </div>
  )
}

export default App