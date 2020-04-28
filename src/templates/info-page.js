import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from '../components/seo';
import Img from "gatsby-image"
import RadarChart from "../components/radarChart";
import Background from '../images/site/wikiBackground.jpg';
import WikiNav from '../components/wiki-nav';

export default function Template({
  data, pageContext // this prop will be injected by the GraphQL query below.
}) {
  const charInfo = pageContext; // Holds all stats and other data. Images?
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  let featuredImgFluid = frontmatter.mainImg.childImageSharp.fluid;

  return (
    <Layout>
      <SEO title={`${frontmatter.title} | Heroine Rises`} keywords={[`${frontmatter.title}`, `about`, 'comic', 'Ezequiel Espinoza', 'Heroine Rises']} />    
      <div className="container" id="wiki-contain" style={{backgroundImage:`url(${Background})`}}>
      <div className="char-info">
      <h1 className="char-title">{frontmatter.title}</h1>
      <div className="char-side">
        <Img className="main-char-img" alt={frontmatter.title} fluid={featuredImgFluid} />
        <ul className="char-info-list">
        <li><div className="info-left">Full Name</div><div className="info-right">{charInfo.physical.name}</div></li>
        <li><div className="info-left">Age</div><div className="info-right">{charInfo.physical.age}</div></li>
        <li><div className="info-left">Birthday</div><div className="info-right">{charInfo.physical.birthday}</div></li>
        <li><div className="info-left">Birthplace</div><div className="info-right">{charInfo.physical.birthPlace}</div></li>
        <li><div className="info-left">Height</div><div className="info-right">{charInfo.physical.heightFt}'{charInfo.physical.heightIn}"</div></li>
        <li><div className="info-left">Eye Color</div><div className="info-right">{charInfo.physical.eye}</div></li>
        <li><div className="info-left">Hair Color</div><div className="info-right">{charInfo.physical.hair}</div></li>
        <li className="radar-section">
          <RadarChart stats={charInfo.stats} color={charInfo.physical.color}/>
        </li>
        </ul>
      </div>

      <div className="char-main">
        <div
          className="char-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    <WikiNav/>
    </div>
    </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        mainImg {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`