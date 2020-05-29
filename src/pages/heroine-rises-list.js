import React from "react"
import Layout from '../components/layout';
import SEO from '../components/seo'
import Img from 'gatsby-image';
import {Link} from 'gatsby';

const HeroineRisesList = ({data}) => (
  <Layout>
    <SEO title="Heroine Rises Wiki" keywords={[`wiki`, `heroine rises`, `madeline harbour`]} />
    <div className="container">
      <div className="wiki-page-list">
      <h4>{data.allMarkdownRemark.totalCount} Pages</h4>
        {data.allMarkdownRemark.edges.map(({ node },i) => (
              <Link to={node.frontmatter.path} key={i}>
                <Img fixed={node.frontmatter.mainImg.childImageSharp.fixed}></Img>
                <h5>{node.frontmatter.title}</h5>
              </Link>
        ))}
      </div>
    </div>
    
  </Layout>
)
export default HeroineRisesList

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {path: {ne: null}}}, sort: {order: ASC, fields: [frontmatter___title]}) {
      edges {
        node {
          id
          frontmatter {
            date
            path
            title
            mainImg {
              childImageSharp {
                fixed (width:200){
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
      totalCount
    }
  }  
`