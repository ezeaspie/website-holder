import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql , Link} from 'gatsby'
import EmailForm from '../components/EmailForm';

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title}/>
        <div
          style={{
            margin: `0 auto`,
            padding: `0`,
            paddingTop: 0,
          }}
        >
          {children}
          <footer>
           <EmailForm /> 
            <div className="footer-main">
            <ul className="footer-nav">
              <li className="footer-title">Navigation</li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="blog">Blog</Link></li>
              <li><Link to="comics">Comics</Link></li>
              <li><Link to="heroine-rises"><i>Heroine Rises</i></Link></li>
              <li><Link to="one-shots">One Shots</Link></li>
              <li><Link to="about">About</Link></li>
            </ul>
            <ul className="footer-contact">
                <li className="footer-title">Contact</li>
                <li><a href="https://www.instagram.com/ezeaspie/"><b>Instagram</b></a></li>
                <li><b>Email</b> - ezequielnoza@gmail.com</li>
                <li><a href="https://www.deviantart.com/ezeaspie"><b>DeviantArt</b></a></li>
            </ul>
            </div>
            <div className="copyright">
            <small>© 2019, Built with Gatsby by Ezequiel Espinoza Diaz</small>
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
