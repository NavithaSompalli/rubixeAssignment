import {Component} from 'react'

import './index.css'

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-bar-container">
        <div className="nav-bar-logo-container">
          <img
            src="https://media.glassdoor.com/sqll/2239481/rubixe-squarelogo-1584699443842.png"
            alt="hello"
            className="navbar-image"
          />
          <div className="rubixe-logo-container">
            <h1 className="company-name">Rubixe</h1>
            <hr />
            <p className="company-headline">Discriptive Technoogies of world</p>
          </div>
        </div>
        <div className="menu-bar-container">
          <span className="company-menu-name">HOME</span>
          <span className="company-menu-name">SERVICES</span>
          <span className="company-menu-name">PRODUCTS</span>
          <span className="company-menu-name">AI INTERNSHIP</span>
          <span className="company-menu-name">CAREER</span>
          <span className="company-menu-name">BLOG</span>
          <span className="company-menu-name">ABOUT</span>
          <span className="company-menu-name">CONTACT US</span>
        </div>
      </nav>
    )
  }
}

export default Navbar
