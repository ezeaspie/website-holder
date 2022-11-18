import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from '../components/seo';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {BLOCKS} from "@contentful/rich-text-types"
import moment from 'moment';


export default ({ data }) => {  
  const options = {
    renderNode:{
      [BLOCKS.EMBEDDED_ASSET]: (node,children)=>{
        console.log(node);
        return(
          <img className="blog-image" src={node.data.target.fields.file["en-US"].url}/>
        );
      }
    }
  }
  const post = data.contentfulBlogPost;

  const colorClassList = ['orange','pink','red','yellow','blue'];
  let colorClass = colorClassList[0];

  if(post.category === "Heroine Rises"){
    colorClass = colorClassList[0];
  }
  if(post.category === "Firestarter"){
    colorClass = colorClassList[2];
  }
  if(post.category === "One Shots"){
    colorClass=colorClassList[1];
  }
  if(post.category === "Gallery"){
    colorClass = colorClassList[4];
  }
  if(post.category === "Misc."){
    colorClass = colorClassList[3];
  }

  console.log(colorClass);

    return (
    <Layout>
      <div className="container blog-post-container">
          <SEO title={`${post.category + ': ' + post.title} | Blog`} keywords={[`${post.title}`, `blog`, 'comic', 'Ezequiel Espinoza']} />    
          <h2 className={"blog-title-category " + colorClass + "-banner"}>{post.category}</h2>
          <h1 className="blog-title-main">{post.title}</h1>
          <h2 className="blog-date">{moment(post.publishDate).format('MMMM DD YYYY')}</h2>
          <Img className="blog-main-img" fluid={post.coverImage.fluid} alt={post.coverImage.description}/>        
          <div className="blog-main-div">
          <div  className="blog-main-content">
            {documentToReactComponents(post.childContentfulBlogPostContentRichTextNode.json,options)}
            <span className={"blog-main-footer " + colorClass + "-banner"}>-Ezequiel Espinoza Diaz</span>
          </div>
          <Link to="/blog" className={"blog-link-button " + colorClass}>{`< Return to Blog Index`}</Link> 
          </div>      
       </div>   
    </Layout>
  )
}

export const query = graphql`  
query($slug: String!) {   
  contentfulBlogPost ( slug: { eq: $slug }){
    title
    category
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