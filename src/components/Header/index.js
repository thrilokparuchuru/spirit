import './index.css'
import {FiLogOut, FiActivity} from 'react-icons/fi'
import Cookies from 'js-cookie'
import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'

class Header extends Component {
  clearCookies = () => {
    const {history} = this.props
    Cookies.remove('signedMaster')
    Cookies.remove('signedStudent')
    history.replace('/login')
  }

  render() {
    return (
      <nav>
        <div className="nav1">
          <Link to="/" className="link">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/dl3cvyhk8/image/upload/v1676089709/spritle_wuhnwo.png"
              alt="website-logo"
            />
          </Link>
          <h6>
            Welcome to <span>You tell, I do</span>
          </h6>
        </div>
        <div className="nav2">
          <Link to="/log" className="links">
            <FiActivity className="log" />
          </Link>
          <div className="logout">
            <FiLogOut onClick={this.clearCookies} />
          </div>
        </div>
      </nav>
    )
  }
}
export default withRouter(Header)
