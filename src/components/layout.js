import * as React from 'react'
import '../styles/reset.css'
import '../styles/layout.css'
import { StaticQuery, graphql, Link } from 'gatsby'
import Header from './header'

const Layout = ({ pageTitle, children }) => {

  let igLink = `https://www.instagram.com/ezeas123/`;

  return (
    <main>
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
            <div className="footer-main">
            <ul className="footer-nav">
              <li className="footer-title">Navigation</li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/comics">Comics</Link></li>
              <li><Link to="/heroine-rises"><i>Heroine Rises</i></Link></li>
              <li><Link to="/one-shots-chapters">One Shots</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <ul className="footer-contact">
                <li className="footer-title">Contact</li>
                <li><a href={igLink}><b>Instagram</b></a></li>
                <li><a href='https://www.artstation.com/ezequiele'><b>ArtStation</b></a></li>
                <li><a href="https://www.deviantart.com/ezeaspie"><b>DeviantArt</b></a></li>
            </ul>
            </div>
            <div className="copyright">
            <small>© 2022, Built by Ezequiel Espinoza Diaz</small>
            </div>
          </footer>
        </div>
      </>
    )}
  />
    </main>
  )
}

export default Layout