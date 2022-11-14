// Write your JS code here
import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

// if jwttoken is undefined then navigate to login page

const ProtectedRoute = props => {
  const jwTtoken = Cookies.get('jwt_token')
  if (jwTtoken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} /> // here props as passed using spread operator
}

export default ProtectedRoute
