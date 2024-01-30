import React from 'react'
import logo from "../Assets/brand_logo.png";

const Navbar = () => {
  return (
    <nav>
    <div className="logo">
      <img src={logo} alt='careerboat logo'/>
    </div>
    <div className="navbar-link">
      
      <a href='#'>Why</a>
      <a href='#'>Value</a>
      <a href='#'>Process</a>
      <a href='#'>Testimonials</a>
    </div>
<button class="request-button" role="button">
  Request to invite
</button>
    </nav>
  )
}

export default Navbar