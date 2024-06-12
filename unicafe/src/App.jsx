import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />

      <h2>statistics</h2>

      <Statistics good={good} neutral={neutral} bad={bad} />
      
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

const Statistics = ({ good, neutral, bad }) => {

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h4>No feedback given</h4>
      </div>
    )
  }

  const total = good + neutral + bad
  const value = good - bad
  const avg = (total === 0 ? 0 : value / total)
  const positiveRate = (total === 0 ? 0 : good / total * 100.0)

  return (
    <div>
      <table>
        <tbody>
          <Statistic title='good' statistic={good} /> 
          <Statistic title='neutral' statistic={neutral} /> 
          <Statistic title='bad' statistic={bad} /> 
          <Statistic title='all' statistic={total} />
          <Statistic title='average' statistic={avg} />
          <Statistic title='postitve' statistic={positiveRate} complementary='%' />
        </tbody>
      </table>
    </div>
  )
}

const Statistic = ({ title, statistic, complementary }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{statistic}</td>
      <td>{complementary}</td>
    </tr>
  )
}

export default App