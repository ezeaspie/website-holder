import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <div className="main-head">
      <Link to="/">
          <h1>{siteTitle}</h1>
          <p>a creative archive</p>
        </Link>
      </div> 
      <nav>
        <ul>
        <li className="hr-btn"><Link to="/heroine-rises"><i>Heroine Rises</i></Link></li>
        <li><Link to="/Gallery">Gallery</Link></li>
        <li><Link to="/comics">Comics</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
