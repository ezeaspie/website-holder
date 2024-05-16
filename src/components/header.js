import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { FaBars } from "react-icons/fa";

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-title-container">
      <Link className='header-homepage-link' to="/">
      <h2>{siteTitle}</h2>
      <p>a creative archive</p>
      </Link>
    </div> 
    
    <nav className='header-nav'>
      <input id="menu-icon-check" type="checkbox" name="menu-check" />
      <label for="menu-icon-check">
        <FaBars id='menu-icon'/>
      </label>
      <ul className='header-submenu'>
      {/* <li className="hr-btn"><Link to="/heroine-rises"><i>Heroine Rises</i></Link></li> */}
      <li id="fs-btn"><Link  className="header-link" to="/firestarter"><i>Firestarter</i></Link></li>
      <li><Link className="header-link" to="/gallery">Gallery</Link></li>
      <li><Link className="header-link" to="/comics">Comics</Link></li>
      <li><Link className="header-link" to="/blog">Blog</Link></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
