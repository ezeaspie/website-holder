import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import {MARKS, INLINES, BLOCKS} from "@contentful/rich-text-types"
import moment from 'moment';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from 'gatsby-source-contentful/rich-text'

export default ({ data }) => {  
    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const { gatsbyImageData, description } = node.data.target
          return (
            <GatsbyImage
              image={getImage(gatsbyImageData)}
              alt={description}
            />
          )
       },
      },
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

  console.log({colorClass, data});
  const coverImage = getImage(post.coverImage);


    return (
    <Layout>
      <div className="container blog-post-container">
          <h2 className={"blog-title-category " + colorClass + "-banner"}>{post.category}</h2>
          <h1 className="blog-title-main">{post.title}</h1>
          <h2 className="blog-date">{moment(post.publishDate).format('MMMM DD YYYY')}</h2>
          <GatsbyImage className="blog-main-img" image={coverImage} alt={"Cover Image"}/>        
          <div className="blog-main-div">
          <div  className="blog-main-content">
            <div>{renderRichText(post.content, options)}</div>
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
    category
    content {
      raw
      references {
        ... on ContentfulAsset {
          contentful_id
          title
          description
          gatsbyImageData(width: 1000)
          __typename
        }
      }
    }
    coverImage {
      gatsbyImage(width: 1000, fit: COVER)
    }
    title
    publishDate
  }

}`