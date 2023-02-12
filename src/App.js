import './App.css'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import LoginPage from './components/loginPage'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import ActivityLog from './components/activityLog'

// Replace your code here
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/log" component={ActivityLog} />
    </Switch>
  </BrowserRouter>
)

export default App
