import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const master = Cookies.get('signedMaster')
  const student = Cookies.get('signedStudent')

  if (master === 'true') {
    return <Route {...props} />
  }
  if (student === 'true') {
    return <Route {...props} />
  }
  return <Redirect to="/login" />
}

export default ProtectedRoute
