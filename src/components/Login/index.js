// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect, withRouter} from 'react-router-dom' // import redirect and withRouter to navigate other components
import './index.css'

const Login = props => {
  const jwTtoken = Cookies.get('jwt_token') // get the jwtToken from cookies

  // here we set the jwtToken when the user has logged in and navigate Route to Home page
  const setLoginCookie = token => {
    Cookies.set('jwt_token', token, {expires: 30}) // here we store the jwt_token
    const {history} = props
    history.replace('/')
  }

  // here we have send the user credentials request to server
  const onClickLogin = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    // recieve the response from the server
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      setLoginCookie(data.jwt_token)
    }
  }

  // if user has logged in then navigate to home Route
  if (jwTtoken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-container">
      <h1>Please Login</h1>
      <button type="button" onClick={onClickLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default withRouter(Login)
