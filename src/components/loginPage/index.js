import './index.css'
import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'

const sampleCredentials = [
  {un: 'master', pwd: 'master123'},
  {un: 'student', pwd: 'student123'},
]

class LoginPage extends Component {
  state = {
    user: 'Master',
    username: '',
    password: '',
    error: false,
  }

  setUser = e => {
    // console.log(e.target.value)
    this.setState({user: e.target.value})
  }

  setUserName = e => {
    // console.log(e.target.value)
    this.setState({username: e.target.value})
  }

  setPassword = e => {
    // console.log(e.target.value)
    this.setState({password: e.target.value})
  }

  submitFormData = e => {
    e.preventDefault()
    const {user, username, password} = this.state
    if (username.length > 0 && password.length > 0) {
      if (user === 'Master') {
        const {un, pwd} = sampleCredentials[0]
        if (un === username && pwd === password) {
          const {history} = this.props
          history.replace('/')
          Cookies.set('signedMaster', true, {expires: 30})
          this.setState({error: false})
        } else {
          this.setState({error: true})
        }
      } else if (user === 'Student') {
        const {un, pwd} = sampleCredentials[1]
        if (un === username && pwd === password) {
          const {history} = this.props
          Cookies.set('signedStudent', true, {expires: 30})
          history.replace('/')
          this.setState({error: false})
        } else {
          this.setState({error: true})
        }
      }
    } else {
      this.setState({error: true})
    }
  }

  render() {
    const {user, username, password, error} = this.state
    const master = Cookies.get('signedMaster')
    const student = Cookies.get('signedStudent')
    if (master === 'true') {
      return <Redirect to="/" />
    }
    if (student === 'true') {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <form className="form-div" onSubmit={this.submitFormData}>
          <h3 className="login-heading">Please Login Here</h3>
          <select className="select-option" onChange={this.setUser}>
            <option value="Master"> Master</option>
            <option value="Student">Student</option>
          </select>
          <input
            placeholder=" Enter UserName"
            className="username-input"
            type="text"
            onChange={this.setUserName}
            value={username}
          />
          <input
            placeholder=" Enter Password "
            className="password-input"
            type="password"
            onChange={this.setPassword}
            value={password}
          />
          <button type="submit" className="login-button">
            Login
          </button>
          {error && <p className="error-message">* Invalid Credentials </p>}
        </form>
        <div className="img-div">
          <h2 className="selected-option">You are {user}</h2>
          <img
            className="login-image"
            src={
              user === 'Master'
                ? 'https://res.cloudinary.com/dl3cvyhk8/image/upload/v1675961634/professor_fbzzeu.jpg'
                : 'https://res.cloudinary.com/dl3cvyhk8/image/upload/v1675961657/student_obmrad.jpg'
            }
            alt="login-pic"
          />
        </div>
      </div>
    )
  }
}

export default LoginPage
