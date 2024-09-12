import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import {MARKS, INLINES, BLOCKS} from "@contentful/rich-text-types"
import moment from 'moment';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import LinkIcon from '../images/site/link-white.svg';

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

  const copyLink = () => {
    navigator.clipboard.writeText("https://www.ezequielespinoza.com/blog/" + post.slug);
  }

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
          <h3 className={"blog-title-category " + colorClass}>{post.category}</h3>
          <h1 className="blog-title-main">{post.title}</h1>
          <h4 className="blog-date">{moment(post.publishDate).format('MMMM DD YYYY')}</h4>
          <GatsbyImage className="blog-main-img" image={coverImage} alt={"Cover Image"}/>        
          <div className="blog-main-div">
            <section className="blog-main-social">
              <h4>By Ezequiel Espinoza Diaz</h4>
              <div className="blog-main-share">
                <h4>Share :</h4>
                <ul className="blog-main-share-links">
                  <li>
                    <img className="icon-link" onClick={copyLink} src={LinkIcon} height={30} width={30}></img>
                    <div className="icon-tooltip">Link copied!</div>
                  </li>
                  
                </ul>
              </div>
            </section>
          <div  className="blog-main-content">
            <div>{renderRichText(post.content, options)}</div>
            <p className={"blog-signature"}>-Ezequiel Espinoza Diaz</p>
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
    slug
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