import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const StatisticLine = ({ text, value }) => (
  <div>
    {text} {value}
  </div>
)

StatisticLine.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

const Statistics = ({ good, neutral, bad}) => {
  const all = (good+neutral+bad)
  const average = (good-bad)/(all)
  const positive = () => {
    if (all === 0) return 0
    return (good / all) * 100
  }
  return (
    <table>
    <tbody>
      <tr>
        <td><StatisticLine text="good" value={good} /></td>
      </tr>
      <tr>
        <td><StatisticLine text="neutral" value={neutral} /></td>
      </tr>
      <tr>
        <td><StatisticLine text="bad" value={bad} /></td>
      </tr>
      <tr>
        <td><StatisticLine text="all" value={all} /></td>
      </tr>
      <tr>
        <td><StatisticLine text="average" value={isNaN(average) ? 0 : average.toFixed(2)} /></td>
      </tr>
      <tr>
        <td><StatisticLine text="positive" value={`${positive().toFixed(2)}%`} /></td>
      </tr>
    </tbody>
  </table>
  )
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = (good+neutral+bad)
  const average = (good-bad)/(all)
  const positive = () => {
    if (all === 0) return 0
    return (good / all) * 100
  }

  return (
    <React.Fragment>
      <h2>give feedback</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button handleClick={() => setGood(good + 1)} text='good' />
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button handleClick={() => setBad(bad + 1)} text='bad' />
      </div>
      <h2>statistics</h2>
      {good + neutral + bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
    </React.Fragment>
  )
}

export default App
