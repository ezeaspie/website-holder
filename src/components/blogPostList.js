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

  return (
    <h1>
        {blogPostData.map((blogPost,i)=>{
            const image = getImage(blogPost.coverImage);
            return(
                <div className="blog-preview" key={"blogpost"+i}>
                <Link to={`/blog/${blogPost.slug}`}>
                    <GatsbyImage className="blog-preview-image" image={image} alt="image"/>
                    <div className='blog-preview-content'>
                        <h5 className='blog-preview-title'>{blogPost.category + ":" + blogPost.title}</h5>
                        <h6>{blogPost.publishDate}</h6>
                        <p>Blah blah blah blah</p>
                        {/* <div>{renderRichText(blogPost.content, options)}</div> */}
                    </div>
                </Link>
                </div>
            )
        })}

    </h1>
  )
}

export default BlogPostList