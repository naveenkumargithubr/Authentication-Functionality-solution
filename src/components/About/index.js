// Write your JS code here
import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton' // import logoutbutton add it to below heading

const About = () => (
  <>
    <Header />
    <div className="about-container">
      <h1>About Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default About
