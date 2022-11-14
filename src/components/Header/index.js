// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

//add link Route to list items
const Header = () => (
  <nav className="header-container">
    <li className="list-item">
      <Link to="/">Home</Link>
    </li>
    <li className="list-item">
      <Link to="/about">About</Link>
    </li>
  </nav>
)

export default Header
