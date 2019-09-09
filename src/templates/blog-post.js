import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from '../components/seo';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import moment from 'moment';


export default ({ data }) => {  
  const post = data.contentfulBlogPost;
    return (
    <Layout>
      <div className="container">
          <SEO title={`${post.title} | Blog`} keywords={[`${post.title}`, `blog`, 'comic', 'Ezequiel Espinoza']} />    
          <Img className="blog-main-img" fluid={post.coverImage.fluid} alt={post.coverImage.description}/>        
          <div className="blog-main-div">
          <h1>{post.title}</h1>
          <h2 className="blog-date">{moment(post.publishDate).format('MMMM DD YYYY')}</h2>
          <div  className="blog-main-content">
          {documentToReactComponents(post.childContentfulBlogPostContentRichTextNode.json)}
          </div>
          <Link to="/blog">Return to Blog Index</Link> 
          </div>      
       </div>   
    </Layout>
  )
}

export const query = graphql`  
query($slug: String!) {   
  contentfulBlogPost ( slug: { eq: $slug }){
    title
    childContentfulBlogPostContentRichTextNode {
      json
    }
    publishDate
    coverImage{
      fluid(maxWidth: 613) {
        ...GatsbyContentfulFluid_noBase64
      }
      description
    }
  }

}`