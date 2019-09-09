import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from "gatsby"
import SEO from '../components/seo'
import moment from 'moment';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Blog = ({data}) => (
  <Layout>
    <SEO title="Blog" keywords={[`art`, `tutorials`, `drawing`]} />
    <div className="container">
    <h4>{data.allContentfulBlogPost.totalCount} Posts</h4>
        {data.allContentfulBlogPost.edges.map(({ node },i) => (
            <Link to={'/blog/' + node.slug} key={i}>
            <div className="blog-preview">
              <img className="blog-preview-image" src={node.coverImage.resize.src} alt={node.coverImage.description}/>        
              <div className="blog-preview-content">
                <h5>{node.title}</h5>
                <h6>{moment(node.publishDate).format('MMMM DD YYYY')}</h6>
                <p>{documentToReactComponents(node.childContentfulBlogPostContentRichTextNode.json.content[0])}</p>
              </div>            
            </div>
            </Link>
        ))}
    </div>
    
  </Layout>
)

export default Blog

export const query = graphql`
  query {
    allContentfulBlogPost(sort: {fields: publishDate, order: DESC}){
      edges {
        node {
          coverImage {
            resize(width: 300) {
              src
            }
            description
          }
          childContentfulBlogPostContentRichTextNode {
            json
          }
          publishDate
          title
          slug
        }
      }
      totalCount
    }   
  }
`
