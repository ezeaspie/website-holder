import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout"
import BlogPostList from "../components/blogPostList"
import comicData from '../data/comicData'
import MainBanner from "../components/mainBanner"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query{
    allContentfulBlogPost {
        nodes {
          category
          title
          publishDate
          slug
          content{
            raw
          }
          coverImage {
            gatsbyImage(fit: CONTAIN, width: 1200)
          }
        }
      }
    }
  `)

  return (
      <Layout>
        <div className="container">
          <section className="blog-preview-list">
            <h2 className="section-header">News</h2>
            <BlogPostList data={data}></BlogPostList>
          </section>
        </div>
      </Layout>
  )
}

export default IndexPage


export const Head = () => (
  <>
  <title>Blog Entries</title>
  </>
)
