import { useState } from 'react'
import ReactDOM from "react-dom";
import './App.css';

const StatisticLine = (props) => {

  return (
    <tr>
      <td class="statisticline">{props.text}</td>
      <td class="statisticline">{props.value}</td>
    </tr>
  )

}

const Statistics = ({ good, neutral, bad, all, average, positiveResult }) => {
  return (
    <table>
      <tbody>
          <StatisticLine text="good" value={good}/> 
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positiveResult} />
      </tbody>
    </table>
  )
}

const App = () => {

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

  const positiveResult = good / all * 100;
  const average = good / all;

  const History = () => {
    if ((good === 0) && (neutral === 0) && (bad === 0)) {
      return (
        <div>
          No feedback given
        </div>
      )
    }

    return (
      <div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average}
          positiveResult={positiveResult} />
      </div>
    )
  }

  return (
    <div>

      <h1>give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text="Good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="Bad" />
      <h1>statistics</h1>
      <History good={good} />
    </div>
  )
}

export default App