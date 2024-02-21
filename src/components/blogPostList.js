import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'

const BlogPostList = ({children, data}) => {
  
  console.log(data);

  const blogPostData = data.allContentfulBlogPost.nodes;
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        )
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>
      },
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

  const selectFirstParagraph = (rawData) => {
    let parsedData = JSON.parse(rawData.content.raw);
    console.log(parsedData);
    const firstParagraph = parsedData.content[0];
    console.log(firstParagraph);
    let paragraphObject = {raw: JSON.stringify(firstParagraph)};
    console.log(paragraphObject);
    return paragraphObject;
  }

  

  return (
    <div className='blog-index-list'>
        {blogPostData.map((blogPost,i)=>{
            const getColor = () => {
              let check = blogPost.category;
              if(check === "One Shots"){
                console.log('pink');
                return 'pink'
              }
              if(check === "Heroine Rises"){
                return 'orange'
              }
              if(check === "Firestarter"){
                return 'red'
              }
              if(check === "Gallery"){
                return 'blue'
              }
              else{
                return 'yellow'
              }
            }
          
            let color = getColor(); 
            console.log(color);
            const image = getImage(blogPost.coverImage);
            const date = new Date(blogPost.publishDate).toLocaleDateString();
            return(
                <div className={"blog-index-preview " + color + "-transp"} key={"blogpost"+i}>
                <GatsbyImage className="blog-index-preview-image" image={image} alt="image"/>
                <Link to={`/blog/${blogPost.slug}`}>
                    <div className='blog-index-preview-content'>
                      <h5 className={'banner-category ' + color + ' blog-index-preview-category'}>{blogPost.category}</h5>
                        <h5 className='blog-index-preview-title'>{blogPost.title}</h5>
                        <h6 className='blog-index-preview-date'>{date}</h6>
                        {<div className='blog-index-preview-description'>{renderRichText(selectFirstParagraph(blogPost), options)}</div>}
                    </div>
                </Link>
                </div>
            )
        })}

    </div>
  )
}

export default BlogPostList