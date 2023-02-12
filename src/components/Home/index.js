import './index.css'
import {Component} from 'react'
import * as math from 'mathjs'

import Header from '../Header'
import * as utils from '../../functions'

const numberFunctions = {
  one: utils.one,
  two: utils.two,
  three: utils.three,
  four: utils.four,
  five: utils.five,
  six: utils.six,
  seven: utils.seven,
  eight: utils.eight,
  nine: utils.nine,
}
const numberFunctions1 = {
  ONE: utils.ONE,
  TWO: utils.TWO,
  THREE: utils.THREE,
  FOUR: utils.FOUR,
  FIVE: utils.FIVE,
  SIX: utils.SIX,
  SEVEN: utils.SEVEN,
  EIGHT: utils.EIGHT,
  NINE: utils.NINE,
}
const calculation1 = {
  PLUS: utils.PLUS,
  MINUS: utils.MINUS,
  DIVISION: utils.DIVISION,
  TIMES: utils.TIMES,
}
const numbers = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
]
const calculations = ['PLUS', 'MINUS', 'DIVISION', 'TIMES']
const logData =
  localStorage.getItem('activity') === null
    ? []
    : JSON.parse(localStorage.getItem('activity'))

class Home extends Component {
  state = {
    number1: 'ONE',
    calculation: 'PLUS',
    number2: 'one',
    result: 2.0,
  }

  setNumber1 = e => {
    this.setState({number1: e.target.value})
  }

  setCalculation = e => {
    this.setState({calculation: e.target.value})
  }

  setNumber2 = e => {
    this.setState({number2: e.target.value})
  }

  onData = () => {
    const {number1, calculation, number2} = this.state

    const result = numberFunctions1[number1](
      calculation1[calculation](numberFunctions[number2]()),
    )
    const data = {
      result,
      time: new Date(),
    }
    logData.unshift(data)
    localStorage.setItem('activity', JSON.stringify(logData))

    this.setState({result: math.evaluate(result).toFixed(1)})
  }

  render() {
    const {result} = this.state

    return (
      <div className="home-container">
        <Header />
        <div className="home">
          <div className="td">
            <div>
              <div>
                <label htmlFor="1">Select Number</label>
                <select id="1" onChange={this.setNumber1}>
                  {numbers.map(each => (
                    <option key={each} value={each.toUpperCase()}>
                      {each.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="2">Select Calculation</label>
                <select id="2" onChange={this.setCalculation}>
                  {calculations.map(each => (
                    <option key={each} value={each}>
                      {each}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="3">Select Number</label>
                <select id="3" onChange={this.setNumber2}>
                  {numbers.map(each => (
                    <option key={each} value={each}>
                      {each}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="td-2">
              <img
                className="teacher"
                src="https://res.cloudinary.com/dl3cvyhk8/image/upload/v1675961634/professor_fbzzeu.jpg"
                alt=" "
              />
              <button
                type="button"
                onClick={this.onData}
                className="submit-button"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="sd">
            <img
              src="https://res.cloudinary.com/dl3cvyhk8/image/upload/v1670324215/b5adbd66b693db502be7544272657a55_msctyr.webp"
              alt=" "
            />
            <p className="answer">Answer</p>
            <p className="result">{result}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
